'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trash } from 'lucide-react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CartCardType } from '@/types/cards';
import { Amount } from '@/components/amount';
import { Price } from '@/components/price';
import { cn } from '@/lib/utils';

export const CartCard = ({
	href,
	title,
	size,
	color,
	price,
	imageUrl,
	amount,
	className,
}: CartCardType) => {
	const [currentPrice, setCurrentPrice] = useState<number>(0);

	useEffect(() => {
		setCurrentPrice(price);
	}, []);

	return (
		<Card
			className={cn(
				'max-w-[755px] w-full flex gap-2 items-center p-3 lg:p-5 overflow-hidden',
				className
			)}
		>
			<Link
				href={href}
				className="block w-[99px] h-[99px] md:w-[124px] md:h-[124px] relative rounded-md bg-rose-200 flex-shrink-0"
			>
				<Image
					src={imageUrl}
					alt="Preview Image"
					fill
					sizes="(max-width: 768px) 30vw, 15vw"
					className="object-contain"
				/>
			</Link>
			<div className="flex-auto">
				<CardContent className="p-0">
					<div className="flex items-center justify-between gap-x-1">
						<h4 className="text-base font-bold lg:text-xl capitalize">
							<Link href={href}>{title}</Link>
						</h4>
						<div>
							<Button className="rounded-full" variant="ghost" size="icon">
								<Trash className="size-4 text-red-500" />
							</Button>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex-auto">
							<div>
								<span className="text-xs md:text-sm">Size:&nbsp;</span>
								<span className="text-xs md:text-sm text-muted-foreground capitalize">
									{size}
								</span>
							</div>
							<div>
								<span className="text-xs md:text-sm">Color:&nbsp;</span>
								<span className="text-xs md:text-sm text-muted-foreground capitalize">
									{color}
								</span>
							</div>
						</div>
					</div>
				</CardContent>
				<CardFooter className="p-0 flex items-center justify-between h-full w-full">
					<Price value={currentPrice} />
					<Amount value={amount} />
				</CardFooter>
			</div>
		</Card>
	);
};
