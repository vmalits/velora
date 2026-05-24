import { cn } from '@/lib/utils';
import { Shield, Truck, RefreshCw, HeadphonesIcon } from 'lucide-react';

interface TrustBadgesProps {
    className?: string;
}

export function TrustBadge({
    icon: Icon,
    label,
    description,
}: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    description: string;
}) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <Icon className="size-5" />
            </div>
            <div>
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}

export function TrustBadges({ className }: TrustBadgesProps) {
    return (
        <div className={cn('grid grid-cols-2 gap-4 lg:grid-cols-4', className)}>
            <TrustBadge
                icon={Shield}
                label="Buyer Protection"
                description="Full refund if item not received"
            />
            <TrustBadge
                icon={Truck}
                label="Fast Shipping"
                description="Delivery in 2-5 business days"
            />
            <TrustBadge
                icon={RefreshCw}
                label="Easy Returns"
                description="30-day return policy"
            />
            <TrustBadge
                icon={HeadphonesIcon}
                label="24/7 Support"
                description="Dedicated customer service"
            />
        </div>
    );
}
