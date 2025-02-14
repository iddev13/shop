import { CasualAside } from './casual-aside';
import { CasualProducts } from './casual-products';
import { CasualBreadcrumbs } from './breadcrumbs';

const CasualPage = () => {
	return (
		<div>
			<div className="mb-4">
				<CasualBreadcrumbs />
			</div>
			<div className="flex items-start lg:gap-x-5 mb-12">
				<CasualAside className="hidden lg:block" />
				<CasualProducts />
			</div>
		</div>
	);
};

export default CasualPage;
