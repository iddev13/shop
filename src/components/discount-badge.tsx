import { cn } from '@/lib/utils';

type Props = {
	value: number;
	className?: string;
};

export const DiscountBadge = ({ value, className }: Props) => {
	return (
		<span
			className={cn(
				'inline-flex items-center bg-rose-500/10 text-xs text-rose-500 rounded-2xl px-3.5 h-7',
				className
			)}
		>
			-{value}%
		</span>
	);
};
