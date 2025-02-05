'use client';

import { useEffect, useState } from 'react';

import { type CarouselApi } from '@/components/ui/carousel';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { ShopCard } from './cards/shop-card';
import { ShopCardType } from '@/types/cards';

interface SliderDataType extends ShopCardType {
	alt: string;
}

const sliderData: SliderDataType[] = [
	{
		id: 1,
		imageUrl: '/assets/image/shirts/1.png',
		alt: 'Image',
		title: 'T-shirt with tape details',
		rate: 4.5,
		price: 120,
	},
	{
		id: 2,
		imageUrl: '/assets/image/shirts/2.png',
		alt: 'Image',
		title: 'T-shirt with tape details',
		rate: 3.5,
		price: 240,
		oldPrice: 260,
		discount: 20,
	},
	{
		id: 3,
		imageUrl: '/assets/image/shirts/3.png',
		alt: 'Image',
		title: 'T-shirt with tape details',
		rate: 4.5,
		price: 180,
	},
	{
		id: 4,
		imageUrl: '/assets/image/shirts/4.png',
		alt: 'Image',
		title: 'T-shirt with tape details',
		rate: 4.5,
		price: 130,
		oldPrice: 160,
		discount: 30,
	},
];

export const CustomCarouselV2 = ({ className }: { className?: string }) => {
	const [api, setApi] = useState<CarouselApi>();
	// const [{}, setCurrent] = useState<number>(0);

	useEffect(() => {
		if (!api) {
			return;
		}
		// setCurrent(api.selectedScrollSnap());

		api.on('select', () => {
			// setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div className={cn('mb-8 pl-4', className)}>
			<Carousel
				setApi={setApi}
				opts={{ loop: true, align: 'start' }}
				className="w-full overflow-visible"
			>
				<CarouselContent className="overflow-visible">
					{sliderData.map((slide) => (
						<CarouselItem
							className="min-w-[215px] flex-grow basis-1/2 sm:basis-1/3  md:basis-1/4 overflow-hidden rounded-md"
							key={slide.id}
						>
							<ShopCard
								imageUrl={slide.imageUrl}
								price={120}
								oldPrice={260}
								title="T-shirt with tape details"
								rate={3.6}
								discount={50}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};
