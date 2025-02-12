import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';

type Props = {
	value?: number;
};

export const Amount = ({ value }: Props) => {
	const [amount, setAmount] = useState<number>(1);

	useEffect(() => {
		if (value) setAmount(value);
	}, [value]);

	return (
		<div className="flex items-center justify-between gap-x-2 bg-secondary w-40 rounded-3xl p-2">
			<Button
				variant="secondary"
				size="icon"
				className="rounded-full hover:bg-primary hover:text-primary-foreground"
				onClick={() => {
					if (amount > 1) {
						setAmount(amount - 1);
					} else {
						return;
					}
				}}
			>
				<Minus className="size-4" />
			</Button>
			<span className="font-medium px-2">{amount}</span>
			<Button
				variant="secondary"
				size="icon"
				className="rounded-full hover:bg-primary hover:text-primary-foreground"
				onClick={() => {
					setAmount(amount + 1);
				}}
			>
				<Plus className="size-4" />
			</Button>
		</div>
	);
};
