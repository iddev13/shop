'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
	const { setTheme } = useTheme();

	return (
		<div
			className={cn('mx-1 md:mx-2 flex items-center justify-center', className)}
		>
			<DropdownMenu>
				<DropdownMenuTrigger
					asChild
					className="focus-visible:ring-0 rounded-full border-none shadow-md dark:shadow-white/15 bg-transparent hover:bg-muted-foreground/10 transition-colors"
				>
					<Button variant="outline" className="size-6 p-3">
						<Sun className="absolute h-[1rem] w-[1rem] rotate-0 scale-100  dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0  dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onClick={() => setTheme('light')}>
						Light
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme('dark')}>
						Dark
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme('system')}>
						System
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
