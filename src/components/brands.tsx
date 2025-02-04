import { CalvinClein } from './icons/brands/calvin-clein';
import { Gucci } from './icons/brands/gucci';
import { Prada } from './icons/brands/prada';
import { Versace } from './icons/brands/versace';
import { Zara } from './icons/brands/zara';

export const Brands = () => {
	return (
		<div className="bg-secondary-foreground py-12">
			<div className="flex items-center justify-center lg:justify-between gap-8 lg:gap-24 max-w-7xl mx-auto [&_svg]:fill-primary-foreground">
				<Versace className="w-[117px] h-[24] lg:w-[167px] lg:h-[34]" />
				<Zara className="w-[64px] h-[27] lg:w-[91px] lg:h-[38]" />
				<Gucci className="w-[110px] h-[25] lg:w-[156px] lg:h-[36]" />
				<Prada className="w-[127px] h-[21] lg:w-[194px] lg:h-[32]" />
				<CalvinClein className="w-[135px] h-[22] lg:w-[207px] lg:h-[33]" />
			</div>
		</div>
	);
};
