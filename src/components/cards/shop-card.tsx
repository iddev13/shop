import Image from 'next/image';

import { ShopCardType } from '@/types/cards';
import { Price } from '@/components/price';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { DiscountBadge } from '../discount-badge';
import { Rating } from '../rating';

export const ShopCard = ({
	imageUrl,
	title,
	price,
	oldPrice,
	discount,
}: ShopCardType) => {
	return (
		<Card className="border-none shadow-none">
			<CardContent className="p-0 relative w-[198px] h-[200px] lg:w-[295px] lg:h-[298px] bg-secondary rounded-3xl overflow-hidden mb-4">
				<Image
					src={imageUrl}
					alt="Image"
					fill
					sizes="(max-width: 768px) 85vw, 25vw"
					className="object-contain"
				/>
			</CardContent>
			<CardFooter className="p-0 space-y-2 flex flex-col items-start">
				<CardTitle className="capitalize">{title}</CardTitle>
				<Rating />
				<div className="flex items-center gap-x-2">
					<Price value={price} />
					{oldPrice && <Price value={oldPrice} isOldPrice />}
					{discount && <DiscountBadge value={discount} />}
				</div>
			</CardFooter>
		</Card>
	);
};
