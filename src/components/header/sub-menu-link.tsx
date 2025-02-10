'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useOpenMobileNav } from '@/hooks/use-open-mobile-nav';
import { SubMenuLinkType } from '@/types/header';
import { pulseBtnFunc } from '@/utils/pulseBtnFunc';
import { cn } from '@/lib/utils';

export const SubMenuLink = ({
	href,
	label,
	children,
	className,
}: SubMenuLinkType) => {
	const pathName = usePathname();
	const { onClose } = useOpenMobileNav();

	return (
		<div
			className={cn(
				'[&_>a]:hover:text-primary-foreground relative flex items-center justify-between shadow-md hover:bg-primary transition-colors',
				pathName === href && 'bg-primary [&_>a]:text-primary-foreground ',
				className
			)}
		>
			<Link
				href={href}
				className={cn(
					'relative flex items-center min-h-[48px] capitalize text-sm overflow-hidden flex-auto px-2'
				)}
				onClick={(e) => {
					pulseBtnFunc(e);
					onClose();
				}}
			>
				<span
					className={cn(
						'inline-block overflow-hidden whitespace-nowrap text-ellipsis flex-grow-1 flex-shrink-1',
						!children && 'lg:max-w-[200px]'
					)}
				>
					{label}
				</span>
			</Link>
			{children}
		</div>
	);
};
