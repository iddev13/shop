'use client';

import { Amount } from '@/components/amount';
import { Btn } from '@/components/btn';
import { Colors } from '@/components/colors';
import { CustomCarouselV4 } from '@/components/custom-carousel-v4';
import { DiscountBadge } from '@/components/discount-badge';
import { Price } from '@/components/price';
import { Rating } from '@/components/rating';
import { Separator } from '@/components/ui/separator';
import { sizes } from '@/constants';
import { cn } from '@/lib/utils';

export const ProductPreview = () => {
	return (
		<div className="flex flex-col lg:flex-row gap-4 mb-12 lg:mb-20">
			<div className="basis-1/2 flex-shrink-0 mb-12 lg:mb-0">
				<CustomCarouselV4 />
			</div>
			<div className="basis-1/2 flex-shrink-0">
				<h1 className="font-integral font-bold text-2xl lg:text-[40px] mb-4">
					One Life Graphic T-shirt
				</h1>
				<Rating value={4.5} className="mb-4" />
				<div className="flex items-center mb-4 gap-x-2">
					<Price value={260} />
					<Price value={300} isOldPrice />
					<DiscountBadge value={40} />
				</div>
				<p className="text-muted-foreground mb-6">
					This graphic t-shirt which is perfect for any occasion. Crafted from a
					soft and breathable fabric, it offers superior comfort and style.
				</p>
				<Separator className="mb-6" />
				<div className="mb-4">
					<p className="text-muted-foreground mb-4">Select Colors</p>
					<Colors
						data={[
							{ label: 'pink', value: '#bc1888', disabled: true },
							{ label: 'gray', value: '#c9c4c5' },
							{ label: 'white', value: '#ffffff' },
							{ label: 'black', value: '#000000' },
							{ label: 'green', value: '#00bd00' },
							{ label: 'olive', value: '#344200' },
						]}
					/>
				</div>
				<Separator className="mb-6" />
				<p className="text-muted-foreground mb-4">Choose Size</p>
				<div className="mb-6 flex items-center flex-wrap gap-2">
					{sizes.map((size) => (
						<Btn
							key={size.label}
							label={size.label}
							variant="secondary"
							size="sm"
							className={cn(
								'hover:bg-primary hover:text-primary-foreground capitalize',
								size.label === 'large' && 'bg-primary text-primary-foreground'
							)}
							onClick={(e) => {
								console.log(e);
							}}
						/>
					))}
				</div>
				<Separator className="mb-6" />
				<div className="flex items-center justify-between">
					<Amount />
					<Btn label="Add to Cart" />
				</div>
			</div>
		</div>
	);
};
