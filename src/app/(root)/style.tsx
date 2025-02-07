import StyleCard from '@/components/cards/style-card';
import { styleData } from '@/constants';

export const Style = () => {
	return (
		<section className="px-4 mb-10 lg:mb-20">
			<div className="max-w-7xl w-full mx-auto px-4 xl:px-16 py-6 xl:py-20 bg-secondary rounded-3xl">
				<h1 className="text-3xl lg:text-5xl text-center uppercase mb-6 lg:mb-16">
					BROWSE BY dress STYLE
				</h1>
				<div className="flex gap-5 flex-wrap justify-center">
					{styleData.map((card) => (
						<StyleCard
							key={card.id}
							href={card.href}
							imageUrl={card.imageUrl}
							label={card.label}
							size={card.size}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
