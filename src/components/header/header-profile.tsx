'use client';

import { CircleUser } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

import { cn } from '@/lib/utils';
import { pulseBtnFunc } from '@/utils/pulseBtnFunc';
import { useHeaderProfile } from '@/hooks/use-open-header-profile';

export const HeaderProfile = () => {
	const { isOpen, onOpen, onClose } = useHeaderProfile();
	return (
		<Dialog open={isOpen} onOpenChange={isOpen ? onClose : onOpen}>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className={cn(
						'w-6 h-6 hover:bg-transparent hover:text-primary relative overflow-hidden'
					)}
					onClick={(e) => {
						pulseBtnFunc(e);
						onOpen();
					}}
				>
					<CircleUser size={16} />
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[80vw] lg:max-w-[600px] px-2 pb-2 md:px-4 md:pb-4 rounded-lg max-h-[90vh] overflow-y-auto">
				<DialogTitle>Sign in</DialogTitle>
			</DialogContent>
		</Dialog>
	);
};
