import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type Props = {
	href?: string;
	label: string;
	className?: string;
};

export const Btn = ({ label, className }: Props) => {
	return <Button className={cn(className)}>{label}</Button>;
};
