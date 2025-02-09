import { Subscribe } from '@/components/subscribe';
import { HeaderLogo } from './header/header-logo';
import { Social } from './header/social';
import { footerData } from '@/constants';
import Link from 'next/link';
import { Visa } from './icons/pay/visa';

export const Footer = () => {
	return (
		<div className="bg-secondary pb-20 px-4">
			<div className="max-w-7xl w-full mx-auto">
				<Subscribe className="mb-12" />
				<div className="flex flex-col lg:flex-row lg:mb-12 gap-4">
					<div className="basis-1/4 lg:pr-8 mb-4 lg:mb-0">
						<HeaderLogo className="mb-6" />
						<p className="text-xm mb-2 lg:mb-9">
							We have clothes that suits your style and which you’re proud to
							wear. From women to men.
						</p>
						<Social className="justify-start" />
					</div>
					<div className="flex flex-auto flex-wrap gap-y-12">
						{footerData.map((group) => (
							<div key={group.title} className="basis-1/2 lg:basis-1/4">
								<h4 className="text-base font-medium mb-6 uppercase">
									{group.title}
								</h4>
								<ul className="space-y-3">
									{group.items.map((item) => (
										<li key={item.href}>
											<Link
												href={item.href}
												className="capitalize hover:underline text-muted-foreground hover:text-primary"
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="flex items-center justify-between border-t pt-4">
					<span className="text-xs text-muted-foreground">
						Shop.co © 2000-2023, All Rights Reserved
					</span>
					<div className='flex items-center gap-x-4'>
						<Visa />
					</div>
				</div>
			</div>
		</div>
	);
};
