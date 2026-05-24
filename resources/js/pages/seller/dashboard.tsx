import { Head } from '@inertiajs/react';
import {
    DollarSign,
    ShoppingBag,
    Users,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Package,
    Eye,
    MoreHorizontal,
    Download,
    Calendar,
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const stats = [
    {
        title: 'Total Revenue',
        value: '$24,563.00',
        change: '+12.5%',
        positive: true,
        icon: DollarSign,
        color: 'text-emerald-600 bg-emerald-500/10',
    },
    {
        title: 'Total Orders',
        value: '1,284',
        change: '+8.2%',
        positive: true,
        icon: ShoppingBag,
        color: 'text-blue-600 bg-blue-500/10',
    },
    {
        title: 'Customers',
        value: '863',
        change: '+15.3%',
        positive: true,
        icon: Users,
        color: 'text-violet-600 bg-violet-500/10',
    },
    {
        title: 'Conversion Rate',
        value: '3.24%',
        change: '-0.4%',
        positive: false,
        icon: TrendingUp,
        color: 'text-amber-600 bg-amber-500/10',
    },
];

const recentOrders = [
    {
        id: '#VEL-7821',
        customer: 'Alex Johnson',
        email: 'alex@email.com',
        product: 'Wireless Headphones Pro',
        amount: '$79.99',
        status: 'completed',
        date: 'Dec 20, 2026',
    },
    {
        id: '#VEL-7820',
        customer: 'Sarah Kim',
        email: 'sarah@email.com',
        product: 'Bluetooth Speaker',
        amount: '$39.99',
        status: 'processing',
        date: 'Dec 20, 2026',
    },
    {
        id: '#VEL-7819',
        customer: 'Michael Chen',
        email: 'michael@email.com',
        product: 'USB-C Hub 7-in-1',
        amount: '$34.99',
        status: 'shipped',
        date: 'Dec 19, 2026',
    },
    {
        id: '#VEL-7818',
        customer: 'Emily Davis',
        email: 'emily@email.com',
        product: 'Desk Lamp Wireless',
        amount: '$54.99',
        status: 'completed',
        date: 'Dec 19, 2026',
    },
    {
        id: '#VEL-7817',
        customer: 'James Wilson',
        email: 'james@email.com',
        product: 'Mechanical Keyboard',
        amount: '$149.00',
        status: 'pending',
        date: 'Dec 18, 2026',
    },
    {
        id: '#VEL-7816',
        customer: 'Lisa Park',
        email: 'lisa@email.com',
        product: 'Fitness Watch Series 5',
        amount: '$129.00',
        status: 'completed',
        date: 'Dec 18, 2026',
    },
];

const topProducts = [
    {
        name: 'Wireless Headphones Pro',
        sold: 342,
        revenue: '$27,272',
        stock: 156,
        progress: 78,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
    },
    {
        name: 'Bluetooth Speaker',
        sold: 218,
        revenue: '$8,718',
        stock: 89,
        progress: 45,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop',
    },
    {
        name: 'USB-C Hub 7-in-1',
        sold: 187,
        revenue: '$6,543',
        stock: 312,
        progress: 60,
        image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=100&h=100&fit=crop',
    },
    {
        name: 'Desk Lamp Wireless',
        sold: 156,
        revenue: '$8,578',
        stock: 45,
        progress: 22,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
        name: 'Mechanical Keyboard',
        sold: 134,
        revenue: '$19,966',
        stock: 78,
        progress: 35,
        image: 'https://images.unsplash.com/photo-1511467688334-9b223aa9829b?w=100&h=100&fit=crop',
    },
];

const statusConfig: Record<
    string,
    {
        label: string;
        variant: 'default' | 'secondary' | 'destructive' | 'outline';
    }
> = {
    completed: { label: 'Completed', variant: 'secondary' },
    processing: { label: 'Processing', variant: 'default' },
    shipped: { label: 'Shipped', variant: 'outline' },
    pending: { label: 'Pending', variant: 'outline' },
};

const weeklyData = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 45 },
    { day: 'Wed', value: 78 },
    { day: 'Thu', value: 52 },
    { day: 'Fri', value: 90 },
    { day: 'Sat', value: 70 },
    { day: 'Sun', value: 85 },
];

export default function SellerDashboard() {
    return (
        <>
            <Head title="Seller Dashboard" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-xl font-bold text-foreground">
                            Seller Dashboard
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Overview of your store performance
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Select defaultValue="7d">
                            <SelectTrigger className="w-36 rounded-xl">
                                <Calendar size={14} className="mr-1.5" />
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="24h">Last 24h</SelectItem>
                                <SelectItem value="7d">
                                    Last 7 days
                                </SelectItem>
                                <SelectItem value="30d">
                                    Last 30 days
                                </SelectItem>
                                <SelectItem value="90d">
                                    Last 90 days
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="gap-2 rounded-xl">
                            <Package size={16} />
                            Add Product
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <Card key={stat.title} className="rounded-2xl">
                            <CardContent className="p-5">
                                <div className="flex items-center justify-between">
                                    <div
                                        className={`flex size-10 items-center justify-center rounded-xl ${stat.color}`}
                                    >
                                        <stat.icon className="size-5" />
                                    </div>
                                    <div
                                        className={`flex items-center gap-1 rounded-lg px-2 py-0.5 text-xs font-medium ${stat.positive ? 'bg-emerald-500/10 text-emerald-600' : 'bg-red-500/10 text-red-500'}`}
                                    >
                                        {stat.positive ? (
                                            <ArrowUpRight size={12} />
                                        ) : (
                                            <ArrowDownRight size={12} />
                                        )}
                                        {stat.change}
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p className="text-2xl font-bold text-foreground">
                                        {stat.value}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {stat.title}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Chart + Top Products */}
                <div className="grid gap-4 lg:grid-cols-3">
                    <Card className="rounded-2xl lg:col-span-2">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-base">
                                Revenue Overview
                            </CardTitle>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="size-8"
                            >
                                <Download size={14} />
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="flex h-56 items-end gap-3">
                                {weeklyData.map((item) => (
                                    <div
                                        key={item.day}
                                        className="flex flex-1 flex-col items-center gap-2"
                                    >
                                        <div className="relative w-full">
                                            <div
                                                className="w-full rounded-t-lg bg-primary/15 transition-all hover:bg-primary/25"
                                                style={{
                                                    height: `${item.value * 2}px`,
                                                }}
                                            />
                                        </div>
                                        <span className="text-xs text-muted-foreground">
                                            {item.day}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-base">
                                Top Products
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {topProducts.slice(0, 4).map((product) => (
                                <div
                                    key={product.name}
                                    className="space-y-2"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="size-8 rounded-lg object-cover"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="truncate text-sm font-medium">
                                                {product.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {product.sold} sold
                                            </p>
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {product.revenue}
                                        </span>
                                    </div>
                                    <Progress
                                        value={product.progress}
                                        className="h-1"
                                    />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Orders */}
                <Card className="rounded-2xl">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-base">
                            Recent Orders
                        </CardTitle>
                        <Button
                            variant="outline"
                            size="sm"
                            className="rounded-xl"
                        >
                            View All
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Order</TableHead>
                                    <TableHead>Customer</TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Product
                                    </TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Date
                                    </TableHead>
                                    <TableHead className="w-10" />
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentOrders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell className="font-medium">
                                            {order.id}
                                        </TableCell>
                                        <TableCell>
                                            <div>
                                                <p className="text-sm">
                                                    {order.customer}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {order.email}
                                                </p>
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden text-muted-foreground sm:table-cell">
                                            {order.product}
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {order.amount}
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    statusConfig[order.status]
                                                        .variant
                                                }
                                                className="text-xs"
                                            >
                                                {
                                                    statusConfig[order.status]
                                                        .label
                                                }
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden text-muted-foreground md:table-cell">
                                            {order.date}
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="size-8"
                                                    >
                                                        <MoreHorizontal size={14} />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>
                                                        View Details
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        Update Status
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        Contact Customer
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Inventory Status */}
                <Card className="rounded-2xl">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-base">
                            Inventory Status
                        </CardTitle>
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 rounded-xl"
                        >
                            <Download size={14} />
                            Export
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Product</TableHead>
                                    <TableHead>Sold</TableHead>
                                    <TableHead>Revenue</TableHead>
                                    <TableHead>Stock</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {topProducts.map((product) => (
                                    <TableRow key={product.name}>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="size-9 rounded-lg object-cover"
                                                />
                                                <span className="font-medium">
                                                    {product.name}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {product.sold}
                                        </TableCell>
                                        <TableCell>
                                            {product.revenue}
                                        </TableCell>
                                        <TableCell>
                                            <span
                                                className={
                                                    product.stock < 50
                                                        ? 'font-medium text-red-500'
                                                        : ''
                                                }
                                            >
                                                {product.stock}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    product.stock < 50
                                                        ? 'destructive'
                                                        : 'secondary'
                                                }
                                                className="text-xs"
                                            >
                                                {product.stock < 50
                                                    ? 'Low Stock'
                                                    : 'In Stock'}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

SellerDashboard.layout = {
    breadcrumbs: [{ title: 'Seller Dashboard', href: '/seller/dashboard' }],
};
