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

export const CustomCarouselV2 = ({
	className,
	data,
}: {
	className?: string;
	data: ShopCardType[];
}) => {
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
				opts={{ align: 'start' }}
				className="w-full overflow-visible"
			>
				<CarouselContent className="overflow-visible">
					{data.map((slide) => (
						<CarouselItem
							className="min-w-[215px] flex-grow basis-1/2 sm:basis-1/3  md:basis-1/4 overflow-hidden rounded-md"
							key={slide.id}
						>
							<ShopCard
								href={slide.href}
								imageUrl={slide.imageUrl}
								price={slide.price}
								oldPrice={slide.oldPrice}
								title={slide.title}
								rate={slide.rate}
								discount={slide.discount}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};
