import { CasualAside } from '@/app/(market)/casual/casual-aside';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { useOpenFilters } from '@/hooks/use-open-filters';

export const FiltersSheet = () => {
	const { isOpen, onClose } = useOpenFilters();

	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent className="space-y-4 overflow-y-auto">
				<SheetHeader>
					<SheetTitle>Casual Page Filters</SheetTitle>
					<SheetDescription>Add the necessary filters.</SheetDescription>
				</SheetHeader>
				<CasualAside />
			</SheetContent>
		</Sheet>
	);
};
