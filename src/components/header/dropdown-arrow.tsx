'use client';

import { ChevronRight } from 'lucide-react';

import { DropdownArrowType } from '@/types/header';
import { cn } from '@/lib/utils';

export const DropdownArrow = ({ dropdownStatus }: DropdownArrowType) => {
	return (
		<span>
			<ChevronRight
				className={cn(
					'size-4 transition-transform absolute top-4 right-2 lg:top-1/2 lg:right-1 lg:-translate-y-1/2 dropdown-btn',
					dropdownStatus && 'rotate-90 text-primary-foreground'
				)}
			/>
		</span>
	);
};
