'use client';

import { Btn } from '@/components/btn';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Currency } from '@/components/ui/currency';
import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

export const OrderSummary = ({ className }: Props) => {
	// const searchParams = useSearchParams();
	// const items = useCart((state) => state.items);
	// const removeAll = useCart((state) => state.removeAll);

	// useEffect(() => {

	// 	if (searchParams.get('success')) {
	// 		toast.success('Payment completed');
	// 		removeAll();
	// 	}
	// 	if (searchParams.get('canceled')) {
	// 		toast.error('Something went wrong!');
	// 	}
	// }, [searchParams, removeAll]);

	// const totalPrice = items.reduce((total, item) => {
	// 	return total + Number(item.price);
	// }, 0);

	const totalPrice = 545;

	const onCheckout = async () => {
		// const response = await axios.post(
		// 	`${process.env.NEXT_PUBLIC_API_URL}/checkout`,
		// 	{
		// 		productId: items.map((item) => item.id),
		// 	}
		// );

		// window.location = response.data.url;
		console.log('onCheckout');
	};

	return (
		<Card className={cn(className)}>
			<CardHeader>
				<h2 className="text-xl lg:text-2xl font-bold ">Order Summary</h2>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex items-center justify-between border-t  pt-4">
					<div className="text-base font-medium">Total</div>
					<Currency value={totalPrice} />
				</div>
			</CardContent>
			<CardFooter>
				<Btn
					// disabled={items.length === 0}
					label="Checkout"
					onClick={onCheckout}
					className="w-full"
				/>
			</CardFooter>
		</Card>
	);
};
