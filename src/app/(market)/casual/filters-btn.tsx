'use client';

import { Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useOpenFilters } from '@/hooks/use-open-filters';

type Props = {
	className?: string;
};

const FiltersBtn = ({ className }: Props) => {
	const openFilters = useOpenFilters();

	return (
		<Button
			variant="secondary"
			size="icon"
			className={cn('rounded-full', className)}
			onClick={openFilters.onOpen}
		>
			<Filter className="size-4" />
		</Button>
	);
};

export default FiltersBtn;
