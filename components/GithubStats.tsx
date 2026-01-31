"use client";

import { motion } from "framer-motion";
import { ActivityCalendar } from "react-activity-calendar";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Github } from "lucide-react";

const FALLBACK_CONTRIBUTIONS = [
    { date: "2025-01-26", count: 0, level: 0 },
    { date: "2026-01-31", count: 0, level: 0 }
];

export default function GithubStats() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [contributionData, setContributionData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Fetch real contribution data
        fetch('https://github-contributions-api.jogruber.de/v4/harshitpundir7?y=last')
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch');
                return response.json();
            })
            .then(data => {
                if (data?.contributions) {
                    setContributionData(data.contributions);
                } else {
                    setContributionData(FALLBACK_CONTRIBUTIONS);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching contributions, using fallback:", error);
                setContributionData(FALLBACK_CONTRIBUTIONS);
                setError(false); // We have fallback data, so not a UI error
                setLoading(false);
            });
    }, []);

    if (!mounted) return null;

    // Determine chart theme settings
    const chartTheme = {
        light: ['#f0f0f0', '#bbf7d0', '#86efac', '#4ade80', '#22c55e'],
        dark: ['#18181b', '#14532d', '#166534', '#15803d', '#16a34a'],
    };

    // Use resolvedTheme to handle 'system' preference
    const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'light';

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Stats Cards */}
                    <div className="col-span-1 lg:col-span-1 space-y-6">
                        <div className="space-y-1 mb-8">
                            <h2 className="text-3xl font-bold tracking-tight">GitHub Activity</h2>
                            <p className="text-muted-foreground">My open source contributions and coding streak.</p>
                        </div>

                        {/* Streak Stats Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-xl overflow-hidden border border-border bg-card shadow-sm"
                        >
                            <img
                                src={`https://github-readme-streak-stats.herokuapp.com/?user=harshitpundir7&theme=${currentTheme === 'dark' ? 'dark' : 'light'}&hide_border=true&background=${currentTheme === 'dark' ? '00000000' : '00000000'}&ring=22c55e&currStreakLabel=22c55e&fire=22c55e`}
                                alt="GitHub Streak"
                                className="w-full"
                            />
                        </motion.div>


                    </div>

                    {/* Main Contribution Graph */}
                    <div className="col-span-1 lg:col-span-2">
                        <Card className="h-full border-border bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Github className="w-5 h-5" />
                                    Contribution Graph
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center min-h-[300px] p-6 lg:p-12 overflow-hidden">
                                {loading ? (
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                                        <p className="text-muted-foreground animate-pulse">Loading contributions...</p>
                                    </div>
                                ) : error ? (
                                    <div className="text-center text-muted-foreground">
                                        <p>Failed to load contribution data.</p>
                                        <p className="text-sm">Please check back later.</p>
                                    </div>
                                ) : (
                                    <div className="w-full overflow-x-auto scrollbar-hide">
                                        <ActivityCalendar
                                            data={contributionData}
                                            theme={chartTheme}
                                            colorScheme={currentTheme as 'light' | 'dark'}
                                            blockSize={14}
                                            blockMargin={4}
                                            fontSize={14}
                                            style={{ margin: '0 auto', maxWidth: '100%' }}
                                        />
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
