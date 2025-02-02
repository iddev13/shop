'use client';

import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';

import { menuItems } from '@/constants';
import { Skeleton } from '@/components/ui/skeleton';
import { MenuItems } from '@/components/header/menu-items';
import { SearchComponent } from '@/components/header/search';
import { HeaderActions } from './header-actions';

export const Nav = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const isMobile = useMedia('(max-width: 1024px)');

	function fixedMenu() {
		const header = document.querySelector('#header');

		window.onload = () => {
			if (window.pageYOffset > 50) header?.classList.add('header__fixed');
		};

		// Pins a header to the top of the screen on scroll
		window.onscroll = function showHeader() {
			if (window.pageYOffset > 50) {
				header?.classList.add('header__fixed');
			} else {
				header?.classList.remove('header__fixed');
			}
		};
	}

	useEffect(() => {
		fixedMenu();
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return (
			<nav className="hidden md:block md:size-8 md:rounded-md md:mr-2 md:bg-gray-500/20 lg:flex lg:items-center lg:h-12 lg:w-auto lg:bg-transparent lg:rounded-none">
				<ul className="hidden lg:flex  lg:items-center gap-x-2 px-2">
					<li className="flex items-center overflow-hidden w-24 h-10 rounded-md">
						<Skeleton className="w-full h-full" />
					</li>
					<li className="flex items-center overflow-hidden w-24 h-10 rounded-md">
						<Skeleton className="w-full h-full" />
					</li>
					<li className="flex items-center overflow-hidden w-24 h-10 rounded-md">
						<Skeleton className="w-full h-full" />
					</li>
					<li className="flex items-center overflow-hidden w-24 h-10 rounded-md">
						<Skeleton className="w-full h-full" />
					</li>
					<li className="flex items-center overflow-hidden w-24 h-10 rounded-md">
						<Skeleton className="w-full h-full" />
					</li>
					<li className="flex items-center overflow-hidden w-24 h-10 rounded-md">
						<Skeleton className="w-full h-full" />
					</li>
				</ul>
			</nav>
		);
	}

	if (isMobile) {
		return null;
	}

	return (
		<nav className="flex items-center flex-auto">
			<ul className="block lg:flex w-full">
				{menuItems.map((menu) => {
					const depthLevel = 0; // Menu depth level
					return (
						<MenuItems items={menu} depthLevel={depthLevel} key={menu.id} />
					);
				})}
			</ul>
			<SearchComponent className="flex-auto lg:mx-4" />
			<HeaderActions hideText />
		</nav>
	);
};
