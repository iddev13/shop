import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

export const Subscribe = ({ className }: Props) => {
	return (
		<section
			className={cn(
				'max-w-7xl w-full mx-auto rounded-2xl p-46 lg:p-9 flex items-center gap-8 bg-secondary-foreground',
				className
			)}
		>
			<h1 className="uppercase lg:basis-1/2 text-3xl lg:text-4xl text-primary-foreground text-left">
				STAY UPTO DATE ABOUT OUR LATEST OFFERS
			</h1>
			<div className="text-primary-foreground flex items-center justify-center">
				form
			</div>
		</section>
	);
};
