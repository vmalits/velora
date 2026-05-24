import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, ChevronRight } from 'lucide-react';

interface OrderCardProps {
    id: string;
    date: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    total: number;
    itemCount: number;
    currency?: string;
    className?: string;
}

const statusConfig: Record<
    string,
    {
        label: string;
        variant: 'default' | 'secondary' | 'destructive' | 'outline';
    }
> = {
    pending: { label: 'Pending', variant: 'secondary' },
    processing: { label: 'Processing', variant: 'default' },
    shipped: { label: 'Shipped', variant: 'default' },
    delivered: { label: 'Delivered', variant: 'secondary' },
    cancelled: { label: 'Cancelled', variant: 'destructive' },
};

export function OrderCard({
    id,
    date,
    status,
    total,
    itemCount,
    currency = '$',
    className,
}: OrderCardProps) {
    const config = statusConfig[status];

    return (
        <div
            className={cn(
                'flex items-center gap-4 rounded-2xl border bg-card p-4 transition-all hover:shadow-sm',
                className,
            )}
        >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Package className="size-5 text-muted-foreground" />
            </div>
            <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">
                        Order #{id.slice(-8).toUpperCase()}
                    </span>
                    <Badge variant={config.variant} className="text-xs">
                        {config.label}
                    </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{date}</span>
                    <span>&middot;</span>
                    <span>
                        {itemCount} item{itemCount !== 1 ? 's' : ''}
                    </span>
                    <span>&middot;</span>
                    <span className="font-medium text-foreground">
                        {currency}
                        {total.toFixed(2)}
                    </span>
                </div>
            </div>
            <Button variant="ghost" size="icon">
                <ChevronRight size={16} />
            </Button>
        </div>
    );
}
