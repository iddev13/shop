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

export const ProductPreview = () => {
	return (
		<div className="flex gap-4">
			<div className="basis-1/2 flex-shrink-0">
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
					<Colors
						data={[
							{ label: 'pink', disabled: true },
							{ label: 'green' },
							{ label: 'red' },
							{ label: 'orange' },
						]}
					/>
				</div>
				<Separator className="mb-6" />
				<div className="mb-4 flex items-center flex-wrap gap-2">
					{sizes.map((size) => (
						<Btn
							key={size.label}
							label={size.label}
							variant="secondary"
							size="sm"
							className="hover:bg-primary hover:text-primary-foreground capitalize"
							onClick={(e) => {
								console.log(e);
							}}
						/>
					))}
				</div>
				<div className="flex items-center justify-between">
					<Amount />
					<Btn label="Add to Cart" />
				</div>
			</div>
		</div>
	);
};
