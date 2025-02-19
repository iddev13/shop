'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Btn } from '@/components/btn';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Rating } from '../rating';
import Link from 'next/link';
import { Textarea } from '../ui/textarea';

export const subscribeFormSchema = z.object({
	advantages: z
		.string()
		.min(5, { message: 'Advantages Must be 5 or more characters long' }),
	flaws: z
		.string()
		.min(5, { message: 'Flaws Must be 5 or more characters long' }),
	email: z.string().email('Invalid email address'),
	name: z
		.string()
		.min(5, { message: 'Name Must be 5 or more characters long' }),
	comment: z
		.string()
		.min(20, { message: 'Comment Must be 20 or more characters long' }),
});

export type ProductReviewFormValues = z.infer<typeof subscribeFormSchema>;

export const ProductReviewForm = () => {
	const form = useForm<ProductReviewFormValues>({
		resolver: zodResolver(subscribeFormSchema),
	});

	const handleSubmit = async (values: ProductReviewFormValues) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<div className="mb-4 lg:mb-6 space-y-2 lg:space-y-4">
				<h1 className="text-2xl font-bold font-satoshi">
					Customer reviews about T-shirt...
				</h1>
				<h3 className="text-base font-bold">
					Be the first to leave a review about the product
				</h3>
			</div>
			<form
				onSubmit={form.handleSubmit(handleSubmit)}
				className="max-w-3xl w-full border rounded-lg p-4"
			>
				<Rating value={0} isEditing className="mb-4 lg:mb-6" />

				<FormField
					name="advantages"
					control={form.control}
					render={({ field }) => (
						<FormItem className="mb-4">
							<FormControl>
								<Input
									placeholder="Advantages"
									{...field}
									className="bg-primary-foreground h-12 text-primary rounded-lg pl-2"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="flaws"
					control={form.control}
					render={({ field }) => (
						<FormItem className="mb-4">
							<FormControl>
								<Input
									placeholder="Flaws"
									{...field}
									className="bg-primary-foreground h-12 text-primary rounded-lg pl-2"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="comment"
					control={form.control}
					render={({ field }) => (
						<FormItem className="mb-4">
							<FormControl>
								<Textarea
									placeholder="Comment..."
									{...field}
									className="bg-primary-foreground h-12 text-primary rounded-lg pl-2"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex items-center flex-wrap justify-between">
					<FormField
						name="name"
						control={form.control}
						render={({ field }) => (
							<FormItem className="mb-4">
								<FormControl>
									<Input
										placeholder="Your Name"
										{...field}
										className="bg-primary-foreground h-12 text-primary rounded-lg pl-2 min-w-64"
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="email"
						control={form.control}
						render={({ field }) => (
							<FormItem className="mb-4">
								<FormControl>
									<Input
										placeholder="Enter your email address"
										{...field}
										className="bg-primary-foreground h-12 text-primary rounded-lg pl-2 min-w-64"
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="mb-4 flex items-center justify-center md:justify-end">
					<Btn label="Subscribe to Newsletter" type="submit" />
				</div>

				<div>
					<p className="text-center">
						To ensure your review or comment is moderated and published, please
						read&nbsp;
						<Link
							href="/rules"
							className="text-sky-500 hover:text-sky-600 hover:underline"
						>
							our rules
						</Link>
						.
					</p>
				</div>
			</form>
		</Form>
	);
};
