import { NavItemType, SocialLinkType } from '@/types/header';
import {
	BadgeDollarSign,
	ChevronsDown,
	House,
	PackageSearch,
	Pocket,
} from 'lucide-react';

export const menuItems: NavItemType[] = [
	{
		id: 1,
		href: '/',
		label: 'home',
		Icon: House,
	},
	{
		id: 2,
		href: '/shop',
		label: 'shop',
		Icon: ChevronsDown,
		subMenu: [
			{
				id: 1,
				href: '/second-level-1',
				label: 'second-level-1',
				subMenu: [
					{
						id: 1,
						href: '/third-level-1',
						label: 'third-level-1',
					},
					{
						id: 2,
						href: '/third-level-2',
						label: 'third-level-2',
					},
					{
						id: 3,
						href: '/third-level-3',
						label: 'third-level-3',
					},
					{
						id: 4,
						href: '/third-level-4',
						label: 'third-level-4',
					},
					{
						id: 5,
						href: '/third-level-5',
						label: 'third-level-5',
					},
				],
			},
			{
				id: 2,
				href: '/second-level-2',
				label: 'second-level-2',
			},
			{
				id: 3,
				href: '/second-level-3',
				label: 'second-level-3',
			},
			{
				id: 4,
				href: '/second-level-4',
				label: 'second-level-4',
				subMenu: [
					{
						id: 1,
						href: '/third-level-1',
						label: 'third-level-1',
					},
					{
						id: 2,
						href: '/third-level-2',
						label: 'third-level-2',
					},
					{
						id: 3,
						href: '/third-level-3',
						label: 'third-level-3',
					},
					{
						id: 4,
						href: '/third-level-4',
						label: 'third-level-4',
						position: 'left',
						subMenu: [
							{
								id: 1,
								href: '/fourth-level-1',
								label: 'fourth-level-1',
							},
							{
								id: 2,
								href: '/fourth-level-2',
								label: 'fourth-level-2',
							},
							{
								id: 3,
								href: '/fourth-level-3',
								label: 'fourth-level-3',
							},
							{
								id: 4,
								href: '/fourth-level-4',
								label: 'fourth-level-4',
							},
							{
								id: 5,
								href: '/fourth-level-5',
								label: 'fourth-level-5',
							},
						],
					},
				],
			},
		],
	},
	{
		id: 3,
		href: '/on-sale',
		label: 'on sale',
		Icon: BadgeDollarSign,
	},
	{
		id: 4,
		href: '/new-arrivals',
		label: 'new arrivals',
		Icon: PackageSearch,
	},
	{
		id: 5,
		href: '/brands',
		label: 'brands',
		Icon: Pocket,
	},
];

export const socialLinks: SocialLinkType[] = [
	{
		id: 1,
		href: '/',
		label: 'facebook',
		imageUrl: '/assets/image/icons/facebook.svg',
	},
	{
		id: 2,
		href: '/',
		label: 'instagram',
		imageUrl: '/assets/image/icons/instagram.svg',
	},
	{
		id: 3,
		href: '/',
		label: 'twitter',
		imageUrl: '/assets/image/icons/x.svg',
	},
	{
		id: 4,
		href: '/',
		label: 'google',
		imageUrl: '/assets/image/icons/youtube.svg',
	},
	{
		id: 5,
		href: '/',
		label: 'github',
		imageUrl: '/assets/image/icons/youtube.svg',
	},
];