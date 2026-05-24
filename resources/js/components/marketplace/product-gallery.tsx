import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ProductGalleryProps {
    images: string[];
    name: string;
    className?: string;
}

export function ProductGallery({
    images,
    name,
    className,
}: ProductGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className={cn('flex flex-col gap-3', className)}>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
                <img
                    src={images[selectedIndex]}
                    alt={`${name} - ${selectedIndex + 1}`}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedIndex(i)}
                        className={cn(
                            'h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all',
                            i === selectedIndex
                                ? 'border-primary ring-2 ring-primary/20'
                                : 'border-transparent hover:border-muted-foreground/30',
                        )}
                    >
                        <img
                            src={img}
                            alt={`${name} thumb ${i + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
