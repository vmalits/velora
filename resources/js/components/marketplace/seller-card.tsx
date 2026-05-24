import { cn } from '@/lib/utils';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ReviewStars } from './review-stars';
import { ArrowRight } from 'lucide-react';

interface SellerCardProps {
    name: string;
    avatar?: string;
    rating: number;
    reviewCount: number;
    productCount: number;
    joinedYearsAgo: number;
    className?: string;
}

export function SellerCard({
    name,
    avatar,
    rating,
    reviewCount,
    productCount,
    joinedYearsAgo,
    className,
}: SellerCardProps) {
    const initials = name
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <div
            className={cn(
                'group flex flex-col rounded-2xl border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg',
                className,
            )}
        >
            <div className="flex items-start gap-4">
                <Avatar className="size-12 shrink-0">
                    {avatar && <AvatarImage src={avatar} alt={name} />}
                    <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
                        {initials}
                    </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-foreground">
                            {name}
                        </h4>
                        {rating >= 4.8 && (
                            <Badge
                                variant="secondary"
                                className="text-[10px]"
                            >
                                Top Rated
                            </Badge>
                        )}
                    </div>
                    <ReviewStars
                        rating={rating}
                        reviewCount={reviewCount}
                        size={12}
                        showValue={false}
                    />
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{productCount} products</span>
                    <span>&middot;</span>
                    <span>{joinedYearsAgo}y on Velora</span>
                </div>
                <ArrowRight
                    size={14}
                    className="text-muted-foreground transition-transform group-hover:translate-x-0.5"
                />
            </div>
        </div>
    );
}
