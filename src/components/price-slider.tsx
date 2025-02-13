'use client';

import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type Props = {
	className?: string;
	min: number;
	max: number;
	onChange: (values: [number, number]) => void;
	defaultValue?: [number, number];
	step?: number;
	disabled?: boolean;
};

export const PriceSlider = ({
	min,
	max,
	onChange,
	defaultValue = [min, max],
	step,
	disabled,
	className,
}: Props) => {
	const [value, setValue] = useState(defaultValue);

	const handleSliderChange = (newValue: number[]) => {
		setValue(newValue as [number, number]);
		onChange(newValue as [number, number]);
	};

	// Adding second thumb in Slider Component!!!

	return (
		<div>
			<Slider
				min={min}
				max={max}
				value={value}
				onValueChange={handleSliderChange}
				step={step}
				className={cn('py-2', className)}
				name="casual-price"
				disabled={disabled}
				minStepsBetweenThumbs={5}
			/>
			<div className="flex justify-between mt-2">
				<span>{`$${value[0]}`}</span> - <span>{`$${value[1]}`}</span>
			</div>
		</div>
	);
};
