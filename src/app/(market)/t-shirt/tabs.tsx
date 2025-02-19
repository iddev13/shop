import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductReviews } from './product-reviews';
import { ProductDescription } from './product-description';
import { ProductReviewForm } from '@/components/forms/product-review-form';

export const ProductTabs = () => {
	return (
		<Tabs defaultValue="faqs" className="mb-6 lg:mb-10">
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
			<TabsContent value="details" className="mb-12">
				<ProductDescription />
			</TabsContent>
			<TabsContent value="rating">
				<ProductReviews />
			</TabsContent>
			<TabsContent value="faqs" className="mb-12">
				<ProductReviewForm />
			</TabsContent>
		</Tabs>
	);
};

export default ProductTabs;
