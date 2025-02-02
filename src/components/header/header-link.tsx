'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMedia } from 'react-use';

import { cn } from '@/lib/utils';
import { HeaderLinkType } from '@/types/header';
import { pulseBtnFunc } from '@/utils/pulseBtnFunc';
import { useOpenMobileNav } from '@/hooks/use-open-mobile-nav';

export const HeaderLink = ({
	href,
	label,
	Icon,
	isActive,
	children,
}: HeaderLinkType) => {
	const pathname = usePathname();
	const { onClose } = useOpenMobileNav();
	const isMobile = useMedia('(max-width: 1024px)');
	return (
		<div>
			<div
				className={cn(
					"relative flex items-center flex-wrap after:block after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-primary dark:lg:after:bg-white after:w-full after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration hover:after:scale-x-100 hover:after:origin-bottom-left overflow-hidden",
					pathname === href && 'after:scale-x-100 after:origin-bottom-left',
					isActive && 'after:scale-x-100 after:origin-bottom-left'
				)}
				onClick={(e) => pulseBtnFunc(e)}
			>
				<Link
					href={href}
					className={
						'flex items-center w-full h-12 text-base leading-3 z-[2] whitespace-nowrap capitalize transition-all duration-500 relative overflow-hidden lg:gap-x-2 px-2 lg:px-2'
					}
					onClick={onClose}
				>
					{!isMobile && Icon && (
						<span>
							<Icon className="size-3 opacity-80" />
						</span>
					)}
					<span>{label}</span>
				</Link>
			</div>
			{children}
		</div>
	);
};
