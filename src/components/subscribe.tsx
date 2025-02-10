'use client';

import { cn } from '@/lib/utils';
import { SubscribeForm } from '@/components/forms/subscribe-form';
import { useEffect, useState } from 'react';

type Props = {
	className?: string;
};

export const Subscribe = ({ className }: Props) => {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<section
			className={cn(
				'max-w-7xl w-full mx-auto rounded-2xl p-46 lg:p-9 flex items-center gap-8 bg-secondary-foreground p-4',
				className
			)}
		>
			<h1 className="uppercase lg:basis-1/2 text-3xl lg:text-4xl text-primary-foreground text-left">
				STAY UPTO DATE ABOUT OUR LATEST OFFERS
			</h1>
			<div className="text-primary-foreground mx-auto flex items-center justify-center">
				<SubscribeForm />
			</div>
		</section>
	);
};
