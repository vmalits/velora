import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
    placeholder?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export function SearchBar({
    placeholder = 'Search products, brands, sellers...',
    className,
    size = 'md',
}: SearchBarProps) {
    return (
        <div
            className={cn(
                'flex items-center gap-2 rounded-2xl border bg-background shadow-sm transition-shadow focus-within:shadow-md focus-within:ring-2 focus-within:ring-ring/20',
                size === 'sm' && 'p-1',
                size === 'md' && 'p-1.5',
                size === 'lg' && 'p-2',
                className,
            )}
        >
            <Search
                className={cn(
                    'mx-2 shrink-0 text-muted-foreground',
                    size === 'sm' && 'size-4',
                    size === 'md' && 'size-4',
                    size === 'lg' && 'size-5',
                )}
            />
            <Input
                type="text"
                placeholder={placeholder}
                className={cn(
                    'flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0',
                    size === 'lg' && 'h-11 text-base',
                )}
            />
            <Button
                size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'default'}
                className="rounded-xl"
            >
                Search
            </Button>
        </div>
    );
}
