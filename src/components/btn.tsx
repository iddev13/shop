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
	children?: React.ReactNode;
	hideTextMobile?: boolean;
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
	hideTextMobile,
	children,
}: Props) => {
	return (
		<Button
			variant={variant}
			size={size}
			className={cn(
				className,
				!size || (size === 'default' && 'rounded-[70px] px-16 py-6'),
				size === 'sm' && 'rounded-[70px] px-6 py-3',
				hideTextMobile && 'w-8 h-8 md:w-12 md:h-12 p-0 flex-shrink-0'
			)}
			type={type}
			disabled={disabled}
			onClick={onClick}
			title={label}
		>
			<>
				{children}
				{href ? <Link href={href}>{label}</Link> : !hideTextMobile && label}
			</>
		</Button>
	);
};
