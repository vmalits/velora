import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/marketplace/navbar';
import { Footer } from '@/components/marketplace/footer';

interface MarketplaceLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function MarketplaceLayout({
    children,
    title,
}: MarketplaceLayoutProps) {
    return (
        <>
            {title && <Head title={title} />}
            <div className="flex min-h-screen flex-col bg-background">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </>
    );
}
