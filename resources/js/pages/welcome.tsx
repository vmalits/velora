import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    TrendingUp,
    Zap,
    Sparkles,
    ChevronLeft,
    ChevronRight,
    Shield,
    Truck,
    RefreshCw,
    HeadphonesIcon,
    Star,
    Users,
    Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { SearchBar } from '@/components/marketplace/search-bar';
import { CategoryCard } from '@/components/marketplace/category-card';
import { ProductCard } from '@/components/marketplace/product-card';
import { SellerCard } from '@/components/marketplace/seller-card';

const categories = [
    { name: 'Electronics', icon: '💻', count: 15240 },
    { name: 'Fashion', icon: '👗', count: 23890 },
    { name: 'Home & Living', icon: '🏠', count: 8750 },
    { name: 'Sports', icon: '⚽', count: 6320 },
    { name: 'Beauty', icon: '✨', count: 12800 },
    { name: 'Books', icon: '📚', count: 45200 },
    { name: 'Toys', icon: '🧸', count: 3150 },
    { name: 'Auto', icon: '🚗', count: 4890 },
];

const trendingProducts = [
    {
        id: '1',
        name: 'Wireless Noise-Cancelling Headphones Pro Max',
        price: 79.99,
        oldPrice: 149.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        rating: 4.8,
        reviewCount: 2341,
        seller: 'AudioTech',
        sellerRating: 4.9,
        shippingEstimate: 'Free shipping · 2-3 days',
        isFavorite: true,
    },
    {
        id: '2',
        name: 'Premium Leather Crossbody Bag',
        price: 45.0,
        oldPrice: 89.0,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
        rating: 4.6,
        reviewCount: 876,
        seller: 'StyleHouse',
        sellerRating: 4.7,
        shippingEstimate: 'Free shipping · 3-5 days',
    },
    {
        id: '3',
        name: 'Smart Fitness Watch Series 5',
        price: 129.0,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        rating: 4.9,
        reviewCount: 5621,
        seller: 'FitGear',
        sellerRating: 4.8,
        shippingEstimate: 'Free shipping · 1-2 days',
    },
    {
        id: '4',
        name: 'Organic Cotton Oversized T-Shirt',
        price: 24.99,
        oldPrice: 39.99,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        rating: 4.5,
        reviewCount: 1243,
        seller: 'EcoWear',
        sellerRating: 4.6,
        shippingEstimate: '$2.99 shipping · 3-5 days',
    },
    {
        id: '5',
        name: 'Minimalist Desk Lamp with Wireless Charger',
        price: 54.99,
        oldPrice: 79.99,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        rating: 4.7,
        reviewCount: 432,
        seller: 'LumiHome',
        sellerRating: 4.8,
        shippingEstimate: 'Free shipping · 2-4 days',
    },
    {
        id: '6',
        name: 'Professional DSLR Camera Kit 4K',
        price: 899.0,
        oldPrice: 1299.0,
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
        rating: 4.9,
        reviewCount: 892,
        seller: 'ProShot',
        sellerRating: 5.0,
        shippingEstimate: 'Free express · 1-2 days',
    },
];

const recommendedProducts = [
    {
        id: 'r1',
        name: 'Ergonomic Office Chair Pro',
        price: 349.0,
        oldPrice: 499.0,
        image: 'https://images.unsplash.com/photo-1592078615290-033eecc0ecbd?w=400&h=400&fit=crop',
        rating: 4.4,
        reviewCount: 678,
        seller: 'ErgoMax',
        sellerRating: 4.5,
        shippingEstimate: 'Free shipping · 5-7 days',
    },
    {
        id: 'r2',
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
        id: 'r3',
        name: 'Running Shoes Ultra Comfort',
        price: 89.0,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        rating: 4.6,
        reviewCount: 1543,
        seller: 'RunFast',
        sellerRating: 4.7,
        shippingEstimate: 'Free shipping · 3-5 days',
    },
    {
        id: 'r4',
        name: 'Stainless Steel Water Bottle',
        price: 19.99,
        oldPrice: 29.99,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
        rating: 4.2,
        reviewCount: 890,
        seller: 'HydroLife',
        sellerRating: 4.3,
        shippingEstimate: '$1.99 shipping · 3-5 days',
    },
];

const topSellers = [
    {
        name: 'AudioTech Official',
        rating: 4.9,
        reviewCount: 12500,
        productCount: 89,
        joinedYearsAgo: 4,
    },
    {
        name: 'StyleHouse Boutique',
        rating: 4.7,
        reviewCount: 8320,
        productCount: 156,
        joinedYearsAgo: 3,
    },
    {
        name: 'ProShot Cameras',
        rating: 5.0,
        reviewCount: 4300,
        productCount: 34,
        joinedYearsAgo: 5,
    },
    {
        name: 'EcoWear Sustainable',
        rating: 4.6,
        reviewCount: 6100,
        productCount: 72,
        joinedYearsAgo: 2,
    },
];

const stats = [
    { value: '2M+', label: 'Products' },
    { value: '50K+', label: 'Sellers' },
    { value: '10M+', label: 'Customers' },
    { value: '99.8%', label: 'Satisfaction' },
];

export default function Welcome() {
    return (
        <>
            <Head title="Velora — Premium Marketplace" />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/[0.02] to-background">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
                <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-sm shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
                            <Sparkles
                                size={14}
                                className="text-amber-500"
                            />
                            <span className="text-muted-foreground">
                                Summer Sale — Up to 60% off
                            </span>
                            <ArrowRight size={14} />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Discover. Shop.{' '}
                            <span className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
                                Love.
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                            The premium marketplace where quality meets value.
                            Millions of products from trusted sellers worldwide.
                        </p>
                        <div className="mx-auto mt-8 max-w-2xl">
                            <SearchBar
                                size="lg"
                                placeholder="Search anything — products, brands, categories..."
                            />
                        </div>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <Zap
                                    size={14}
                                    className="text-amber-500"
                                />{' '}
                                Fast Delivery
                            </span>
                            <span className="flex items-center gap-1.5">
                                <TrendingUp
                                    size={14}
                                    className="text-emerald-500"
                                />{' '}
                                Trending Products
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Shield
                                    size={14}
                                    className="text-blue-500"
                                />{' '}
                                Buyer Protection
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="border-y bg-card/50">
                <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 py-6 sm:gap-16 sm:px-6 lg:px-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="text-xl font-bold text-foreground sm:text-2xl">
                                {stat.value}
                            </p>
                            <p className="text-xs text-muted-foreground sm:text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">
                            Shop by Category
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Find exactly what you need
                        </p>
                    </div>
                    <Button variant="ghost" className="gap-1 rounded-xl">
                        All categories <ArrowRight size={14} />
                    </Button>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
                    {categories.map((cat) => (
                        <CategoryCard key={cat.name} {...cat} />
                    ))}
                </div>
            </section>

            {/* Promotional Banners */}
            <section className="bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent shadow-none">
                            <CardContent className="flex flex-col justify-between p-6">
                                <div>
                                    <Badge
                                        variant="secondary"
                                        className="mb-3 rounded-lg text-xs"
                                    >
                                        Limited Time
                                    </Badge>
                                    <h3 className="text-xl font-bold text-foreground">
                                        Flash Sale
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Up to 60% off on top electronics. Ends
                                        in 24h.
                                    </p>
                                </div>
                                <Button
                                    className="mt-4 w-fit rounded-xl"
                                    size="sm"
                                >
                                    Shop Now{' '}
                                    <ArrowRight size={14} className="ml-1" />
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="overflow-hidden border-0 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent shadow-none">
                            <CardContent className="flex flex-col justify-between p-6">
                                <div>
                                    <Badge
                                        variant="secondary"
                                        className="mb-3 rounded-lg text-xs"
                                    >
                                        New Collection
                                    </Badge>
                                    <h3 className="text-xl font-bold text-foreground">
                                        Summer 2026
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Fresh styles for the new season. Free
                                        returns.
                                    </p>
                                </div>
                                <Button
                                    variant="secondary"
                                    className="mt-4 w-fit rounded-xl"
                                    size="sm"
                                >
                                    Explore{' '}
                                    <ArrowRight size={14} className="ml-1" />
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="overflow-hidden border-0 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent shadow-none sm:col-span-2 lg:col-span-1">
                            <CardContent className="flex flex-col justify-between p-6">
                                <div>
                                    <Badge
                                        variant="secondary"
                                        className="mb-3 rounded-lg text-xs"
                                    >
                                        Seller Program
                                    </Badge>
                                    <h3 className="text-xl font-bold text-foreground">
                                        Start Selling
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Reach millions. Zero setup fees for new
                                        sellers.
                                    </p>
                                </div>
                                <Button
                                    variant="outline"
                                    className="mt-4 w-fit rounded-xl"
                                    size="sm"
                                >
                                    Get Started{' '}
                                    <ArrowRight size={14} className="ml-1" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Trending Products */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">
                            Trending Now
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Most popular products this week
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-8 rounded-xl"
                        >
                            <ChevronLeft size={14} />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-8 rounded-xl"
                        >
                            <ChevronRight size={14} />
                        </Button>
                    </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {trendingProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <Button
                        variant="outline"
                        className="rounded-xl px-8"
                        asChild
                    >
                        <Link href="/catalog">
                            View All Products{' '}
                            <ArrowRight size={14} className="ml-1" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="border-y bg-card/50">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-4 lg:px-8">
                    <div className="flex items-center gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/5">
                            <Shield className="size-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-foreground">
                                Buyer Protection
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Full refund if item not received
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/5">
                            <Truck className="size-6 text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-foreground">
                                Fast Shipping
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Delivery in 2-5 business days
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/5">
                            <RefreshCw className="size-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-foreground">
                                Easy Returns
                            </p>
                            <p className="text-xs text-muted-foreground">
                                30-day return policy
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/5">
                            <HeadphonesIcon className="size-6 text-violet-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-foreground">
                                24/7 Support
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Dedicated customer service
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recommended For You */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">
                            Recommended For You
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Based on your browsing and preferences
                        </p>
                    </div>
                    <Button variant="ghost" className="gap-1 rounded-xl">
                        See more <ArrowRight size={14} />
                    </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {recommendedProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            {/* Top Sellers */}
            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">
                            Top Sellers
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Trusted by thousands of happy customers
                        </p>
                    </div>
                    <Button variant="ghost" className="gap-1 rounded-xl">
                        View all <ArrowRight size={14} />
                    </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {topSellers.map((seller) => (
                        <SellerCard key={seller.name} {...seller} />
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="bg-gradient-to-b from-muted/50 to-muted/30">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                            <Mail className="size-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                            Stay in the loop
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Get exclusive deals, new arrivals, and curated
                            recommendations delivered to your inbox.
                        </p>
                        <div className="mx-auto mt-6 flex max-w-md gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="h-11 rounded-xl"
                            />
                            <Button className="h-11 rounded-xl px-6">
                                Subscribe
                            </Button>
                        </div>
                        <p className="mt-3 text-xs text-muted-foreground">
                            No spam. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
