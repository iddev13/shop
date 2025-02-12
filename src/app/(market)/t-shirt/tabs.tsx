import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductReviews } from './product-reviews';

export const ProductTabs = () => {
	return (
		<Tabs defaultValue="rating">
			<TabsList className="w-full flex bg-transparent">
				<TabsTrigger
					value="details"
					className="basis-1/3 shadow-none data-[state=active]:shadow-none data-[state=active]:border-b rounded-none"
				>
					Product Details
				</TabsTrigger>
				<TabsTrigger
					value="rating"
					className="basis-1/3 shadow-none data-[state=active]:shadow-none data-[state=active]:border-b rounded-none"
				>
					Rating & Reviews
				</TabsTrigger>
				<TabsTrigger
					value="faqs"
					className="basis-1/3 shadow-none data-[state=active]:shadow-none data-[state=active]:border-b rounded-none"
				>
					FAQs
				</TabsTrigger>
			</TabsList>
			<TabsContent value="details">DETAILS</TabsContent>
			<TabsContent value="rating">
				<ProductReviews />
			</TabsContent>
			<TabsContent value="faqs">faqs</TabsContent>
		</Tabs>
	);
};

export default ProductTabs;
