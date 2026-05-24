import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface FooterProps {
    className?: string;
}

export function Footer({ className }: FooterProps) {
    const columns = [
        {
            title: 'Shop',
            links: [
                { label: 'All Products', href: '/catalog' },
                { label: 'Deals & Offers', href: '/catalog?filter=deals' },
                { label: 'New Arrivals', href: '/catalog?filter=new' },
                { label: 'Best Sellers', href: '/catalog?filter=popular' },
            ],
        },
        {
            title: 'Sellers',
            links: [
                { label: 'Become a Seller', href: '/sell' },
                { label: 'Seller Dashboard', href: '/seller/dashboard' },
                { label: 'Seller Guidelines', href: '/seller/guidelines' },
                { label: 'Seller Support', href: '/seller/support' },
            ],
        },
        {
            title: 'Support',
            links: [
                { label: 'Help Center', href: '/help' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Shipping Info', href: '/shipping' },
                { label: 'Returns & Refunds', href: '/returns' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About Velora', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
            ],
        },
    ];

    return (
        <footer className={cn('border-t bg-card', className)}>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            className="group flex items-center gap-2.5"
                        >
                            <div className="flex size-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
                                V
                            </div>
                            <span className="text-lg font-bold tracking-tight text-foreground">
                                Velora
                            </span>
                        </Link>
                        <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                            The premium marketplace for everything you love.
                            Quality products from trusted sellers worldwide.
                        </p>
                        <div className="mt-5 flex gap-2">
                            <Input
                                type="email"
                                placeholder="Your email"
                                className="h-9 max-w-[200px] rounded-xl text-sm"
                            />
                            <Button
                                variant="outline"
                                size="sm"
                                className="shrink-0 rounded-xl"
                            >
                                <Mail size={14} />
                            </Button>
                        </div>
                    </div>
                    {columns.map((col) => (
                        <div key={col.title}>
                            <h4 className="text-sm font-semibold text-foreground">
                                {col.title}
                            </h4>
                            <ul className="mt-3 space-y-2.5">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <Separator className="my-8" />
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Velora. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy"
                            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/cookies"
                            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
