import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
	href?: string;
	label: string;
	className?: string;
	variant?:
		| 'default'
		| 'ghost'
		| 'destructive'
		| 'outline'
		| 'link'
		| 'secondary';
	size?: 'default' | 'sm' | 'lg' | 'icon';
};

export const Btn = ({
	href,
	variant = 'default',
	size = 'default',
	label,
	className,
}: Props) => {
	return (
		<Button
			variant={variant}
			size={size}
			className={cn(
				className,
				!size || (size === 'default' && 'rounded-[70px] px-16 py-6')
			)}
		>
			{href ? <Link href={href}>{label}</Link> : label}
		</Button>
	);
};
