'use client';

import { Btn } from '@/components/btn';
import { ShopCard } from '@/components/cards/shop-card';
import { CustomCarouselV2 } from '@/components/custom-carousel-v2';
import { Section } from '@/components/section';
import { arrivalsData, arrivalsSliderData } from '@/constants';
import { useMedia } from 'react-use';

export const Arrivals = () => {
	const isMobile = useMedia('(max-width: 1024px)');
	return (
		<Section title="NEW ARRIVALS" className="border-b">
			<>
				{!isMobile && (
					<div className="flex items-center gap-5 px-2 mb-4 lg:mb-10 justify-around">
						{arrivalsData.map((card) => (
							<ShopCard
								key={card.id}
								href={card.href}
								imageUrl={card.imageUrl}
								price={card.price}
								oldPrice={card.oldPrice}
								title={card.title}
								rate={card.rate}
								discount={card.discount}
							/>
						))}
					</div>
				)}
				{isMobile && <CustomCarouselV2 data={arrivalsSliderData} />}
			</>
			<div className="flex items-center justify-center px-4">
				<Btn label="View All" variant="outline" className="w-full sm:w-auto" />
			</div>
		</Section>
	);
};
