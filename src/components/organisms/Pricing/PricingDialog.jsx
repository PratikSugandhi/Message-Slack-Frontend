import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon, SparklesIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
    {
        id: 'free',
        name: 'Free',
        price: '₹0',
        cadence: 'Forever',
        amount: 0,
        highlight: 'Perfect to start small',
        features: [
            'Single workspace',
            'Up to 5 members',
            'Standard channels & DMs',
            '7 days of message history',
        ],
    },
    {
        id: 'basic',
        name: 'Basic',
        price: '₹200',
        cadence: 'per month',
        amount: 200,
        highlight: 'For growing teams',
        featured: true,
        features: [
            'Unlimited workspaces',
            'Up to 25 members per workspace',
            'Full message history',
            'Priority channel performance',
        ],
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '₹500',
        cadence: 'per month',
        amount: 500,
        highlight: 'Best for fast‑moving orgs',
        features: [
            'Unlimited members & workspaces',
            'Advanced access controls',
            'Guaranteed real‑time sync',
            'Early access to new features',
        ],
    },
];

export const PricingDialog = ({ open, onOpenChange }) => {
    const navigate = useNavigate();

    const handleSelectPlan = (plan) => {
        navigate(`/makepayment?plan=${encodeURIComponent(plan.id)}&amount=${plan.amount}`);
        if (onOpenChange) onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl border-slate-800 bg-slate-950/95 text-slate-50 shadow-2xl backdrop-blur">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-lg font-semibold text-slate-50">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-tr from-emerald-400 to-sky-400 text-slate-950">
                            <SparklesIcon className="h-4 w-4" />
                        </span>
                        Choose a Message Slack plan
                    </DialogTitle>
                    <DialogDescription className="text-xs text-slate-300">
                        Pick a plan that fits your team. You will be redirected to the payment page you already set up
                        for Razorpay.
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {plans.map((plan) => (
                        <Card
                            key={plan.id}
                            className={`group flex flex-col border-slate-800 bg-slate-900/60 p-2 text-slate-50 transition hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/20 ${
                                plan.featured ? 'ring-2 ring-emerald-500/70' : ''
                            }`}
                        >
                            <CardHeader className="space-y-2">
                                <div className="flex items-center justify-between gap-2">
                                    <CardTitle className="text-sm font-semibold text-slate-50">
                                        {plan.name}
                                    </CardTitle>
                                </div>
                                <p className="text-xs text-emerald-200">{plan.highlight}</p>
                            </CardHeader>
                            <CardContent className="flex flex-1 flex-col justify-between gap-4">
                                <div className="space-y-1">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-xl font-semibold">{plan.price}</span>
                                        <span className="text-[11px] text-slate-400">{plan.cadence}</span>
                                    </div>
                                    <div className="mt-2 space-y-1.5 text-[11px] text-slate-300">
                                        {plan.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-1.5">
                                                <CheckIcon className="h-3.5 w-3.5 text-emerald-400" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Button
                                    className="mt-3 w-full rounded-full bg-emerald-500 text-xs font-semibold text-slate-950 shadow-emerald-500/30 transition group-hover:bg-emerald-400"
                                    onClick={() => handleSelectPlan(plan)}
                                    disabled={plan.amount === 0}
                                >
                                    {plan.amount === 0 ? 'Included' : `Choose ${plan.name}`}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};

