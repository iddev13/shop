import { cn } from '@/lib/utils';

type Props = {
	label?: string;
	children?: React.ReactNode;
	className: string;
};
export const BrandBtn = ({ label, children, className }: Props) => {
	return (
		<button
			title={label}
			className={cn(
				'inline-flex items-center justify-center border rounded-lg p-4',
				className
			)}
		>
			{children}
		</button>
	);
};
