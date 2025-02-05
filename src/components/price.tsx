import { cn } from '@/lib/utils';

type Props = {
	value: number;
	className?: string;
	isOldPrice?: boolean;
};

export const Price = ({ value, className, isOldPrice }: Props) => {
	return (
		<span
			className={cn(
				'inline-flex items-center text-xl lg:text-2xl font-bold',
				className,
				isOldPrice && 'line-through opacity-40'
			)}
		>
			${value}
		</span>
	);
};
