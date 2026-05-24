import { cn } from '@/lib/utils';

interface CategoryCardProps {
    name: string;
    icon: string;
    count?: number;
    className?: string;
}

export function CategoryCard({
    name,
    icon,
    count,
    className,
}: CategoryCardProps) {
    return (
        <button
            type="button"
            className={cn(
                'group flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md',
                className,
            )}
        >
            <span className="text-3xl">{icon}</span>
            <span className="text-sm font-medium text-foreground">{name}</span>
            {count !== undefined && (
                <span className="text-xs text-muted-foreground">
                    {count.toLocaleString()} items
                </span>
            )}
        </button>
    );
}
