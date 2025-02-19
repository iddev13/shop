import { BrandBtn } from '@/components/brand-btn';
import { CalvinClein } from '@/components/icons/brands/calvin-clein';
import { Versace } from '@/components/icons/brands/versace';
import { Gucci } from '@/components/icons/brands/gucci';
import { Prada } from '@/components/icons/brands/prada';
import { Zara } from '@/components/icons/brands/zara';

export const Brands = () => {
	return (
		<div className="flex flex-wrap gap-2">
			<BrandBtn className="w-20 h-12">
				<Zara className="fill-primary" />
			</BrandBtn>
			<BrandBtn className="w-28 h-12">
				<CalvinClein className="fill-primary" />
			</BrandBtn>

			<BrandBtn className="w-28 h-12">
				<Versace className="fill-primary" />
			</BrandBtn>
			<BrandBtn className="w-20 h-12">
				<Gucci className="fill-primary" />
			</BrandBtn>
			<BrandBtn className="w-24 h-12">
				<Prada className="fill-primary" />
			</BrandBtn>
		</div>
	);
};
