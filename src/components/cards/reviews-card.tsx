import { Check } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { ReviewsCardType } from '@/types/cards';
import { Rating } from '@/components/rating';
import { cn } from '@/lib/utils';

export const ReviewsCard = ({ author, text, rating }: ReviewsCardType) => {
	return (
		<Card
			className={cn(
				'max-w-xl w-full h-full sm:h-[242px] py-2 sm:py-6 rounded-2xl'
			)}
		>
			<CardContent className="space-y-3 pb-0">
				<div>
					<Rating value={rating} />
				</div>
				<div className="flex items-center">
					<h4 className="text-lg lg:text-xl font-bold capitalize">{author}</h4>
					<span className="inline-flex items-center justify-center bg-green-600 rounded-full size-5 ml-2">
						<Check className="size-3 text-white" />
					</span>
				</div>
				<p className="text-sm text-muted-foreground">&quot;{text}&quot;</p>
			</CardContent>
		</Card>
	);
};
