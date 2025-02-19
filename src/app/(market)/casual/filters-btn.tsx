'use client';

import { Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useOpenFilters } from '@/hooks/use-open-filters';
import { cn } from '@/lib/utils';

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
