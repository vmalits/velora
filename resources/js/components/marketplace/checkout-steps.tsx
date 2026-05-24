import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface CheckoutStepsProps {
    steps: string[];
    currentStep: number;
    className?: string;
}

export function CheckoutSteps({
    steps,
    currentStep,
    className,
}: CheckoutStepsProps) {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            {steps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <div
                            className={cn(
                                'flex size-8 items-center justify-center rounded-full text-xs font-semibold transition-colors',
                                i < currentStep &&
                                    'bg-primary text-primary-foreground',
                                i === currentStep &&
                                    'bg-primary text-primary-foreground ring-4 ring-primary/20',
                                i > currentStep &&
                                    'bg-muted text-muted-foreground',
                            )}
                        >
                            {i < currentStep ? <Check size={14} /> : i + 1}
                        </div>
                        <span
                            className={cn(
                                'hidden text-sm font-medium sm:block',
                                i <= currentStep
                                    ? 'text-foreground'
                                    : 'text-muted-foreground',
                            )}
                        >
                            {step}
                        </span>
                    </div>
                    {i < steps.length - 1 && (
                        <div
                            className={cn(
                                'mx-2 h-px w-8 sm:w-12',
                                i < currentStep ? 'bg-primary' : 'bg-muted',
                            )}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
