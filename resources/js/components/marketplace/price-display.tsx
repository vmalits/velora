import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface PriceDisplayProps {
    price: number;
    oldPrice?: number;
    currency?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export function PriceDisplay({
    price,
    oldPrice,
    currency = '$',
    size = 'md',
    className,
}: PriceDisplayProps) {
    const discount = oldPrice
        ? Math.round(((oldPrice - price) / oldPrice) * 100)
        : 0;

    return (
        <div className={cn('flex items-center gap-2', className)}>
            <span
                className={cn(
                    'font-semibold text-foreground',
                    size === 'sm' && 'text-sm',
                    size === 'md' && 'text-lg',
                    size === 'lg' && 'text-2xl',
                )}
            >
                {currency}
                {price.toFixed(2)}
            </span>
            {oldPrice && oldPrice > price && (
                <>
                    <span
                        className={cn(
                            'text-muted-foreground line-through',
                            size === 'sm' && 'text-xs',
                            size === 'md' && 'text-sm',
                            size === 'lg' && 'text-base',
                        )}
                    >
                        {currency}
                        {oldPrice.toFixed(2)}
                    </span>
                    {discount > 0 && (
                        <Badge
                            variant="destructive"
                            className="rounded-md px-1.5 py-0.5 text-xs"
                        >
                            -{discount}%
                        </Badge>
                    )}
                </>
            )}
        </div>
    );
}
