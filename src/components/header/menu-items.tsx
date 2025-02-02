'use client';
import { useState, useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';

import { HeaderLink } from '@/components/header/header-link';
import { DropdownArrow } from '@/components/header/dropdown-arrow';
import { NavItemType } from '@/types/header';
import { SubMenuLink } from '@/components/header/sub-menu-link';
import { Dropdown } from '@/components/header/dropdown';
import { cn } from '@/lib/utils';

interface INavBar {
	items: NavItemType;
	depthLevel: number;
}

export const MenuItems = ({ items, depthLevel }: INavBar) => {
	const size = useWindowSize();
	const [dropdown, setDropdown] = useState<boolean>(false);
	const ref = useRef<HTMLLIElement | null>(null);

	useEffect(() => {
		const handler = (event: Event): void => {
			const clickedElement = event.target as HTMLElement;
			event.stopPropagation();

			if (!dropdown && ref.current && ref.current.contains(clickedElement)) {
				setDropdown(true);
			}
			if (dropdown && ref.current && !ref.current.contains(clickedElement)) {
				setDropdown(false);
			}
		};

		document.addEventListener('click', handler);

		return () => document.removeEventListener('click', handler);
	}, [dropdown]);

	const onMouseEnter = () => size.width >= 1024 && setDropdown(true);

	const onMouseLeave = () => size.width >= 1024 && setDropdown(false);

	return (
		<li
			className={cn(
				'menu-items',
				items.subMenu && 'relative max-w-[200px]',
				items.gallery && 'relative'
			)}
			ref={ref}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{
				// If there is a submenu
				items.subMenu ? (
					// If the first depth level then HeaderLink
					depthLevel === 0 ? (
						<HeaderLink
							href={items.href}
							label={items.label}
							isActive={dropdown}
							Icon={items.Icon}
						>
							<>
								{
									// If the second or more depth level, then DropdownArrow
									depthLevel > 0 && <DropdownArrow dropdownStatus={dropdown} />
								}
								<Dropdown
									depthLevel={depthLevel}
									submenu={items.subMenu}
									dropdown={dropdown}
									position={items.position}
								/>
							</>
						</HeaderLink>
					) : (
						// If the second or more depth level, then SubMenuLink

						<SubMenuLink href={items.href} label={items.label}>
							<>
								<DropdownArrow dropdownStatus={dropdown} />
								<Dropdown
									depthLevel={depthLevel}
									submenu={items.subMenu}
									dropdown={dropdown}
									position={items.position}
								/>
							</>
						</SubMenuLink>
					)
				) : items.gallery ? (
					// If the first depth level then HeaderLink

					<HeaderLink
						href={items.href}
						label={items.label}
						isActive={dropdown}
						Icon={items.Icon}
					>
						<Dropdown
							depthLevel={depthLevel}
							gallery={items.gallery}
							dropdown={dropdown}
						/>
					</HeaderLink>
				) : items.smallMenu ? (
					// If the first depth level then HeaderLink

					<HeaderLink href={items.href} label={items.label} isActive={dropdown}>
						<Dropdown
							depthLevel={depthLevel}
							smallMenu={items.smallMenu}
							dropdown={dropdown}
						/>
					</HeaderLink>
				) : items.textMenu ? (
					// If the first depth level then HeaderLink

					<HeaderLink
						href={items.href}
						label={items.label}
						isActive={dropdown}
						Icon={items.Icon}
					>
						<Dropdown
							depthLevel={depthLevel}
							textMenu={items.textMenu}
							dropdown={dropdown}
						/>
					</HeaderLink>
				) : items.bigMenu ? (
					// If the first depth level then HeaderLink

					<HeaderLink
						href={items.href}
						label={items.label}
						isActive={dropdown}
						Icon={items.Icon}
					>
						<Dropdown
							depthLevel={depthLevel}
							bigMenu={items.bigMenu}
							dropdown={dropdown}
						/>
					</HeaderLink>
				) : // If there is no submenu
				depthLevel === 0 ? (
					// If the first depth level then HeaderLink
					<HeaderLink href={items.href} label={items.label} Icon={items.Icon} />
				) : (
					// If the second or more depth level, then SubMenuLink
					<SubMenuLink href={items.href} label={items.label} />
				)
			}
		</li>
	);
};
