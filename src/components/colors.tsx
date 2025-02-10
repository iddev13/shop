import { cn } from '@/lib/utils';
import { ColorsType } from '@/types/product';

type Props = {
	data: ColorsType[];
};

export const Colors = ({ data }: Props) => {
	return (
		<div className="flex items-center flex-wrap gap-2">
			{data.map((elem) => (
				<button
					type="button"
					key={elem.label}
					title={elem.label}
					disabled={elem.disabled}
					className={cn(
						'w-9 h-9 rounded-full p-0 inline-block overflow-hidden',
						elem.disabled && 'opacity-40',
						elem.label === 'red' && 'bg-rose-500',
						elem.label === 'pink' && 'bg-pink-500',
						elem.label === 'green' && 'bg-green-500',
						elem.label === 'orange' && 'bg-amber-500'
					)}
				/>
			))}
		</div>
	);
};
