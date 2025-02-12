'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import {
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/carousel';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';
import { productSliderData } from '@/constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const CustomCarouselV4 = ({ className }: { className?: string }) => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}
		setCurrent(api.selectedScrollSnap());

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div className={cn('', className)}>
			<div className="flex items-center justify-around">
				<Carousel
					opts={{ align: 'start' }}
					orientation="vertical"
					className="w-full h-[220px] max-w-[150px] flex flex-col items-center justify-center"
				>
					<CarouselContent className="-mt-1 h-[200px]">
						{productSliderData.map((slide, index) => (
							<CarouselItem
								className="basis-1/3 overflow-hidden rounded-md"
								key={slide.id}
								onClick={() => {
									api?.scrollTo(index);
								}}
							>
								<Card>
									<CardContent className="relative flex flex-col aspect-square items-center justify-center p-6">
										<Image src={slide.imageUrl} alt={slide.label} fill />
										<span className="text-xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
				<Carousel
					setApi={setApi}
					opts={{ loop: true }}
					className="w-[444px] h-[530px]"
				>
					<CarouselContent>
						{productSliderData.map((slide) => (
							<CarouselItem
								className="flex items-center justify-center w-full h-[530px] relative overflow-hidden "
								key={slide.id}
							>
								<Image
									src={slide.imageUrl}
									alt={slide.label}
									fill
									className="object-contain"
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="flex items-center justify-center gap-x-4 mt-2 ">
				<Button
					onClick={() => {
						api?.scrollTo(current - 1);
					}}
					className="rounded-full w-9 h-9"
					variant='secondary'
				>
					<ArrowLeft className="size-4" />
				</Button>
				<Button
					onClick={() => {
						api?.scrollTo(current + 1);
					}}
					className="rounded-full w-9 h-9"
					variant='secondary'
				>
					<ArrowRight className="size-4" />
				</Button>
			</div>
				</Carousel>
			</div>
		
		</div>
	);
};
