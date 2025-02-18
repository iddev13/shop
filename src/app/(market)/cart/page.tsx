import { CartBreadcrumbs } from './breadcrumbs';
import { Cards } from './cards';
import { OrderSummary } from './order-summary';

const CardPage = () => {
	return (
		<div className="pb-12 lg:pb-24">
			<div className="mb-4">
				<CartBreadcrumbs />
			</div>
			<h1 className="font-integral font-bold text-2xl lg:text-[40px] mb-4 lg:mb-6">
				Your cart
			</h1>
			<div className="flex flex-col items-start lg:flex-row gap-5">
				<Cards className="w-full lg:basis-3/5 flex-shrink-0" />
				<OrderSummary className="w-full flex-grow-0" />
			</div>
		</div>
	);
};

export default CardPage;
