import { Intro } from '@/app/(root)/intro';
import { Arrivals } from './arrivals';
import { TopSelling } from './top-selling';
import { Style } from './style';
import { Reviews } from './reviews';

export default function Home() {
	return (
		<div>
			<Intro />
			<Arrivals />
			<TopSelling />
			<Style />
			<Reviews />
		</div>
	);
}
