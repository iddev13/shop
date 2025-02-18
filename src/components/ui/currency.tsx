'use client';

import { FC, useEffect, useState } from 'react';
import { formatter } from '@/lib/utils';

interface CurrencyProps {
	value?: string | number;
}

export const Currency: FC<CurrencyProps> = ({ value }) => {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};
