import { CartCard } from '@/components/cards/cart-card';
import { cartCardsData } from '@/constants';
import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

export const Cards = ({ className }: Props) => {
	return (
		<div className={cn('grid grid-cols-1 gap-2 lg:gap-4', className)}>
			{cartCardsData.map((card) => (
				<CartCard
					key={card.id}
					href={card.href}
					imageUrl={card.imageUrl}
					title={card.title}
					size={card.size}
					color={card.color}
					price={card.price}
					amount={card.amount}
				/>
			))}
		</div>
	);
};
