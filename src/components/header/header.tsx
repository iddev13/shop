import { HeaderLogo } from '@/components/header/header-logo';
import { Nav } from '@/components/header/nav';
import { TopHeader } from '@/components/header/top-header';

export const Header = () => {
	return (
		<header
			id="header"
			className="absolute bg-background top-0 left-0 right-0 z-50 px-4"
		>
			<TopHeader />
			<div className="max-w-7xl mx-auto flex items-center relative">
				<HeaderLogo className="hidden lg:flex lg:items-center h-full" />
				<Nav />
			</div>
		</header>
	);
};
