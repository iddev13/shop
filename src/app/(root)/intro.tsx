import Image from 'next/image';

import { Counter } from '@/components/counter';
import { Separator } from '@/components/ui/separator';
import { IntroStar } from '@/components/icons/intro-star';
import { Btn } from '@/components/btn';
import { Brands } from '@/components/brands';

export const Intro = () => {
	return (
		<div className="mb-12 lg:mb-18 bg-secondary">
			<div className="flex flex-col lg:flex-row items-center max-w-7xl w-full mx-auto justify-between px-4 lg:pt-12">
				<div className="space-y-5 lg:space-y-8">
					<h1 className="max-w-[580px] text-4xl lg:text-6xl">
						FIND CLOTHES THAT MATCHES YOUR STYLE
					</h1>
					<p className="max-w-[580px]">
						Browse through our diverse range of meticulously crafted garments,
						designed to bring out your individuality and cater to your sense of
						style.
					</p>
					<Btn label="Shop now" href="/shop" />
					<div className="flex flex-wrap flex-shrink-0 justify-center gap-3 md:gap-8">
						<Counter text="International Brands" value={200} />
						<Separator
							orientation="vertical"
							className="hidden sm:block h-[74px] w-[1px] dark:bg-primary/20"
						/>
						<Counter text="High-Quality Products" value={2000} />
						<Separator
							orientation="vertical"
							className="hidden sm:block h-[74px] w-[1px] dark:bg-primary/20"
						/>
						<Counter text="Happy Customers" value={30000} />
					</div>
				</div>
				<div className="w-full lg:w-auto">
					<div className="relative w-auto h-[260px] sm:h-[448px] lg:w-[500px] lg:h-[475px]">
						<IntroStar className="w-14 h-14 absolute top-1/2 -translate-y-1/2 left-0" />
						<IntroStar className="w-24 h-24 absolute top-1/4 -translate-y-1/2  left-full -translate-x-full" />
						<Image
							src="/assets/image/intro/intro-image.png"
							alt="Intro"
							fill
							className="object-contain"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>
				</div>
			</div>
			<Brands />
		</div>
	);
};
