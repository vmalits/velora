import { Head } from '@inertiajs/react';
import { useState } from 'react';
import {
    Heart,
    ShoppingCart,
    Minus,
    Plus,
    Share2,
    ShieldCheck,
    Truck,
    RefreshCw,
    ChevronRight,
    Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';
import {
    Avatar,
    AvatarFallback,
} from '@/components/ui/avatar';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ProductGallery } from '@/components/marketplace/product-gallery';
import { PriceDisplay } from '@/components/marketplace/price-display';
import { ReviewStars } from '@/components/marketplace/review-stars';
import { ProductCard } from '@/components/marketplace/product-card';

const product = {
    name: 'Wireless Noise-Cancelling Headphones Pro Max',
    price: 79.99,
    oldPrice: 149.99,
    rating: 4.8,
    reviewCount: 2341,
    description:
        'Experience premium sound quality with our flagship wireless headphones. Featuring advanced active noise cancellation, 40-hour battery life, and ultra-comfortable memory foam ear cushions. Perfect for travel, work, and everyday listening.',
    seller: {
        name: 'AudioTech Official',
        rating: 4.9,
        reviewCount: 12500,
        productCount: 89,
        joinedYearsAgo: 4,
    },
    images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&h=800&fit=crop',
    ],
    variants: {
        color: ['Midnight Black', 'Pearl White', 'Navy Blue', 'Rose Gold'],
        size: ['Standard', 'Compact'],
    },
    specs: [
        { label: 'Driver Size', value: '40mm' },
        { label: 'Frequency Response', value: '20Hz - 20kHz' },
        { label: 'Battery Life', value: '40 hours' },
        { label: 'Charging', value: 'USB-C, 10min = 3hrs' },
        { label: 'Weight', value: '250g' },
        { label: 'Bluetooth', value: '5.3' },
        { label: 'ANC', value: 'Hybrid Active Noise Cancellation' },
        { label: 'Water Resistance', value: 'IPX4' },
    ],
    reviews: [
        {
            author: 'Alex M.',
            rating: 5,
            date: '2 weeks ago',
            text: "Absolutely incredible sound quality. The noise cancellation is the best I've experienced. Battery lasts forever!",
            helpful: 24,
        },
        {
            author: 'Sarah K.',
            rating: 5,
            date: '1 month ago',
            text: 'Super comfortable for long listening sessions. The ANC is phenomenal on flights.',
            helpful: 18,
        },
        {
            author: 'James R.',
            rating: 4,
            date: '1 month ago',
            text: 'Great headphones overall. Sound quality is top-notch. Only wish the case was a bit more compact.',
            helpful: 12,
        },
    ],
};

const relatedProducts = [
    {
        id: 'r1',
        name: 'Bluetooth Portable Speaker',
        price: 39.99,
        oldPrice: 59.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
        rating: 4.3,
        reviewCount: 2100,
        seller: 'SoundWave',
        sellerRating: 4.4,
        shippingEstimate: 'Free shipping · 2-3 days',
    },
    {
        id: 'r2',
        name: 'Mechanical Keyboard RGB',
        price: 149.0,
        oldPrice: 199.0,
        image: 'https://images.unsplash.com/photo-1511467688334-9b223aa9829b?w=400&h=400&fit=crop',
        rating: 4.8,
        reviewCount: 3200,
        seller: 'KeyCraft',
        sellerRating: 4.8,
        shippingEstimate: 'Free shipping · 2-3 days',
    },
    {
        id: 'r3',
        name: 'USB-C Hub 7-in-1',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop',
        rating: 4.5,
        reviewCount: 890,
        seller: 'TechConnect',
        sellerRating: 4.6,
        shippingEstimate: 'Free shipping · 3-5 days',
    },
    {
        id: 'r4',
        name: 'Wireless Mouse Ergonomic',
        price: 49.99,
        oldPrice: 69.99,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
        rating: 4.6,
        reviewCount: 1540,
        seller: 'ErgoMax',
        sellerRating: 4.5,
        shippingEstimate: 'Free shipping · 2-3 days',
    },
];

export default function Product() {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0);

    const discount = product.oldPrice
        ? Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100,
          )
        : 0;

    return (
        <>
            <Head title={product.name} />

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <Breadcrumb className="mb-6">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/catalog">
                                Electronics
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/catalog?cat=headphones">
                                Headphones
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <span className="text-muted-foreground">
                                {product.name}
                            </span>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* Product Layout */}
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left: Gallery */}
                    <ProductGallery
                        images={product.images}
                        name={product.name}
                    />

                    {/* Right: Product Info & Purchase */}
                    <div className="flex flex-col">
                        <div className="space-y-5">
                            {/* Title & Actions */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-2">
                                    <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                        {product.name}
                                    </h1>
                                    <div className="flex items-center gap-3">
                                        <ReviewStars
                                            rating={product.rating}
                                            reviewCount={product.reviewCount}
                                        />
                                        <span className="text-sm text-muted-foreground">
                                            2.3K sold
                                        </span>
                                    </div>
                                </div>
                                <div className="flex shrink-0 gap-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-xl"
                                    >
                                        <Share2 size={16} />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-xl"
                                    >
                                        <Heart size={16} />
                                    </Button>
                                </div>
                            </div>

                            {/* Price */}
                            <PriceDisplay
                                price={product.price}
                                oldPrice={product.oldPrice}
                                size="lg"
                            />

                            {/* Shipping info */}
                            <div className="flex items-center gap-2.5 rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/30">
                                <Truck
                                    size={16}
                                    className="shrink-0 text-emerald-600 dark:text-emerald-400"
                                />
                                <span className="text-sm text-emerald-700 dark:text-emerald-300">
                                    Free shipping · Estimated delivery 2-3
                                    business days
                                </span>
                            </div>

                            <Separator />

                            {/* Color Variants */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium">
                                        Color
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {product.variants.color[selectedColor]}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {product.variants.color.map((color, i) => (
                                        <Button
                                            key={color}
                                            variant={
                                                i === selectedColor
                                                    ? 'default'
                                                    : 'outline'
                                            }
                                            size="sm"
                                            className="rounded-xl"
                                            onClick={() =>
                                                setSelectedColor(i)
                                            }
                                        >
                                            {i === selectedColor && (
                                                <Check
                                                    size={12}
                                                    className="mr-1.5"
                                                />
                                            )}
                                            {color}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Size Variants */}
                            <div className="space-y-3">
                                <p className="text-sm font-medium">Size</p>
                                <div className="flex gap-2">
                                    {product.variants.size.map((size, i) => (
                                        <Button
                                            key={size}
                                            variant={
                                                i === selectedSize
                                                    ? 'default'
                                                    : 'outline'
                                            }
                                            size="sm"
                                            className="rounded-xl"
                                            onClick={() =>
                                                setSelectedSize(i)
                                            }
                                        >
                                            {i === selectedSize && (
                                                <Check
                                                    size={12}
                                                    className="mr-1.5"
                                                />
                                            )}
                                            {size}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className="flex items-center gap-4">
                                <p className="text-sm font-medium">Quantity</p>
                                <div className="flex items-center gap-1">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="size-8 rounded-xl"
                                        onClick={() =>
                                            setQuantity(
                                                Math.max(1, quantity - 1),
                                            )
                                        }
                                    >
                                        <Minus size={14} />
                                    </Button>
                                    <span className="w-10 text-center text-sm font-medium">
                                        {quantity}
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="size-8 rounded-xl"
                                        onClick={() =>
                                            setQuantity(quantity + 1)
                                        }
                                    >
                                        <Plus size={14} />
                                    </Button>
                                </div>
                            </div>

                            <Separator />

                            {/* Add to Cart / Buy */}
                            <div className="flex gap-3">
                                <Button
                                    className="flex-1 rounded-xl"
                                    size="lg"
                                >
                                    <ShoppingCart size={18} className="mr-2" />
                                    Add to Cart
                                </Button>
                                <Button
                                    variant="secondary"
                                    className="rounded-xl"
                                    size="lg"
                                >
                                    Buy Now
                                </Button>
                            </div>

                            {/* Trust badges */}
                            <div className="grid grid-cols-3 gap-3 rounded-xl border bg-muted/30 p-4">
                                <div className="flex flex-col items-center gap-1.5 text-center">
                                    <ShieldCheck
                                        size={18}
                                        className="text-muted-foreground"
                                    />
                                    <span className="text-xs text-muted-foreground">
                                        Buyer Protection
                                    </span>
                                </div>
                                <div className="flex flex-col items-center gap-1.5 text-center">
                                    <Truck
                                        size={18}
                                        className="text-muted-foreground"
                                    />
                                    <span className="text-xs text-muted-foreground">
                                        Fast Delivery
                                    </span>
                                </div>
                                <div className="flex flex-col items-center gap-1.5 text-center">
                                    <RefreshCw
                                        size={18}
                                        className="text-muted-foreground"
                                    />
                                    <span className="text-xs text-muted-foreground">
                                        Easy Returns
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seller Card */}
                <div className="mt-12">
                    <Card className="rounded-2xl">
                        <CardContent className="flex items-center gap-4 p-5">
                            <Avatar className="size-12">
                                <AvatarFallback className="text-sm font-medium">
                                    AT
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-semibold text-foreground">
                                        {product.seller.name}
                                    </p>
                                    <Badge
                                        variant="secondary"
                                        className="text-xs"
                                    >
                                        Top Seller
                                    </Badge>
                                </div>
                                <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                                    <span className="font-medium text-amber-500">
                                        ★ {product.seller.rating}
                                    </span>
                                    <span>
                                        {product.seller.reviewCount.toLocaleString()}{' '}
                                        reviews
                                    </span>
                                    <span>·</span>
                                    <span>
                                        {product.seller.productCount} products
                                    </span>
                                    <span>·</span>
                                    <span>
                                        {product.seller.joinedYearsAgo}y on
                                        Velora
                                    </span>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl"
                            >
                                Visit Store
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Tabs: Description, Specs, Reviews */}
                <Tabs defaultValue="description" className="mt-10">
                    <TabsList className="w-full justify-start rounded-xl bg-muted/50 p-1">
                        <TabsTrigger value="description">
                            Description
                        </TabsTrigger>
                        <TabsTrigger value="specs">Specifications</TabsTrigger>
                        <TabsTrigger value="reviews">
                            Reviews ({product.reviewCount})
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="description" className="mt-6">
                        <div className="max-w-3xl space-y-4">
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {product.description}
                            </p>
                            <h4 className="pt-2 text-sm font-semibold text-foreground">
                                Key Features
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <Check
                                        size={14}
                                        className="mt-0.5 shrink-0 text-emerald-500"
                                    />
                                    Hybrid Active Noise Cancellation with 3
                                    modes
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check
                                        size={14}
                                        className="mt-0.5 shrink-0 text-emerald-500"
                                    />
                                    40-hour battery life with quick charge
                                    support
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check
                                        size={14}
                                        className="mt-0.5 shrink-0 text-emerald-500"
                                    />
                                    Premium memory foam ear cushions for
                                    all-day comfort
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check
                                        size={14}
                                        className="mt-0.5 shrink-0 text-emerald-500"
                                    />
                                    Multi-point connection — connect 2 devices
                                    simultaneously
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check
                                        size={14}
                                        className="mt-0.5 shrink-0 text-emerald-500"
                                    />
                                    Hi-Res Audio certified with LDAC codec
                                    support
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check
                                        size={14}
                                        className="mt-0.5 shrink-0 text-emerald-500"
                                    />
                                    Foldable design with premium carrying case
                                    included
                                </li>
                            </ul>
                        </div>
                    </TabsContent>
                    <TabsContent value="specs" className="mt-6">
                        <div className="max-w-3xl grid gap-3 sm:grid-cols-2">
                            {product.specs.map((spec) => (
                                <div
                                    key={spec.label}
                                    className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3"
                                >
                                    <span className="text-sm text-muted-foreground">
                                        {spec.label}
                                    </span>
                                    <span className="text-sm font-medium">
                                        {spec.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="reviews" className="mt-6">
                        <div className="max-w-3xl space-y-6">
                            {/* Rating Summary */}
                            <div className="flex items-center gap-6 rounded-xl border p-5">
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-foreground">
                                        {product.rating}
                                    </p>
                                    <ReviewStars
                                        rating={product.rating}
                                        size={14}
                                        showValue={false}
                                    />
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {product.reviewCount.toLocaleString()}{' '}
                                        reviews
                                    </p>
                                </div>
                                <div className="flex-1 space-y-1.5">
                                    {[5, 4, 3, 2, 1].map((stars) => (
                                        <div
                                            key={stars}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="w-3 text-xs text-muted-foreground">
                                                {stars}
                                            </span>
                                            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                                                <div
                                                    className="h-full rounded-full bg-amber-400"
                                                    style={{
                                                        width:
                                                            stars === 5
                                                                ? '72%'
                                                                : stars === 4
                                                                  ? '18%'
                                                                  : stars === 3
                                                                    ? '6%'
                                                                    : stars ===
                                                                        2
                                                                      ? '3%'
                                                                      : '1%',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Review List */}
                            <div className="divide-y">
                                {product.reviews.map((review) => (
                                    <div
                                        key={review.author}
                                        className="py-5 first:pt-0"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Avatar className="size-9">
                                                <AvatarFallback className="text-xs">
                                                    {review.author.slice(0, 2)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">
                                                    {review.author}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <ReviewStars
                                                        rating={review.rating}
                                                        size={12}
                                                        showValue={false}
                                                    />
                                                    <span className="text-xs text-muted-foreground">
                                                        {review.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-3 pl-12 text-sm text-muted-foreground">
                                            {review.text}
                                        </p>
                                        <div className="mt-2 pl-12">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-auto px-2 py-1 text-xs text-muted-foreground"
                                            >
                                                Helpful ({review.helpful})
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

                {/* Related Products */}
                <div className="mt-16">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-foreground">
                            You might also like
                        </h2>
                        <Button
                            variant="ghost"
                            className="gap-1 rounded-xl text-sm"
                        >
                            View more <ChevronRight size={14} />
                        </Button>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {relatedProducts.map((p) => (
                            <ProductCard key={p.id} {...p} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
