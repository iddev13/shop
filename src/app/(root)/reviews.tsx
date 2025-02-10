import { CustomCarouselV3 } from '@/components/custom-carousel-v3';

export const Reviews = () => {
	return (
		<section className="max-w-screen-[1920px] w-full mx-auto mb-32 lg:mb-40">
			<div className="max-w-7xl w-full mx-auto">
				<h1 className="max-w-[240px] md:max-w-lg lg:max-w-3xl w-full text-3xl md:text-5xl mb-6 lg:mb-10 px-4">
					OUR HAPPY CUSTOMERS
				</h1>
			</div>
			<CustomCarouselV3 />
		</section>
	);
};
