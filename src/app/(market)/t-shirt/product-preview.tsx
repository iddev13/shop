'use client';

import { Amount } from '@/components/amount';
import { Btn } from '@/components/btn';
import { Colors } from '@/components/colors';
import { CustomCarouselV4 } from '@/components/custom-carousel-v4';
import { DiscountBadge } from '@/components/discount-badge';
import { Price } from '@/components/price';
import { Rating } from '@/components/rating';
import { Sizes } from '@/components/sizes';
import { Separator } from '@/components/ui/separator';
import { productPreviewSizes } from '@/constants';

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
							{ label: 'green', value: '#00C12B' },
							{ label: 'dark-blue', value: '#063AF5' },
							{ label: 'violet', value: '#7D06F5' },
							{ label: 'pink', value: '#F506A4', disabled: true },
							{ label: 'white', value: '#ffffff' },
							{ label: 'black', value: '#000000' },
						]}
					/>
				</div>
				<Separator className="mb-6" />
				<p className="text-muted-foreground mb-4">Choose Size</p>
				<Sizes data={productPreviewSizes} />
				<Separator className="mb-6" />
				<div className="flex items-center justify-between">
					<Amount />
					<Btn label="Add to Cart" />
				</div>
			</div>
		</div>
	);
};
