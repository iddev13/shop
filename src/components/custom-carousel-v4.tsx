'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { type CarouselApi } from '@/components/ui/carousel';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';

type SliderDataType = {
	id: number;
	path: string;
	alt: string;
};

const sliderData: SliderDataType[] = [
	{
		id: 1,
		path: '/assets/image/shirts/t-shirt1.png',
		alt: 'Image',
	},
	{
		id: 2,
		path: '/assets/image/shirts/t-shirt2.png',
		alt: 'Image',
	},
	{
		id: 3,
		path: '/assets/image/shirts/t-shirt3.png',
		alt: 'Image',
	},
	{
		id: 4,
		path: '/assets/image/shirts/t-shirt1.png',
		alt: 'Image',
	},
	{
		id: 5,
		path: '/assets/image/shirts/t-shirt2.png',
		alt: 'Image',
	},
	{
		id: 6,
		path: '/assets/image/shirts/t-shirt3.png',
		alt: 'Image',
	},
];

export const CustomCarouselV4 = ({ className }: { className?: string }) => {
	const [api, setApi] = useState<CarouselApi>();
	const [apiThumb, setApiThumb] = useState<CarouselApi>();
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
					setApi={setApiThumb}
					opts={{ loop: true, align: 'start' }}
					orientation="vertical"
					className="w-[100px] h-[340px] overflow-hidden"
				>
					<CarouselContent>
						{sliderData.map((slide, index) => (
							<CarouselItem
								className="md:basis-1/2 overflow-hidden rounded-md"
								key={slide.id}
								onClick={() => {
									api?.scrollTo(index);
								}}
							>
								<Card className="bg-pink-100">
									<CardContent className="relative flex flex-col aspect-square items-center justify-center p-6">
										<Image src={slide.path} alt={slide.alt} fill />
										<span className="text-xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
				<Carousel
					setApi={setApi}
					opts={{ loop: true }}
					className="w-[250px] h-[330px]"
				>
					<CarouselContent>
						{sliderData.map((slide) => (
							<CarouselItem
								className="flex items-center justify-center w-[200px] h-[300px] relative overflow-hidden"
								key={slide.id}
							>
								<Image
									src={slide.path}
									alt={slide.alt}
									fill
									className="object-contain"
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
			<div className="flex items-center justify-center gap-x-3 mt-12">
				<Button
					onClick={() => {
						api?.scrollTo(current - 1);
						apiThumb?.scrollTo(current - 1);
					}}
				>
					Left
				</Button>
				<Button
					onClick={() => {
						api?.scrollTo(current + 1);
						apiThumb?.scrollTo(current + 1);
					}}
				>
					Right
				</Button>
			</div>
		</div>
	);
};
