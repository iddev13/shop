import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { StyleCardType } from '@/types/cards';

export const StyleCard = ({
	href,
	label,
	imageUrl,
	size = 'default',
}: StyleCardType) => {
	return (
		<Card className="rounded-3xl overflow-hidden border-none shadow-none">
			<CardContent
				className={cn(
					'p-0 relative w-[310px] h-[190px] md:w-[407px] md:h-[289px]',
					size === 'large' && 'xl:w-[684px]'
				)}
			>
				<Link href={href}>
					<span className="capitalize inline-block absolute top-4 left-4 text-2xl  lg:text-4xl font-bold">
						{label}
					</span>
					<Image
						src={imageUrl}
						alt="Image"
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						className="object-cover"
					/>
				</Link>
			</CardContent>
		</Card>
	);
};

export default StyleCard;
