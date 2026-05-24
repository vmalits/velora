import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface ReviewStarsProps {
    rating: number;
    maxStars?: number;
    size?: number;
    className?: string;
    showValue?: boolean;
    reviewCount?: number;
}

export function ReviewStars({
    rating,
    maxStars = 5,
    size = 14,
    className,
    showValue = true,
    reviewCount,
}: ReviewStarsProps) {
    return (
        <div className={cn('flex items-center gap-1', className)}>
            <div className="flex items-center gap-0.5">
                {Array.from({ length: maxStars }).map((_, i) => (
                    <Star
                        key={i}
                        size={size}
                        className={
                            i < Math.round(rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'fill-muted text-muted-foreground/30'
                        }
                    />
                ))}
            </div>
            {showValue && (
                <span className="text-sm font-medium text-muted-foreground">
                    {rating.toFixed(1)}
                </span>
            )}
            {reviewCount !== undefined && (
                <span className="text-sm text-muted-foreground">
                    ({reviewCount})
                </span>
            )}
        </div>
    );
}
