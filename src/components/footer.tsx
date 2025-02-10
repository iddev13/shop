import { Subscribe } from '@/components/subscribe';
import { HeaderLogo } from './header/header-logo';
import { Social } from './header/social';
import { footerData } from '@/constants';
import Link from 'next/link';
import { Visa } from './icons/pay/visa';
import { PayPal } from './icons/pay/pay-pal';
import { Mastercard } from './icons/pay/mastercard';
import { APay } from './icons/pay/a-pay';
import { GPay } from './icons/pay/g-pay';

export const Footer = () => {
	return (
		<div className="bg-secondary pb-20 px-4">
			<div className="max-w-7xl w-full mx-auto">
				<Subscribe className="mb-12 -mt-24" />
				<div className="flex flex-col lg:flex-row lg:mb-12 gap-4">
					<div className="basis-1/4 lg:pr-8 mb-4 lg:mb-0">
						<HeaderLogo className="mb-6" />
						<p className="text-xm mb-2 lg:mb-9">
							We have clothes that suits your style and which you’re proud to
							wear. From women to men.
						</p>
						<Social className="justify-start" />
					</div>
					<div className="flex flex-auto flex-wrap gap-y-12 mb-6 lg:mb-0">
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
				<div className="flex flex-col gap-2 lg:flex-row items-center justify-between border-t pt-4">
					<span className="text-xs text-muted-foreground">
						Shop.co © 2000-2023, All Rights Reserved
					</span>
					<div className="flex items-center">
						<Visa />
						<PayPal />
						<Mastercard />
						<APay />
						<GPay />
					</div>
				</div>
			</div>
		</div>
	);
};
