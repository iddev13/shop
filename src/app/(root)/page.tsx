import { Intro } from '@/components/intro';
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
