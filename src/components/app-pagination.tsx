import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

export function AppPagination({ className }: Props) {
	return (
		<Pagination className={cn('w-full', className)}>
			<PaginationContent className="w-full justify-between">
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<div className="items-center gap-2 hidden md:flex">
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#" isActive>
							2
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">3</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>

					<PaginationItem>
						<PaginationLink href="#">8</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">9</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">10</PaginationLink>
					</PaginationItem>
				</div>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
