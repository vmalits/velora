import { Link, usePage } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import {
    Heart,
    ShoppingCart,
    Menu,
    Search,
    Package,
    LogOut,
    Settings,
    Sun,
    Moon,
    Store,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAppearance } from '@/hooks/use-appearance';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { auth } = usePage().props;
    const isMobile = useIsMobile();
    const { resolvedAppearance, updateAppearance } = useAppearance();

    const navLinks = [
        { label: 'Products', href: '/catalog' },
        { label: 'Deals', href: '/catalog?filter=deals' },
        { label: 'Sellers', href: '/sellers' },
        { label: 'Support', href: '/support' },
    ];

    const userInitials = auth.user?.name
        ?.split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <header
            className={cn(
                'sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60',
                className,
            )}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-6">
                    <Link href="/" className="group flex items-center gap-2.5">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground transition-transform group-hover:scale-105">
                            V
                        </div>
                        <span className="text-lg font-bold tracking-tight text-foreground">
                            Velora
                        </span>
                    </Link>

                    {!isMobile && (
                        <nav className="flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    )}
                </div>

                {!isMobile && (
                    <div className="max-w-md flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products, brands..."
                                className="h-9 rounded-xl border-muted bg-muted/50 pl-9 pr-4 text-sm transition-colors focus:bg-background focus:ring-1"
                            />
                        </div>
                    </div>
                )}

                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-9 rounded-xl"
                        onClick={() =>
                            updateAppearance(
                                resolvedAppearance === 'dark'
                                    ? 'light'
                                    : 'dark',
                            )
                        }
                    >
                        {resolvedAppearance === 'dark' ? (
                            <Sun size={16} />
                        ) : (
                            <Moon size={16} />
                        )}
                    </Button>

                    {auth.user ? (
                        <>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative size-9 rounded-xl"
                            >
                                <Heart size={16} />
                                <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                                    3
                                </span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative size-9 rounded-xl"
                            >
                                <ShoppingCart size={16} />
                                <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                                    2
                                </span>
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="ml-1 gap-2 rounded-xl px-2"
                                    >
                                        <Avatar className="size-7">
                                            {auth.user.avatar && (
                                                <AvatarImage
                                                    src={auth.user.avatar}
                                                />
                                            )}
                                            <AvatarFallback className="text-xs">
                                                {userInitials}
                                            </AvatarFallback>
                                        </Avatar>
                                        {!isMobile && (
                                            <span className="text-sm font-medium">
                                                {auth.user.name}
                                            </span>
                                        )}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    className="w-56 rounded-xl p-2"
                                >
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-medium">
                                                {auth.user.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {auth.user.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        asChild
                                        className="rounded-lg"
                                    >
                                        <Link href="/dashboard">
                                            <Package className="mr-2 size-4" />
                                            My Orders
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        asChild
                                        className="rounded-lg"
                                    >
                                        <Link href="/dashboard?tab=wishlist">
                                            <Heart className="mr-2 size-4" />
                                            Wishlist
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        asChild
                                        className="rounded-lg"
                                    >
                                        <Link href="/seller/dashboard">
                                            <Store className="mr-2 size-4" />
                                            Seller Dashboard
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        asChild
                                        className="rounded-lg"
                                    >
                                        <Link href="/settings/profile">
                                            <Settings className="mr-2 size-4" />
                                            Settings
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        asChild
                                        className="rounded-lg text-destructive focus:text-destructive"
                                    >
                                        <Link href="/logout" method="post">
                                            <LogOut className="mr-2 size-4" />
                                            Log out
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="rounded-xl"
                                asChild
                            >
                                <Link href="/login">Log in</Link>
                            </Button>
                            <Button
                                size="sm"
                                className="rounded-xl"
                                asChild
                            >
                                <Link href="/register">Sign up</Link>
                            </Button>
                        </div>
                    )}

                    {isMobile && (
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="ml-1 size-9 rounded-xl"
                                >
                                    <Menu size={18} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80 p-0">
                                <SheetHeader className="border-b px-6 py-4">
                                    <SheetTitle className="flex items-center gap-2">
                                        <div className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                                            V
                                        </div>
                                        Velora
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="p-4">
                                    <div className="relative mb-4">
                                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            type="search"
                                            placeholder="Search products..."
                                            className="h-10 rounded-xl bg-muted/50 pl-9 pr-4"
                                        />
                                    </div>
                                </div>

                                <nav className="flex flex-col gap-1 px-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>

                                {!auth.user && (
                                    <>
                                        <Separator className="my-4" />
                                        <div className="flex flex-col gap-2 px-4">
                                            <Button
                                                variant="outline"
                                                className="rounded-xl"
                                                asChild
                                            >
                                                <Link href="/login">
                                                    Log in
                                                </Link>
                                            </Button>
                                            <Button
                                                className="rounded-xl"
                                                asChild
                                            >
                                                <Link href="/register">
                                                    Sign up
                                                </Link>
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </SheetContent>
                        </Sheet>
                    )}
                </div>
            </div>
        </header>
    );
}
