import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

export const IntroStar = ({ className }: Props) => {
	return (
		<svg
			className={cn('fill-secondary-foreground', className)}
			viewBox="0 0 56 56"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z" />
		</svg>
	);
};
