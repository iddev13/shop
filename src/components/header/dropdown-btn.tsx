'use client';

import { cn } from '@/lib/utils';
import { DropdownBtnType } from '@/types/header';

export const DropdownBtn = ({
	label,
	children,
	dropdownStatus,
	depthLevel,
}: DropdownBtnType) => {
	return (
		<div
			className={cn(
				'relative overflow-hidden',
				dropdownStatus && 'border-primary border-b-2',
				depthLevel! > 0 && 'shadow-md'
			)}
		>
			<button
				type="button"
				className={cn(
					'capitalize w-full text-start px-2 py-3 overflow-hidden whitespace-nowrap text-ellipsis dropdown-btn',
					dropdownStatus && 'bg-primary text-primary-foreground'
				)}
			>
				{label}
			</button>
			{children}
		</div>
	);
};
