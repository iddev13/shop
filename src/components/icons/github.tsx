import { cn } from '@/lib/utils';

type IconType = {
	className?: string;
};

export const GithubIcon = ({ className }: IconType) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 152 152"
			className={cn(className)}
		>
			<path
				d="M53.1 141c4.6 0 5.9-1.8 5.9-4.1s0-7.3-.1-14.4c-23.9 5.1-29-11.4-29-11.4-3.9-9.7-9.6-12.4-9.6-12.4-7.8-5.2.6-5.1.6-5.1 8.6.6 13.2 8.7 13.2 8.7 7.7 13 20.1 9.2 25 7 .4-4.3 2.3-8.4 5.5-11.4-19.1-2.1-39.2-9.4-39.2-41.8-.1-8.4 3.1-16.6 8.9-22.7-1-2.1-3.9-10.7.7-22.4 0 0 7.2-2.3 23.7 8.7 14.1-3.8 28.9-3.8 43 0C118 8.8 125.3 11 125.3 11c4.6 11.6 1.7 20.2.9 22.4 5.8 6.1 8.9 14.3 8.8 22.7 0 32.5-20.1 39.6-39.3 41.7 3 2.5 5.8 7.7 5.8 15.6 0 11.4-.1 20.4-.1 23.1 0 2.2 1 4 5.9 4z"
			></path>
		</svg>
	);
};
