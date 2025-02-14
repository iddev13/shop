'use client';

import { useMountedState } from 'react-use';

import { MobileNavSheet } from '@/components/header/mobile-nav-sheet';
import { FiltersSheet } from '@/components/filters-sheet';

export const SheetProvider = () => {
	const isMounted = useMountedState();

	if (!isMounted) return null;

	return (
		<>
			<MobileNavSheet />

			<FiltersSheet />
		</>
	);
};
