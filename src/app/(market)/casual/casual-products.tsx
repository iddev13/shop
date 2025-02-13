import { AppPagination } from '@/components/app-pagination';
import { ShopCard } from '@/components/cards/shop-card';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { casualProductsData } from '@/constants';

export const CasualProducts = () => {
	return (
		<div>
			<div className="flex items-end justify-between mb-4">
				<h1 className="text-xl lg:text-3xl flex-auto">Casual</h1>
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-2 whitespace-nowrap text-sm text-muted-foreground">
						{/* TODO: Add showing amount and all amount  */}
						<span>Showing 1-10 of 100 Products</span>
						<span>Sort by:</span>
					</div>
					{/* TODO: Add sorting */}
					<Select>
						<SelectTrigger className="max-w-[180px] gap-x-1 px-2 text-base [&_svg]:opacity-100 shadow-none border-none focus:ring-0">
							<SelectValue placeholder="Popular" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Select a sort method</SelectLabel>
								<SelectItem value="popular">Popular</SelectItem>
								<SelectItem value="latest">Latest</SelectItem>
								<SelectItem value="ascending">Ascending</SelectItem>
								<SelectItem value="descending">Descending</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
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
