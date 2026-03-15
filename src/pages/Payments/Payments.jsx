import { RenderRazorpayPopup } from '@/components/molecules/RenderRazorpayPopup/RenderRazorpayPopup';
import { useCreateOrder } from '@/hooks/apis/payments/useCreateOrder';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckIcon } from 'lucide-react';

export const Payments = () => {
    const [amount, setAmount] = useState('');
    const [orderResponse, setOrderResponse] = useState(null);
    const { createOrderMutation, isPending, error, isSuccess } = useCreateOrder();
    const location = useLocation();

    async function handleFormSubmit(e) {
        e.preventDefault();
        const response = await createOrderMutation(amount*100);
        console.log("order response", response);
        setOrderResponse(response);
    }

    const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
    const selectedPlan = params.get('plan') || 'custom';
    const amountFromQuery = params.get('amount');

    const planDetails = useMemo(() => {
        const base = {
            title: 'Custom amount',
            subtitle: 'Enter the amount you want to pay.',
            perks: [],
        };
        if (selectedPlan === 'basic') {
            return {
                title: 'Basic plan',
                subtitle: '₹200 / month • For growing teams',
                perks: [
                    'Unlimited workspaces',
                    'Up to 25 members per workspace',
                    'Full message history',
                    'Priority channel performance',
                ],
            };
        }
        if (selectedPlan === 'pro') {
            return {
                title: 'Pro plan',
                subtitle: '₹500 / month • Best for fast‑moving orgs',
                perks: [
                    'Unlimited members & workspaces',
                    'Advanced access controls',
                    'Guaranteed real‑time sync',
                    'Early access to new features',
                ],
            };
        }
        if (selectedPlan === 'free') {
            return {
                title: 'Free plan',
                subtitle: '₹0 • Perfect to start small',
                perks: [
                    'Single workspace',
                    'Up to 5 members',
                    'Standard channels & DMs',
                    '7 days of message history',
                ],
            };
        }
        return base;
    }, [selectedPlan]);

    useEffect(() => {
        if (amountFromQuery) {
            setAmount(amountFromQuery);
            (async () => {
                const response = await createOrderMutation(amountFromQuery * 100);
                console.log("order response", response);
                setOrderResponse(response);
            })();
        }
    }, [amountFromQuery]);

    const isFixedAmount = Boolean(amountFromQuery);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
            <Card className="w-full max-w-3xl border border-slate-800/80 bg-slate-900/90 text-slate-50 shadow-2xl">
                <CardHeader className="border-b border-slate-800/80 pb-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                        Checkout
                    </p>
                    <CardTitle className="mt-1 text-xl font-semibold">
                        {planDetails.title}
                    </CardTitle>
                    <p className="text-xs text-slate-300">
                        {planDetails.subtitle}
                    </p>
                </CardHeader>
                <CardContent className="flex flex-col gap-6 pt-4 md:flex-row">
                    <div className="flex-1 space-y-3">
                        <form onSubmit={handleFormSubmit} className="space-y-3">
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-slate-200">
                                    Amount (₹)
                                </label>
                                <Input
                                    type="number"
                                    name="amount"
                                    value={amount}
                                    onChange={(e) => !isFixedAmount && setAmount(e.target.value)}
                                    className="bg-slate-950/60 text-slate-50 border-slate-700 focus-visible:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-80"
                                    min={0}
                                    disabled={isFixedAmount}
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full rounded-full bg-emerald-500 text-sm font-semibold text-slate-950 shadow-emerald-500/40 hover:bg-emerald-400"
                                disabled={!amount || isPending}
                            >
                                {isPending ? 'Processing…' : 'Pay securely'}
                            </Button>
                            {error && (
                                <p className="text-xs text-red-400">
                                    Something went wrong while creating the order.
                                </p>
                            )}
                        </form>
                        {isSuccess && (
                            <RenderRazorpayPopup
                                amount={amount * 100}
                                orderId={orderResponse?.id}
                                keyId={import.meta.env.VITE_RAZORPAY_KEY_ID}
                                currency={"INR"}
                            />
                        )}
                    </div>
                    <div className="flex-1 rounded-lg border border-slate-800 bg-slate-950/70 p-4 text-xs">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                            What you get
                        </p>
                        <ul className="space-y-2 text-slate-200">
                            {planDetails.perks.map((perk) => (
                                <li key={perk} className="flex items-start gap-2">
                                    <CheckIcon className="mt-[2px] h-3.5 w-3.5 text-emerald-400" />
                                    <span>{perk}</span>
                                </li>
                            ))}
                            {planDetails.perks.length === 0 && (
                                <li className="text-slate-400">
                                    Enter an amount to continue to Razorpay.
                                </li>
                            )}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}