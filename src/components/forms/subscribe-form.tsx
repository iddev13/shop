'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Mail } from 'lucide-react';

import { Btn } from '@/components/btn';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export const subscribeFormSchema = z.object({
	email: z.string().email('Invalid email address'),
});

export type SubscribeFormValues = z.infer<typeof subscribeFormSchema>;

export const SubscribeForm = () => {
	const form = useForm<SubscribeFormValues>({
		resolver: zodResolver(subscribeFormSchema),
	});

	const handleSubmit = async (values: SubscribeFormValues) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)}>
				<FormField
					name="email"
					control={form.control}
					render={({ field }) => (
						<FormItem className="mb-4">
							<div className="relative">
								<Mail className="size-4 absolute top-1/2 left-4 text-muted-foreground -translate-y-1/2" />
								<FormControl>
									<Input
										placeholder="Enter your email address"
										{...field}
										className="bg-primary-foreground h-12 text-primary rounded-3xl pl-10"
									/>
								</FormControl>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Btn
					label="Subscribe to Newsletter"
					variant="outline"
					className="text-primary"
					type="submit"
				/>
			</form>
		</Form>
	);
};
