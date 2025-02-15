import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

export const OrderSummary = ({ className }: Props) => {
	return <div className={cn(className)}>OrderSummary</div>;
};

export default OrderSummary;
