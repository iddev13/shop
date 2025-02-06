'use client';

import { Btn } from '@/components/btn';
import { CustomCarouselV2 } from '@/components/custom-carousel-v2';
import { Section } from '@/components/section';
import { topSellingSliderData } from '@/constants';

export const TopSelling = () => {
	return (
		<Section title="top selling">
			<CustomCarouselV2 data={topSellingSliderData} />

			<div className="flex items-center justify-center px-4">
				<Btn label="View All" variant="outline" className="w-full sm:w-auto" />
			</div>
		</Section>
	);
};
