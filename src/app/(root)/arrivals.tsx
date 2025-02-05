'use client';

import { Btn } from '@/components/btn';
import { ShopCard } from '@/components/cards/shop-card';
import { CustomCarouselV2 } from '@/components/custom-carousel-v2';
import { Section } from '@/components/section';
import { useMedia } from 'react-use';

export const Arrivals = () => {
	const isMobile = useMedia('(max-width: 1024px)');
	return (
		<Section title="NEW ARRIVALS" className="border-b">
			<>
				{!isMobile && (
					<div className="grid grid-cols-4 gap-5 px-2 mb-4 lg:mb-10">
						<ShopCard
							imageUrl="/assets/image/intro/intro-image.png"
							price={120}
							oldPrice={260}
							title="T-shirt with tape details"
							rate={3.6}
							discount={50}
						/>
					</div>
				)}
				{isMobile && <CustomCarouselV2 />}
			</>
			<div className="flex items-center justify-center px-4">
				<Btn label="View All" variant="outline" className="w-full sm:w-auto" />
			</div>
		</Section>
	);
};
