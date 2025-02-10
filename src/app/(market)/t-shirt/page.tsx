import { TShirtBreadcrumbs } from './breadcrumbs';
import { ProductPreview } from './product-preview';
import ProductTabs from './tabs';

const TShirtPage = () => {
	return (
		<div>
			<TShirtBreadcrumbs className='mb-6' />
			<ProductPreview />
			<ProductTabs />
		</div>
	);
};

export default TShirtPage;
