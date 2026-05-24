import { Head, Link } from '@inertiajs/react';
import {
    SlidersHorizontal,
    Grid3X3,
    LayoutList,
    ChevronDown,
    ChevronRight,
    X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from '@/components/ui/sheet';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { ProductCard } from '@/components/marketplace/product-card';
import { SearchBar } from '@/components/marketplace/search-bar';

const products = Array.from({ length: 12 }, (_, i) => ({
    id: String(i + 1),
    name: [
        'Wireless Noise-Cancelling Headphones Pro',
        'Premium Leather Crossbody Bag',
        'Smart Fitness Watch Series 5',
        'Organic Cotton Oversized T-Shirt',
        'Minimalist Desk Lamp with Wireless Charger',
        'Professional Camera Kit 4K',
        'Ergonomic Office Chair Pro',
        'Bluetooth Portable Speaker',
        'Running Shoes Ultra Comfort',
        'Stainless Steel Water Bottle',
        'Mechanical Keyboard RGB',
        'Yoga Mat Premium Non-Slip',
    ][i],
    price: [
        79.99, 45.0, 129.0, 24.99, 54.99, 899.0, 349.0, 39.99, 89.0, 19.99,
        149.0, 34.99,
    ][i],
    oldPrice: [
        149.99,
        89.0,
        undefined,
        39.99,
        79.99,
        1299.0,
        undefined,
        59.99,
        undefined,
        29.99,
        199.0,
        undefined,
    ][i],
    image: `https://images.unsplash.com/photo-${
        [
            '1505740420928-5e560c06d30e',
            '1548036328-c9fa89d128fa',
            '1523275335684-37898b6baf30',
            '1521572163474-6864f9cf17ab',
            '1507003211169-0a1dd7228f2d',
            '1516035069371-29a1b244cc32',
            '1592078615290-033eecc0ecbd',
            '1608043152269-423dbba4e7e1',
            '1542291026-7eec264c27ff',
            '1602143407151-7111542de6e8',
            '1511467688334-9b223aa9829b',
            '1592435687371-957a7e7e0e0e',
        ][i]
    }?w=400&h=400&fit=crop`,
    rating: [4.8, 4.6, 4.9, 4.5, 4.7, 4.9, 4.4, 4.3, 4.6, 4.2, 4.8, 4.5][i],
    reviewCount: [
        2341, 876, 5621, 1243, 432, 892, 678, 2100, 1543, 890, 3200, 567,
    ][i],
    seller: [
        'AudioTech',
        'StyleHouse',
        'FitGear',
        'EcoWear',
        'LumiHome',
        'ProShot',
        'ErgoMax',
        'SoundWave',
        'RunFast',
        'HydroLife',
        'KeyCraft',
        'ZenFit',
    ][i],
    sellerRating: [4.9, 4.7, 4.8, 4.6, 4.8, 5.0, 4.5, 4.4, 4.7, 4.3, 4.8, 4.6][
        i
    ],
    shippingEstimate: [
        'Free shipping · 2-3 days',
        'Free shipping · 3-5 days',
        'Free shipping · 1-2 days',
        '$2.99 shipping · 3-5 days',
        'Free shipping · 2-4 days',
        'Free express · 1-2 days',
        'Free shipping · 5-7 days',
        'Free shipping · 2-3 days',
        'Free shipping · 3-5 days',
        '$1.99 shipping · 3-5 days',
        'Free shipping · 2-3 days',
        'Free shipping · 3-5 days',
    ][i],
}));

const filterGroups = [
    {
        id: 'category',
        label: 'Category',
        options: [
            'Electronics',
            'Fashion',
            'Home & Living',
            'Sports',
            'Beauty',
            'Books',
        ],
    },
    {
        id: 'price',
        label: 'Price Range',
        options: [
            'Under $25',
            '$25 - $50',
            '$50 - $100',
            '$100 - $500',
            'Over $500',
        ],
    },
    {
        id: 'rating',
        label: 'Rating',
        options: ['4★ & above', '3★ & above', '2★ & above'],
    },
    {
        id: 'shipping',
        label: 'Shipping',
        options: ['Free Shipping', 'Same Day', 'Next Day', '2-3 Days'],
    },
    {
        id: 'seller',
        label: 'Seller Type',
        options: ['Top Rated', 'Verified', 'Official Store'],
    },
];

function FilterSidebar({ onApply }: { onApply?: () => void }) {
    return (
        <div className="space-y-1">
            {filterGroups.map((group) => (
                <Accordion
                    key={group.id}
                    type="single"
                    collapsible
                    defaultValue={group.id}
                >
                    <AccordionItem value={group.id} className="border-none">
                        <AccordionTrigger className="py-3 text-sm font-semibold hover:no-underline">
                            {group.label}
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2.5 pb-2">
                                {group.options.map((option) => (
                                    <label
                                        key={option}
                                        className="flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-0.5 transition-colors hover:bg-accent"
                                    >
                                        <Checkbox
                                            id={`${group.id}-${option}`}
                                        />
                                        <Label
                                            htmlFor={`${group.id}-${option}`}
                                            className="cursor-pointer text-sm font-normal text-muted-foreground"
                                        >
                                            {option}
                                        </Label>
                                    </label>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    );
}

export default function Catalog() {
    return (
        <>
            <Head title="Products — Velora" />

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <Breadcrumb className="mb-6">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <span className="text-muted-foreground">
                                All Products
                            </span>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-foreground">
                        All Products
                    </h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        12,450 results
                    </p>
                </div>

                <div className="mb-6 lg:hidden">
                    <SearchBar
                        size="sm"
                        placeholder="Search products..."
                    />
                </div>

                <div className="flex gap-8">
                    {/* Desktop Sidebar Filters */}
                    <aside className="hidden w-64 shrink-0 lg:block">
                        <div className="sticky top-24">
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="text-sm font-semibold">
                                    Filters
                                </h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-auto px-2 py-1 text-xs"
                                >
                                    Clear all
                                </Button>
                            </div>
                            <Separator className="mb-4" />
                            <FilterSidebar />
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="mb-5 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                {/* Mobile Filter Sheet */}
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="gap-2 rounded-xl lg:hidden"
                                        >
                                            <SlidersHorizontal size={14} />
                                            Filters
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent
                                        side="left"
                                        className="w-80 p-0"
                                    >
                                        <SheetHeader className="border-b px-6 py-4">
                                            <SheetTitle className="flex items-center justify-between">
                                                Filters
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-xs"
                                                >
                                                    Clear all
                                                </Button>
                                            </SheetTitle>
                                        </SheetHeader>
                                        <div className="overflow-y-auto p-6">
                                            <FilterSidebar />
                                        </div>
                                        <div className="border-t p-4">
                                            <Button className="w-full rounded-xl">
                                                Show 12,450 results
                                            </Button>
                                        </div>
                                    </SheetContent>
                                </Sheet>

                                <div className="hidden items-center gap-1 rounded-xl border p-0.5 sm:flex">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7 rounded-lg"
                                    >
                                        <Grid3X3 size={14} />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-7 rounded-lg"
                                    >
                                        <LayoutList size={14} />
                                    </Button>
                                </div>

                                {/* Active filters */}
                                <div className="hidden items-center gap-1.5 sm:flex">
                                    <Badge
                                        variant="secondary"
                                        className="gap-1 rounded-lg text-xs"
                                    >
                                        Electronics
                                        <X size={10} />
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        className="gap-1 rounded-lg text-xs"
                                    >
                                        Free Shipping
                                        <X size={10} />
                                    </Badge>
                                </div>
                            </div>
                            <Select defaultValue="popular">
                                <SelectTrigger className="w-40 rounded-xl">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="popular">
                                        Most Popular
                                    </SelectItem>
                                    <SelectItem value="newest">
                                        Newest
                                    </SelectItem>
                                    <SelectItem value="price-low">
                                        Price: Low to High
                                    </SelectItem>
                                    <SelectItem value="price-high">
                                        Price: High to Low
                                    </SelectItem>
                                    <SelectItem value="rating">
                                        Highest Rated
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Grid */}
                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    {...product}
                                />
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="mt-10 flex flex-col items-center gap-3">
                            <Button
                                variant="outline"
                                className="rounded-xl px-8"
                            >
                                Load More Products
                            </Button>
                            <p className="text-xs text-muted-foreground">
                                Showing 12 of 12,450 products
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
