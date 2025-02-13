import { Check } from 'lucide-react';

import { ColorsType } from '@/types/product';
import { cn } from '@/lib/utils';

type Props = {
	data: ColorsType[];
	sm?: boolean; // sm 5 colors in row
};

export const Colors = ({ data, sm }: Props) => {
	return (
		<div className={cn('flex items-center flex-wrap gap-2', sm && 'max-w-64')}>
			{data.map((elem) => (
				<button
					type="button"
					key={elem.label}
					title={elem.disabled ? 'Not Available' : elem.label}
					disabled={elem.disabled}
					style={{ backgroundColor: elem.value }}
					className={cn(
						'w-8 h-8 rounded-full p-0 inline-flex items-center justify-center overflow-hidden border',
						elem.disabled && 'opacity-20'
					)}
				>
					{elem.isActive && (
						<Check
							className={cn(
								'size-4 text-secondary',
								elem.value === '#ffffff' && 'text-black'
							)}
						/>
					)}
				</button>
			))}
		</div>
	);
};
