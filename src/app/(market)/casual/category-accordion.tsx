import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export const CategoryAccordion = () => {
	return (
		<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1" className="border-none">
					<AccordionTrigger className="py-2 text-muted-foreground hover:text-primary hover:no-underline">
						T-shirts
					</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2" className="border-none">
					<AccordionTrigger className="py-2  text-muted-foreground hover:text-primary hover:no-underline">
						Shorts
					</AccordionTrigger>
					<AccordionContent>
						Yes. It comes with default styles that matches the other
						components&apos; aesthetic.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3" className="border-none">
					<AccordionTrigger className="py-2  text-muted-foreground hover:text-primary hover:no-underline">
						Shirts
					</AccordionTrigger>
					<AccordionContent>
						Yes. It&apos;s animated by default, but you can disable it if you
						prefer.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4" className="border-none">
					<AccordionTrigger className="py-2 text-muted-foreground hover:text-primary hover:no-underline">
						Hoodie
					</AccordionTrigger>
					<AccordionContent>
						Yes. It&apos;s animated by default, but you can disable it if you
						prefer.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5" className="border-none">
					<AccordionTrigger className="py-2  text-muted-foreground hover:text-primary hover:no-underline">
						Jeans
					</AccordionTrigger>
					<AccordionContent>
						Yes. It&apos;s animated by default, but you can disable it if you
						prefer.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
	);
};
