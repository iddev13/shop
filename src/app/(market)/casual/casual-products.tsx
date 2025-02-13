import { AppPagination } from '@/components/app-pagination';
import { ShopCard } from '@/components/cards/shop-card';
import { casualProductsData } from '@/constants';

export const CasualProducts = () => {
	return (
		<div>
			<div className="flex items-end justify-between mb-4">
				<h1 className="text-xl lg:text-3xl flex-auto">Casual</h1>
				<div className="flex">
					<span>Showing 1-10 of 100 Products</span>
					<div>Sort by: Most Popular</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-x-5 gap-y-9 mb-4 pb-6 border-b">
				{casualProductsData.map((card) => (
					<ShopCard
						key={card.id}
						href={card.href}
						imageUrl={card.imageUrl}
						price={card.price}
						oldPrice={card.oldPrice}
						title={card.title}
						rate={card.rate}
						discount={card.discount}
					/>
				))}
			</div>
			<AppPagination className="px-4" />
		</div>
	);
};
