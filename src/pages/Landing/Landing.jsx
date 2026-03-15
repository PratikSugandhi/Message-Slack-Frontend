import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PricingDialog } from '@/components/organisms/Pricing/PricingDialog';

export const Landing = () => {
    const navigate = useNavigate();
    const [showPricing, setShowPricing] = useState(false);

    const handleSigninClick = () => {
        navigate('/auth/signin');
    };

    const handleSignupClick = () => {
        navigate('/auth/signup');
    };

    return (
        <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 top-10 h-72 w-72 animate-pulse-slow rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="absolute -right-32 bottom-10 h-80 w-80 animate-pulse-slow rounded-full bg-sky-500/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e293b_0,_transparent_55%)]" />
            </div>

            <header className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-400 via-sky-400 to-blue-500 shadow-lg shadow-emerald-500/30 md:h-10 md:w-10">
                        <MessageCircle className="h-5 w-5 text-slate-950" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold tracking-tight text-slate-50 md:text-base">
                            Message Slack
                        </p>
                        <p className="hidden text-xs text-slate-300 md:block">
                            Real‑time workspaces. Effortless collaboration.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        className="hidden border border-slate-700/60 bg-slate-900/40 text-xs font-medium text-slate-200 shadow-sm transition hover:border-slate-500 hover:bg-slate-900/80 md:inline-flex"
                        onClick={handleSigninClick}
                    >
                        Sign in
                    </Button>
                    <Button
                        className="group relative overflow-hidden rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 md:px-5 md:py-2 md:text-sm"
                        onClick={handleSignupClick}
                    >
                        <span className="relative z-10 flex items-center gap-1.5">
                            Get started free
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                        <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-emerald-300 via-sky-300 to-emerald-400 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
                    </Button>
                </div>
            </header>

            <main className="relative z-10 flex flex-1 flex-col items-center px-6 pb-16 pt-4 md:px-12 md:pb-20 md:pt-10">
                <div className="mx-auto flex max-w-5xl flex-1 flex-col items-center gap-10 md:gap-16">
                    <section className="flex w-full flex-col items-center gap-8 text-center md:flex-row md:items-start md:gap-10 md:text-left motion-safe:animate-fade-in-up">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-[11px] font-medium text-emerald-200 shadow-sm backdrop-blur md:text-xs">
                                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_theme(colors.emerald.400)]" />
                                Live, shared workspaces • Built for teams
                            </div>

                            <div className="space-y-3 md:space-y-4">
                                <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl">
                                    Your conversations,
                                    <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-emerald-200 bg-clip-text text-transparent">
                                        {' '}
                                        organized into powerful workspaces.
                                    </span>
                                </h1>
                                <p className="max-w-xl text-balance text-sm text-slate-300 sm:text-base">
                                    Message Slack keeps every discussion, decision, and document in one place.
                                    Jump into focused channels, share ideas in real time, and bring your team together
                                    without the noise.
                                </p>
                            </div>

                            <div className="flex flex-col items-center gap-3 sm:flex-row md:items-stretch">
                                <Button
                                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 sm:w-auto"
                                    onClick={handleSignupClick}
                                >
                                    Start a workspace
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/40 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900 sm:w-auto"
                                    onClick={handleSigninClick}
                                >
                                    I already have an account
                                </Button>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-slate-400 sm:justify-start sm:text-xs">
                                <div className="inline-flex items-center gap-1.5">
                                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                                    <span>Secure, authenticated workspaces</span>
                                </div>
                                <div className="inline-flex items-center gap-1.5">
                                    <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                                    <span>Real‑time channels & rich messages</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <Card className="relative overflow-hidden border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-emerald-500/20 backdrop-blur motion-safe:animate-fade-in-up [animation-delay:120ms]">
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.2)_0,_transparent_55%)]" />
                                <CardContent className="relative space-y-3 p-4 sm:space-y-4 sm:p-6">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-emerald-400 to-sky-400 text-slate-950 shadow-md">
                                                <MessageCircle className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-slate-100">
                                                    #product-launch
                                                </p>
                                                <p className="text-[11px] text-slate-400">Workspace • Message Slack</p>
                                            </div>
                                        </div>
                                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                                            Live
                                        </span>
                                    </div>

                                    <div className="space-y-2 rounded-xl bg-slate-900/70 p-3 text-xs text-slate-200">
                                        <div className="flex items-start gap-2">
                                            <div className="mt-0.5 h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400" />
                                            <div className="space-y-0.5">
                                                <p className="font-semibold">Design squad</p>
                                                <p className="text-[11px] text-slate-300">
                                                    Finalizing the message composer. Reactions, threads, and rich
                                                    formatting are all in for this sprint.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="mt-0.5 h-6 w-6 rounded-full bg-slate-700" />
                                            <div className="space-y-0.5">
                                                <p className="font-semibold">Eng team</p>
                                                <p className="text-[11px] text-slate-300">
                                                    Backend is wired to real‑time channels. Message history stays in
                                                    sync across every workspace member.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-xs text-slate-300">
                                        <div className="space-y-0.5">
                                            <p className="font-medium text-slate-100">Why Message Slack?</p>
                                            <p className="text-[11px] text-slate-400">
                                                Purpose‑built for structured conversations, Message Slack keeps your
                                                channels, members, and workspaces in perfect sync.
                                            </p>
                                        </div>
                                        <div className="hidden flex-col items-end gap-1 text-[10px] text-emerald-300 sm:flex">
                                            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5">
                                                Channels • Workspaces
                                            </span>
                                            <span className="rounded-full bg-sky-500/10 px-2 py-0.5">
                                                Real‑time messaging
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="mt-4 w-full max-w-4xl space-y-4 text-center motion-safe:animate-fade-in-up [animation-delay:220ms]">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                            Simple pricing for every team
                        </p>
                        <p className="text-sm text-slate-300">
                            Start for free, then scale Message Slack with predictable plans when your workspace grows.
                        </p>
                        <Button
                            variant="outline"
                            className="inline-flex items-center gap-2 rounded-full border-emerald-500/60 bg-slate-950/60 px-5 py-2 text-xs font-semibold text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.25)] transition hover:border-emerald-400 hover:bg-slate-950"
                            onClick={() => setShowPricing(true)}
                        >
                            View pricing
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                    </section>
                </div>
            </main>

            <PricingDialog open={showPricing} onOpenChange={setShowPricing} />
        </div>
    );
};

