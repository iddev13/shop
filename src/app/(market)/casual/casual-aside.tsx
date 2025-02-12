import { Separator } from '@/components/ui/separator';
import { Filter } from 'lucide-react';

export const CasualAside = () => {
	return (
		<aside className="w-[295px] border rounded-2xl p-4 space-y-4">
			<div className="flex items-center justify-between">
				<h2>Filters</h2>
				<Filter className="size-4" />
			</div>
			<Separator />
			
		</aside>
	);
};
