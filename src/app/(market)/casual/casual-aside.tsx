'use client';

import { Filter } from 'lucide-react';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Btn } from '@/components/btn';
import { Colors } from '@/components/colors';
import { Sizes } from '@/components/sizes';
import { casualColorsData, productSizes } from '@/constants';
import { PriceSlider } from '@/components/price-slider';
import { StyleAccordion } from './style-accordion';
import { CategoryAccordion } from './category-accordion';

export const CasualAside = () => {
	const handlePriceChange = (newRange: [number, number]) => {
		console.log(`Price range selected: $${newRange[0]} - $${newRange[1]}`);
	};

	return (
		<aside className="w-[295px] border rounded-2xl p-4 space-y-4">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-bold">Filters</h2>
				<Filter className="size-4 opacity-80" />
			</div>
			<Separator />
			{/* Category: T-shirt, Shorts, Shirts... */}
			<CategoryAccordion />
			<Separator />
			<Accordion type="multiple" className="w-full">
				{/* Price Slider */}
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-xl font-bold hover:text-primary hover:no-underline">
						Price
					</AccordionTrigger>
					<AccordionContent>
						<PriceSlider
							min={0}
							max={100}
							step={1}
							onChange={handlePriceChange}
						/>
					</AccordionContent>
				</AccordionItem>
				{/* Colors */}
				<AccordionItem value="item-2">
					<AccordionTrigger className="text-xl font-bold hover:text-primary hover:no-underline">
						Colors
					</AccordionTrigger>
					<AccordionContent>
						<Colors sm data={casualColorsData} />
					</AccordionContent>
				</AccordionItem>
				{/* Size */}
				<AccordionItem value="item-3">
					<AccordionTrigger className="text-xl font-bold hover:text-primary hover:no-underline">
						Size
					</AccordionTrigger>
					<AccordionContent>
						<Sizes data={productSizes} />
					</AccordionContent>
				</AccordionItem>
				{/* Dress Style: Casual, Formal, Party... */}
				<AccordionItem value="item-4" className="mb-6">
					<StyleAccordion />
				</AccordionItem>
				<Btn label="Apply Filter" />
			</Accordion>
		</aside>
	);
};
