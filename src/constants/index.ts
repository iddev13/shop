import { ShopCardType } from '@/types/cards';
import { NavItemType, SocialLinkType } from '@/types/header';
import {
	BadgeDollarSign,
	ChevronsDown,
	House,
	PackageSearch,
	Pocket,
} from 'lucide-react';

// Header data
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

// Header data
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
];

// Arrivals section data
export const arrivalsData: ShopCardType[] = [
	{
		id: 1,
		href: '/',
		imageUrl: '/assets/image/shirts/1.png',
		title: 'T-shirt with tape details',
		rate: 4.5,
		price: 120,
	},
	{
		id: 2,
		href: '/',
		imageUrl: '/assets/image/jeans/1.png',
		title: 'skinny fit jeans',
		rate: 3.5,
		price: 240,
		oldPrice: 260,
		discount: 20,
	},
	{
		id: 3,
		href: '/',
		imageUrl: '/assets/image/shirts/5.png',
		title: 'Checkered shirt',
		rate: 4,
		price: 180,
	},
	{
		id: 4,
		href: '/',
		imageUrl: '/assets/image/shirts/3.png',
		title: 'SLEEVE STRIPED T-SHIRT',
		rate: 4.5,
		price: 130,
		oldPrice: 160,
		discount: 30,
	},
];

// Arrivals section slider data
export const arrivalsSliderData: ShopCardType[] = [
	{
		id: 1,
		href: '/',
		imageUrl: '/assets/image/shirts/1.png',
		title: 'T-shirt with tape details',
		rate: 4.5,
		price: 120,
	},
	{
		id: 2,
		href: '/',
		imageUrl: '/assets/image/jeans/1.png',
		title: 'skinny fit jeans',
		rate: 3.5,
		price: 240,
		oldPrice: 260,
		discount: 20,
	},
	{
		id: 3,
		href: '/',
		imageUrl: '/assets/image/shirts/5.png',
		title: 'Checkered shirt',
		rate: 4,
		price: 180,
	},
	{
		id: 4,
		href: '/',
		imageUrl: '/assets/image/shirts/3.png',
		title: 'SLEEVE STRIPED T-SHIRT',
		rate: 4.5,
		price: 130,
		oldPrice: 160,
		discount: 30,
	},
	{
		id: 5,
		href: '/',
		imageUrl: '/assets/image/shirts/9.png',
		title: 'T-shirt with tape details',
		rate: 3,
		price: 120,
	},
	{
		id: 6,
		href: '/',
		imageUrl: '/assets/image/jeans/2.png',
		title: 'skinny fit jeans',
		rate: 3.5,
		price: 240,
		oldPrice: 260,
		discount: 20,
	},
	{
		id: 7,
		href: '/',
		imageUrl: '/assets/image/shirts/6.png',
		title: 'Checkered shirt',
		rate: 4.5,
		price: 180,
	},
	{
		id: 8,
		href: '/',
		imageUrl: '/assets/image/shirts/7.png',
		title: 'SLEEVE STRIPED T-SHIRT',
		rate: 4.5,
		price: 130,
		oldPrice: 160,
		discount: 30,
	},
];

// Arrivals section slider data
export const topSellingSliderData: ShopCardType[] = [
	{
		id: 1,
		href: '/',
		imageUrl: '/assets/image/shirts/8.png',
		title: 'vertical striped shirt',
		rate: 5.0,
		price: 212,
		oldPrice: 232,
		discount: 20,
	},
	{
		id: 2,
		href: '/',
		imageUrl: '/assets/image/shirts/9.png',
		title: 'courage graphic t-shirt',
		rate: 3.0,
		price: 145,
	},
	{
		id: 3,
		href: '/',
		imageUrl: '/assets/image/jeans/2.png',
		title: 'loose fit bermuda shorts',
		rate: 4,
		price: 80,
	},
	{
		id: 4,
		href: '/',
		imageUrl: '/assets/image/jeans/3.png',
		title: 'sleeve striped t-shirt',
		rate: 4.5,
		price: 210,
	},
	{
		id: 5,
		href: '/',
		imageUrl: '/assets/image/shirts/9.png',
		title: 'T-shirt with tape details',
		rate: 3,
		price: 120,
	},
	{
		id: 6,
		href: '/',
		imageUrl: '/assets/image/jeans/2.png',
		title: 'skinny fit jeans',
		rate: 3.5,
		price: 240,
		oldPrice: 260,
		discount: 20,
	},
	{
		id: 7,
		href: '/',
		imageUrl: '/assets/image/shirts/6.png',
		title: 'Checkered shirt',
		rate: 4.5,
		price: 180,
	},
	{
		id: 8,
		href: '/',
		imageUrl: '/assets/image/shirts/7.png',
		title: 'SLEEVE STRIPED T-SHIRT',
		rate: 4.5,
		price: 130,
		oldPrice: 160,
		discount: 30,
	},
];
