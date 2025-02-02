import Form from 'next/form';
import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type SearchType = {
	className?: string;
};

export const SearchComponent = ({ className }: SearchType) => {
	return (
		<div className={cn('flex items-center max-w-[600px] w-full', className)}>
			<Form
				action="/"
				className="w-full flex items-center gap-x-2 border dark:border-muted-foreground/50 p-1 rounded-lg"
			>
				<div className="relative w-full h-7 flex items-center">
					<input
						name="search"
						placeholder="Search..."
						className="w-full pl-2 text-sm pr-7 h-full border rounded-lg overflow-hidden outline-0 border-transparent focus:border-primary"
					/>
					<Button
						type="submit"
						size="sm"
						variant="secondary"
						className="absolute top-0.5 right-0.5 w-[24px] h-[24px] p-1 hover:bg-primary hover:text-white"
					>
						<Search />
					</Button>
				</div>
			</Form>
		</div>
	);
};
