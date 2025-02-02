import { LucideIcon } from 'lucide-react';

export type HeaderLinkType = {
	href: string;
	label: string;
	Icon?: LucideIcon;
	isActive?: boolean;
	children?: React.ReactNode;
};

export type NavItemType = {
	id: number;
	href: string;
	label: string;
	Icon?: LucideIcon;
	position?: 'left' | 'right';
	subMenu?: Array<SubMenuType>;
	gallery?: Array<GalleryType>;
	smallMenu?: Array<SmallMenuType>;
	textMenu?: TextMenuType;
	bigMenu?: BigMenuType;
};

export type SubMenuType = {
	id: number;
	href: string;
	label: string;
	position?: 'left' | 'right';
	subMenu?: Array<SubMenuType>;
};

export type GalleryType = {
	id: number;
	href: string;
	label: string;
	text: string;
	imageUrl: string;
};

export type SmallMenuType = {
	id?: number;
	categoryHref: string;
	categoryLabel: string;
	list: { id: number; subCategoryHref: string; subCategoryLabel: string }[];
};

export type BigMenuType = {
	id: number;
	list: SmallMenuType[];
	carouselHref: string;
	carouselLabel: string;
	carousel: Omit<GalleryType, 'text'>[];
};

export type TextMenuType = {
	id: number;
	text: Omit<GalleryType, 'id'>;
	links: SmallMenuType;
};

export type SubMenuLinkType = {
	href: string;
	label: string;
	children?: React.ReactNode;
	className?: string;
};

export type ThemeColorsItemType = {
	id: number;
	color: string;
	title: string;
	bg: string;
};

export type DropType = {
	submenu?: Array<SubMenuType>;
	gallery?: Array<GalleryType>;
	smallMenu?: Array<SmallMenuType>;
	textMenu?: TextMenuType;
	bigMenu?: BigMenuType;
	dropdown: boolean;
	depthLevel: number;
	position?: string | undefined;
};

export type DropdownArrowType = {
	dropdownStatus: boolean;
};

export type DropdownBtnType = {
	href: string;
	label: string;
	children: React.ReactNode;
	dropdownStatus?: boolean;
	depthLevel?: number;
};

export type SocialLinkType = {
	id: number;
	href: string;
	label: string;
	imageUrl: string;
};
