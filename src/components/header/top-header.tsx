'use client';

import { Menu } from 'lucide-react';

import { useOpenMobileNav } from '@/hooks/use-open-mobile-nav';
import { Button } from '@/components/ui/button';
import { Social } from '@/components/header/social';
import { ThemeToggle } from '@/components/theme-toggle';
import { HeaderContacts } from '@/components/header/header-contacts';

export const TopHeader = () => {
	const { onOpen } = useOpenMobileNav();
	return (
		<div className="py-1">
			<div className="max-w-7xl w-full mx-auto flex items-center justify-between">
				<div className="relative h-7 flex items-center justify-between  gap-x-1 lg:gap-x-4 flex-auto ">
					<HeaderContacts />
					<div className="flex items-center">
						<ThemeToggle />
						<Social className="mr-2 lg:mr-0" />
						<div className="flex items-center justify-center lg:hidden">
							<Button
								asChild
								variant="outline"
								size="icon"
								className="p-0.5 bg-white dark:bg-gray-500/10 size-6 border-none shadow-md md:shadow-none"
								onClick={onOpen}
								title="Menu"
							>
								<Menu />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
