import { cn } from '@/lib/utils';

type Props = {
	title?: string;
	className?: string;
	children: React.ReactNode;
};

export const Section = ({ title, className, children }: Props) => {
	return (
		<section className={cn('max-w-7xl w-full mx-auto pb-16', className)}>
			<div className="mb-8 lg:mb-14">
				<h1 className="font-integral text-5xl uppercase text-center">
					{title}
				</h1>
			</div>
			<div>{children}</div>
		</section>
	);
};
