import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PriceDisplay } from './price-display';
import { ReviewStars } from './review-stars';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
    rating: number;
    reviewCount: number;
    seller: string;
    sellerRating: number;
    shippingEstimate?: string;
    isFavorite?: boolean;
    className?: string;
}

export function ProductCard({
    name,
    price,
    oldPrice,
    image,
    rating,
    reviewCount,
    seller,
    sellerRating,
    shippingEstimate,
    isFavorite = false,
    className,
}: ProductCardProps) {
    return (
        <div
            className={cn(
                'group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg',
                className,
            )}
        >
            <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {oldPrice && oldPrice > price && (
                    <Badge
                        variant="destructive"
                        className="absolute top-3 left-3 rounded-lg px-2 py-0.5 text-xs font-semibold"
                    >
                        {Math.round(((oldPrice - price) / oldPrice) * 100)}% OFF
                    </Badge>
                )}
                <button
                    type="button"
                    className={cn(
                        'absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-background',
                        isFavorite && 'text-red-500',
                    )}
                >
                    <Heart
                        size={16}
                        className={cn(
                            'transition-all',
                            isFavorite && 'fill-red-500',
                        )}
                    />
                </button>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="line-clamp-2 text-sm leading-snug font-medium text-foreground transition-colors group-hover:text-primary">
                    {name}
                </h3>

                <PriceDisplay price={price} oldPrice={oldPrice} size="sm" />

                <ReviewStars
                    rating={rating}
                    reviewCount={reviewCount}
                    size={12}
                    showValue={false}
                />

                <div className="mt-auto flex items-center gap-1.5 pt-1">
                    <span className="text-xs text-muted-foreground">
                        {seller}
                    </span>
                    <span className="text-xs text-muted-foreground/50">
                        &middot;
                    </span>
                    <span className="text-xs font-medium text-amber-500">
                        ★ {sellerRating}
                    </span>
                </div>

                {shippingEstimate && (
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">
                        {shippingEstimate}
                    </p>
                )}
            </div>
        </div>
    );
}
