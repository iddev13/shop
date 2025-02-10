'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
	href?: string;
	label: string;
	type?: 'reset' | 'button' | 'submit';
	className?: string;
	variant?:
		| 'default'
		| 'ghost'
		| 'destructive'
		| 'outline'
		| 'link'
		| 'secondary';
	size?: 'default' | 'sm' | 'lg' | 'icon';
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Btn = ({
	href,
	variant = 'default',
	size = 'default',
	label,
	className,
	type = 'button',
	disabled = false,
	onClick,
}: Props) => {
	return (
		<Button
			variant={variant}
			size={size}
			className={cn(
				className,
				!size || (size === 'default' && 'rounded-[70px] px-16 py-6'),
				size === 'sm' && 'rounded-[70px] px-6 py-3'
			)}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{href ? <Link href={href}>{label}</Link> : label}
		</Button>
	);
};
