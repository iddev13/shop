'use client';

import { useEffect, useState } from 'react';

import { type CarouselApi } from '@/components/ui/carousel';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { reviewsData } from '@/constants';
import { ReviewsCard } from './cards/reviews-card';
import { MoveLeft, MoveRight } from 'lucide-react';

export const CustomCarouselV3 = ({ className }: { className?: string }) => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) return;

		setCurrent(api.selectedScrollSnap());

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div className={cn('relative', className)}>
			<Carousel
				setApi={setApi}
				opts={{ loop: true, align: 'center' }}
				className='max-w-[1920px] w-full mx-auto overflow-hidden relative before:block before:content-[""] xl:before:w-[105px] 2xl:before:w-[335px] before:h-full before:bg-transparent before:absolute before:top-0 before:-left-1 before:backdrop-blur-sm before:z-50 before:rounded-2xl after:block after:content-[""] xl:after:w-[105px] 2xl:after:w-[335px] after:h-full after:transparent after:absolute after:top-0 after:-right-1 after:backdrop-blur-sm after:z-50 after:rounded-2xl'
			>
				<CarouselContent className="px-4 sm:px-0">
					{reviewsData.map((slide) => (
						<CarouselItem
							className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4  xl:basis-1/5 overflow-hidden min-w-[360px] xl:min-w-[400px] cursor-grab active:cursor-grabbing"
							key={slide.id}
						>
							<ReviewsCard
								key={slide.id}
								author={slide.author}
								text={slide.text}
								rating={slide.rating}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className="flex items-center justify-center gap-x-1 w-fit  absolute -top-20 right-1 sm:right-4 md:-top-20 md:right-32">
				<Button
					className="p-2"
					variant="ghost"
					onClick={() => api?.scrollTo(current - 1)}
				>
					<MoveLeft className="size-4" />
				</Button>
				<Button
					className="p-2"
					variant="ghost"
					onClick={() => api?.scrollTo(current + 1)}
				>
					<MoveRight />
				</Button>
			</div>
		</div>
	);
};
