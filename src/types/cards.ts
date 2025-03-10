export type ShopCardType = {
	id?: number;
	href: string;
	imageUrl: string;
	title: string;
	rate: number;
	price: number;
	oldPrice?: number;
	discount?: number;
	className?: string;
};

export type StyleCardType = {
	id?: number;
	href: string;
	label: string;
	imageUrl: string;
	size?: 'default' | 'large';
};

export type ReviewsCardType = {
	id?: number;
	rating: number;
	author: string;
	text: string;
	date?: string;
	className?: string;
};

export type CartCardType = {
	id?: number;
	href: string;
	imageUrl: string;
	title: string;
	size: string;
	color: string;
	price: number;
	amount: number;
	discount?: number;
	className?: string;
};
