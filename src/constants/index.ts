import { ShopCardType, StyleCardType, ReviewsCardType } from '@/types/cards';
import { FooterDataType } from '@/types/footer';
import { NavItemType, SocialLinkType } from '@/types/header';
import { SizesType } from '@/types/product';
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
				href: '/men',
				label: 'men',
				subMenu: [
					{
						id: 1,
						href: '/t-shirt',
						label: 'T-shirt',
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
				href: '/woman',
				label: 'woman',
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

// Style section data
export const styleData: StyleCardType[] = [
	{
		id: 1,
		href: '/',
		label: 'Casual',
		imageUrl: '/assets/image/style/11.png',
	},
	{
		id: 2,
		href: '/',
		label: 'Formal',
		imageUrl: '/assets/image/style/14.png',
		size: 'large',
	},
	{
		id: 3,
		href: '/',
		label: 'Party',
		imageUrl: '/assets/image/style/12.png',
		size: 'large',
	},
	{
		id: 4,
		href: '/',
		label: 'Gym',
		imageUrl: '/assets/image/style/13.png',
	},
];

// Reviews section Data
export const reviewsData: ReviewsCardType[] = [
	{
		id: 1,
		author: 'Sarah M.',
		text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
		rating: 5,
	},
	{
		id: 2,
		author: 'Alex K.',
		text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
		rating: 5,
	},
	{
		id: 3,
		author: 'James L.',
		text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
		rating: 4.5,
	},
	{
		id: 4,
		author: 'Mooen',
		text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
		rating: 5,
	},
	{
		id: 5,
		author: 'John D.',
		text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
		rating: 4,
	},
	{
		id: 6,
		author: 'Sarah M.',
		text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
		rating: 5,
	},
	{
		id: 7,
		author: 'Alex K.',
		text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
		rating: 5,
	},
	{
		id: 8,
		author: 'James L.',
		text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
		rating: 4.5,
	},
	{
		id: 9,
		author: 'Mooen',
		text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
		rating: 5,
	},
	{
		id: 10,
		author: 'John D.',
		text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
		rating: 4,
	},
];

// Footer Data
export const footerData: FooterDataType[] = [
	{
		title: 'company',
		items: [
			{
				href: '/about',
				label: 'about',
			},
			{
				href: '/features',
				label: 'features',
			},
			{
				href: '/works',
				label: 'works',
			},
			{
				href: '/career',
				label: 'career',
			},
		],
	},
	{
		title: 'help',
		items: [
			{
				href: '/terms',
				label: 'terms & conditions',
			},
			{
				href: '/support',
				label: 'support',
			},
			{
				href: '/delivery',
				label: 'delivery details',
			},
			{
				href: '/privacy',
				label: 'privacy policy',
			},
		],
	},
	{
		title: 'faq',
		items: [
			{
				href: '/account',
				label: 'account',
			},
			{
				href: '/manage-deliveries',
				label: 'manage deliveries',
			},
			{
				href: '/orders',
				label: 'orders',
			},
			{
				href: '/payments',
				label: 'payments',
			},
		],
	},
	{
		title: 'resources',
		items: [
			{
				href: '/ebooks',
				label: 'free eBooks',
			},
			{
				href: '/development',
				label: 'development tutorial',
			},
			{
				href: '/blog',
				label: 'how to - blog',
			},
			{
				href: '/youtube',
				label: 'youtube playlist',
			},
		],
	},
];

export const sizes: SizesType[] = [
	{
		label: 'small',
	},
	{
		label: 'medium',
	},
	{
		label: 'large',
	},
	{
		label: 'x-large',
	},
];
