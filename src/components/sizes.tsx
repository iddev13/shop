'use client';

import { cn } from '@/lib/utils';
import { Btn } from '@/components/btn';
import { SizesType } from '@/types/product';

type Props = {
	data: SizesType[];
	className?: string;
};

export const Sizes = ({ data, className }: Props) => {
	return (
		<div className={cn('mb-6 flex items-center flex-wrap gap-2', className)}>
			{data.map((size) => (
				<Btn
					key={size.label}
					label={size.label}
					variant="secondary"
					size="sm"
					className={cn(
						'hover:bg-primary hover:text-primary-foreground capitalize',
						size.isActive && 'bg-primary text-primary-foreground'
					)}
					onClick={(e) => {
						console.log(e);
					}}
				/>
			))}
		</div>
	);
};
