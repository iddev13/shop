import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';

import { cn } from '@/lib/utils';

type HeaderActionsType = {
	className?: string;
	hideText?: boolean;
};

export const HeaderActions = ({ hideText, className }: HeaderActionsType) => {
	return (
		<ul className={cn('flex items-center gap-x-1 lg:gap-x-2', className)}>
			<li className="flex items-center">
				<Link
					href="/wishlist"
					className="inline-flex items-end gap-x-1 hover:bg-primary/10 transition-colors overflow-hidden relative rounded-sm sm:rounded-md p-1 border border-muted-foreground lg:border-none"
					title="Wishlist"
				>
					<Heart className="size-[10px] lg:size-4" />
					<span
						className={cn(
							'hidden lg:inline-block text-xs',
							hideText && '!hidden'
						)}
					>
						Wishlist
					</span>
				</Link>
			</li>
			<li className="flex items-center">
				<Link
					href="/cart"
					className="inline-flex items-end gap-x-1 hover:bg-primary/10 transition-colors overflow-hidden relative rounded-sm sm:rounded-md p-1 border border-muted-foreground lg:border-none "
					title="Cart"
				>
					<ShoppingCart className="size-[10px] lg:size-4" />
					<span
						className={cn(
							'hidden lg:inline-block text-xs',
							hideText && '!hidden'
						)}
					>
						Cart
					</span>
				</Link>
			</li>
		</ul>
	);
};
