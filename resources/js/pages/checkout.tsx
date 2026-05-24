import { Head } from '@inertiajs/react';
import { useState } from 'react';
import {
    CreditCard,
    Truck,
    MapPin,
    Check,
    ChevronRight,
    ChevronLeft,
    ShieldCheck,
    Package,
    Minus,
    Plus,
    X,
    Tag,
    Lock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CheckoutSteps } from '@/components/marketplace/checkout-steps';

const steps = ['Cart', 'Shipping', 'Payment', 'Review'];

const cartItems = [
    {
        id: '1',
        name: 'Wireless Noise-Cancelling Headphones Pro Max',
        price: 79.99,
        oldPrice: 149.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
        seller: 'AudioTech',
    },
    {
        id: '2',
        name: 'Smart Fitness Watch Series 5',
        price: 129.0,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
        seller: 'FitGear',
    },
];

const shippingMethods = [
    {
        id: 'standard',
        name: 'Standard Shipping',
        price: 0,
        estimate: '5-7 business days',
        description: 'Free on all orders',
    },
    {
        id: 'express',
        name: 'Express Shipping',
        price: 9.99,
        estimate: '2-3 business days',
        description: 'Fast & reliable',
    },
    {
        id: 'overnight',
        name: 'Next Day Delivery',
        price: 19.99,
        estimate: '1 business day',
        description: 'Order by 2PM',
    },
];

const paymentMethods = [
    { id: 'card', name: 'Credit / Debit Card', icon: CreditCard },
    { id: 'paypal', name: 'PayPal', icon: CreditCard },
];

export default function Checkout() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedShipping, setSelectedShipping] = useState('standard');
    const [selectedPayment, setSelectedPayment] = useState('card');

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );
    const shipping =
        shippingMethods.find((m) => m.id === selectedShipping)?.price ?? 0;
    const savings = cartItems.reduce(
        (sum, item) => sum + (item.oldPrice ? (item.oldPrice - item.price) * item.quantity : 0),
        0,
    );
    const total = subtotal + shipping;

    return (
        <>
            <Head title="Checkout — Velora" />

            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Steps Indicator */}
                <div className="mb-8 flex justify-center">
                    <CheckoutSteps
                        steps={steps}
                        currentStep={currentStep}
                    />
                </div>

                <div className="grid gap-8 lg:grid-cols-5">
                    {/* Main Content */}
                    <div className="space-y-6 lg:col-span-3">
                        {/* Step 0: Cart */}
                        {currentStep === 0 && (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-bold">
                                        Shopping Cart
                                    </h2>
                                    <Badge variant="secondary">
                                        {cartItems.length} items
                                    </Badge>
                                </div>
                                {cartItems.map((item) => (
                                    <Card
                                        key={item.id}
                                        className="rounded-2xl"
                                    >
                                        <CardContent className="flex gap-4 p-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="size-20 shrink-0 rounded-xl object-cover"
                                            />
                                            <div className="min-w-0 flex-1">
                                                <h3 className="line-clamp-2 text-sm font-medium">
                                                    {item.name}
                                                </h3>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    Seller: {item.seller}
                                                </p>
                                                <div className="mt-3 flex items-center justify-between">
                                                    <div className="flex items-center gap-1.5">
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="size-7 rounded-lg"
                                                        >
                                                            <Minus size={12} />
                                                        </Button>
                                                        <span className="w-6 text-center text-sm font-medium">
                                                            {item.quantity}
                                                        </span>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="size-7 rounded-lg"
                                                        >
                                                            <Plus size={12} />
                                                        </Button>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-sm font-semibold">
                                                            $
                                                            {item.price.toFixed(
                                                                2,
                                                            )}
                                                        </p>
                                                        {item.oldPrice && (
                                                            <p className="text-xs text-muted-foreground line-through">
                                                                $
                                                                {item.oldPrice.toFixed(
                                                                    2,
                                                                )}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="size-8 shrink-0 self-start text-muted-foreground"
                                            >
                                                <X size={14} />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}

                        {/* Step 1: Shipping */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg font-bold">
                                        Shipping Address
                                    </h2>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Where should we deliver your order?
                                    </p>
                                </div>
                                <Card className="rounded-2xl">
                                    <CardContent className="space-y-4 p-5">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">
                                                    First Name
                                                </Label>
                                                <Input
                                                    id="firstName"
                                                    defaultValue="John"
                                                    className="rounded-xl"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">
                                                    Last Name
                                                </Label>
                                                <Input
                                                    id="lastName"
                                                    defaultValue="Doe"
                                                    className="rounded-xl"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="address">
                                                Street Address
                                            </Label>
                                            <Input
                                                id="address"
                                                defaultValue="123 Main Street, Apt 4B"
                                                className="rounded-xl"
                                            />
                                        </div>
                                        <div className="grid gap-4 sm:grid-cols-3">
                                            <div className="space-y-2">
                                                <Label htmlFor="city">
                                                    City
                                                </Label>
                                                <Input
                                                    id="city"
                                                    defaultValue="New York"
                                                    className="rounded-xl"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="state">
                                                    State
                                                </Label>
                                                <Input
                                                    id="state"
                                                    defaultValue="NY"
                                                    className="rounded-xl"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="zip">
                                                    ZIP Code
                                                </Label>
                                                <Input
                                                    id="zip"
                                                    defaultValue="10001"
                                                    className="rounded-xl"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">
                                                Phone Number
                                            </Label>
                                            <Input
                                                id="phone"
                                                defaultValue="+1 (555) 123-4567"
                                                className="rounded-xl"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>

                                <div>
                                    <h2 className="text-lg font-bold">
                                        Shipping Method
                                    </h2>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Choose your delivery speed
                                    </p>
                                </div>
                                <RadioGroup
                                    value={selectedShipping}
                                    onValueChange={setSelectedShipping}
                                >
                                    <div className="space-y-3">
                                        {shippingMethods.map((method) => (
                                            <label
                                                key={method.id}
                                                className="flex cursor-pointer"
                                            >
                                                <Card
                                                    className={`w-full rounded-2xl transition-all ${
                                                        selectedShipping ===
                                                        method.id
                                                            ? 'border-primary ring-2 ring-primary/20'
                                                            : 'hover:border-muted-foreground/30'
                                                    }`}
                                                >
                                                    <CardContent className="flex items-center gap-4 p-4">
                                                        <RadioGroupItem
                                                            value={method.id}
                                                        />
                                                        <div className="flex-1">
                                                            <p className="text-sm font-medium">
                                                                {method.name}
                                                            </p>
                                                            <p className="text-xs text-muted-foreground">
                                                                {
                                                                    method.estimate
                                                                }{' '}
                                                                ·{' '}
                                                                {
                                                                    method.description
                                                                }
                                                            </p>
                                                        </div>
                                                        <span className="text-sm font-semibold">
                                                            {method.price === 0
                                                                ? 'Free'
                                                                : `$${method.price.toFixed(2)}`}
                                                        </span>
                                                    </CardContent>
                                                </Card>
                                            </label>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                        )}

                        {/* Step 2: Payment */}
                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg font-bold">
                                        Payment Method
                                    </h2>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        All transactions are secure and encrypted
                                    </p>
                                </div>
                                <RadioGroup
                                    value={selectedPayment}
                                    onValueChange={setSelectedPayment}
                                >
                                    <div className="space-y-3">
                                        {paymentMethods.map((method) => (
                                            <label
                                                key={method.id}
                                                className="flex cursor-pointer"
                                            >
                                                <Card
                                                    className={`w-full rounded-2xl transition-all ${
                                                        selectedPayment ===
                                                        method.id
                                                            ? 'border-primary ring-2 ring-primary/20'
                                                            : 'hover:border-muted-foreground/30'
                                                    }`}
                                                >
                                                    <CardContent className="flex items-center gap-4 p-4">
                                                        <RadioGroupItem
                                                            value={method.id}
                                                        />
                                                        <method.icon
                                                            size={20}
                                                            className="text-muted-foreground"
                                                        />
                                                        <span className="text-sm font-medium">
                                                            {method.name}
                                                        </span>
                                                    </CardContent>
                                                </Card>
                                            </label>
                                        ))}
                                    </div>
                                </RadioGroup>

                                <Card className="rounded-2xl">
                                    <CardContent className="space-y-4 p-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="cardNumber">
                                                Card Number
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="cardNumber"
                                                    placeholder="4242 4242 4242 4242"
                                                    className="rounded-xl pr-10"
                                                />
                                                <Lock
                                                    size={14}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="expiry">
                                                    Expiry Date
                                                </Label>
                                                <Input
                                                    id="expiry"
                                                    placeholder="MM/YY"
                                                    className="rounded-xl"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="cvc">
                                                    CVC
                                                </Label>
                                                <Input
                                                    id="cvc"
                                                    placeholder="123"
                                                    className="rounded-xl"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="cardName">
                                                Cardholder Name
                                            </Label>
                                            <Input
                                                id="cardName"
                                                placeholder="John Doe"
                                                className="rounded-xl"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Promo Code */}
                                <Card className="rounded-2xl">
                                    <CardContent className="p-5">
                                        <div className="flex items-center gap-3">
                                            <Tag
                                                size={16}
                                                className="text-muted-foreground"
                                            />
                                            <Input
                                                placeholder="Promo code"
                                                className="rounded-xl"
                                            />
                                            <Button
                                                variant="outline"
                                                className="shrink-0 rounded-xl"
                                            >
                                                Apply
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {/* Step 3: Review */}
                        {currentStep === 3 && (
                            <div className="space-y-5">
                                <div>
                                    <h2 className="text-lg font-bold">
                                        Order Review
                                    </h2>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Please review your order before placing
                                        it
                                    </p>
                                </div>

                                <Card className="rounded-2xl">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="flex items-center gap-2 text-sm">
                                            <MapPin size={14} /> Shipping
                                            Address
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            John Doe
                                            <br />
                                            123 Main Street, Apt 4B
                                            <br />
                                            New York, NY 10001
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-2xl">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="flex items-center gap-2 text-sm">
                                            <Truck size={14} /> Shipping Method
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            {
                                                shippingMethods.find(
                                                    (m) =>
                                                        m.id ===
                                                        selectedShipping,
                                                )?.name
                                            }
                                            {' · '}
                                            {
                                                shippingMethods.find(
                                                    (m) =>
                                                        m.id ===
                                                        selectedShipping,
                                                )?.estimate
                                            }
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-2xl">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="flex items-center gap-2 text-sm">
                                            <CreditCard size={14} /> Payment
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            {
                                                paymentMethods.find(
                                                    (m) =>
                                                        m.id ===
                                                        selectedPayment,
                                                )?.name
                                            }
                                            &middot; ****4242
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="rounded-2xl">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="flex items-center gap-2 text-sm">
                                            <Package size={14} /> Items (
                                            {cartItems.length})
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {cartItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center gap-3"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="size-12 rounded-lg object-cover"
                                                />
                                                <div className="min-w-0 flex-1">
                                                    <p className="truncate text-sm font-medium">
                                                        {item.name}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        Qty: {item.quantity}
                                                    </p>
                                                </div>
                                                <span className="text-sm font-medium">
                                                    $
                                                    {(
                                                        item.price *
                                                        item.quantity
                                                    ).toFixed(2)}
                                                </span>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {/* Navigation */}
                        <div className="flex items-center justify-between pt-4">
                            <Button
                                variant="outline"
                                className="gap-2 rounded-xl"
                                onClick={() =>
                                    setCurrentStep(
                                        Math.max(0, currentStep - 1),
                                    )
                                }
                                disabled={currentStep === 0}
                            >
                                <ChevronLeft size={16} />
                                Back
                            </Button>
                            <Button
                                className="gap-2 rounded-xl"
                                onClick={() => {
                                    if (currentStep < steps.length - 1) {
                                        setCurrentStep(currentStep + 1);
                                    }
                                }}
                            >
                                {currentStep === steps.length - 1 ? (
                                    <>
                                        <ShieldCheck size={16} />
                                        Place Order — ${total.toFixed(2)}
                                    </>
                                ) : (
                                    <>
                                        Continue
                                        <ChevronRight size={16} />
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-2">
                        <Card className="sticky top-24 rounded-2xl">
                            <CardHeader>
                                <CardTitle className="text-base">
                                    Order Summary
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="size-12 rounded-lg object-cover"
                                            />
                                            <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm">
                                                {item.name}
                                            </p>
                                        </div>
                                        <span className="text-sm font-medium">
                                            $
                                            {(
                                                item.price * item.quantity
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                                <Separator />
                                <div className="space-y-2.5 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                            Subtotal
                                        </span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    {savings > 0 && (
                                        <div className="flex justify-between">
                                            <span className="text-emerald-600">
                                                Savings
                                            </span>
                                            <span className="text-emerald-600">
                                                -${savings.toFixed(2)}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                            Shipping
                                        </span>
                                        <span>
                                            {shipping === 0
                                                ? 'Free'
                                                : `$${shipping.toFixed(2)}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                            Tax
                                        </span>
                                        <span>$0.00</span>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex justify-between font-semibold">
                                    <span>Total</span>
                                    <span className="text-lg">
                                        ${total.toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 rounded-xl bg-muted/50 p-3 text-xs text-muted-foreground">
                                    <ShieldCheck
                                        size={14}
                                        className="shrink-0"
                                    />
                                    <span>
                                        Your payment info is encrypted and
                                        secure
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
