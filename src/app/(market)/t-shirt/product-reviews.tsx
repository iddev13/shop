'use client';

import { useMedia } from 'react-use';
import { Filter } from 'lucide-react';

import { Btn } from '@/components/btn';
import { ReviewsCard } from '@/components/cards/reviews-card';
import { Section } from '@/components/section';
import {
	arrivalsData,
	arrivalsSliderData,
	productReviewsData,
} from '@/constants';
import { ShopCard } from '@/components/cards/shop-card';
import { CustomCarouselV2 } from '@/components/custom-carousel-v2';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export const ProductReviews = () => {
	const isMobile = useMedia('(max-width: 1024px)');
	return (
		<section>
			<div className="flex items-center justify-between py-4">
				<h1 className="text-2xl font-bold font-satoshi">
					All reviews&nbsp;
					<span className="text-xs text-muted-foreground font-normal">
						(451)
					</span>
				</h1>
				<div className="flex items-center gap-x-2">
					<div>
						{/* TODO: Add reviews filter */}
						<Button variant="secondary" size="icon" className="rounded-full">
							<Filter className="size-4" />
						</Button>
					</div>
					<div>
						{/* TODO: Add sorting */}
						<Select>
							<SelectTrigger className="max-w-[180px] rounded-3xl gap-x-3 bg-secondary px-4 shadow-none border-none">
								<SelectValue placeholder="Latest" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Select a sort method</SelectLabel>
									<SelectItem value="latest">Latest</SelectItem>
									<SelectItem value="popular">Popular</SelectItem>
									<SelectItem value="ascending">Ascending</SelectItem>
									<SelectItem value="descending">Descending</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<Btn label="Write a Review" size="sm" />
				</div>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6 lg:mb-9">
				{productReviewsData.map((card) => (
					<ReviewsCard
						key={card.id}
						author={card.author}
						text={card.text}
						rating={card.rating}
						date={card.date}
						className="mx-auto"
					/>
				))}
			</div>
			<div className="flex items-center justify-center mb-12 lg:mb-16">
				<Btn label="Load More Reviews" variant="secondary" />
			</div>
			<Section title="You might also like">
				<>
					{!isMobile && (
						<div className="flex items-center gap-5 px-2 mb-4 lg:mb-10 justify-around">
							{arrivalsData.map((card) => (
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
					)}
					{isMobile && <CustomCarouselV2 data={arrivalsSliderData} />}
				</>
			</Section>
		</section>
	);
};
