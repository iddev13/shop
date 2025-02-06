import { Intro } from '@/components/intro';
import { Arrivals } from './arrivals';
import { TopSelling } from './top-selling';

export default function Home() {
	return (
		<div>
			<Intro />
			<Arrivals />
			<TopSelling />
		</div>
	);
}
