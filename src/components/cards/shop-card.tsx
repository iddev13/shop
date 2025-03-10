import Image from 'next/image';
import Link from 'next/link';

import { Price } from '@/components/price';
import { Rating } from '@/components/rating';
import { DiscountBadge } from '@/components/discount-badge';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { ShopCardType } from '@/types/cards';
import { cn } from '@/lib/utils';

export const ShopCard = ({
	href,
	imageUrl,
	title,
	price,
	oldPrice,
	discount,
	rate,
	className,
}: ShopCardType) => {
	return (
		<Card
			className={cn(
				'border-none shadow-none flex flex-col items-center',
				className
			)}
		>
			<CardContent className="p-0 relative w-[198px] h-[200px] xl:w-[295px] xl:h-[298px] bg-secondary rounded-3xl overflow-hidden mb-4">
				<Link href={href}>
					<Image
						src={imageUrl}
						alt="Image"
						fill
						sizes="(max-width: 768px) 85vw, 25vw"
						className="object-contain"
					/>
				</Link>
			</CardContent>
			<CardFooter className="w-full py-0 lg:px-2 space-y-2 flex flex-col items-start">
				<CardTitle className="capitalize">
					<Link href={href}>{title}</Link>
				</CardTitle>
				<Rating value={rate} />
				<div className="flex items-center gap-x-2">
					<Price value={price} />
					{oldPrice && <Price value={oldPrice} isOldPrice />}
					{discount && <DiscountBadge value={discount} />}
				</div>
			</CardFooter>
		</Card>
	);
};
