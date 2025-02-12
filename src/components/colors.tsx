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
					style={{ backgroundColor: elem.value }}
					className={cn(
						'w-9 h-9 rounded-full p-0 inline-block overflow-hidden border',
						elem.disabled && 'opacity-30'
					)}
				/>
			))}
		</div>
	);
};
