import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SplashCursor from "@/components/SplashCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "RootLambda - AI-Native Digital Studio",
    description: "Build smarter. Grow faster. Think AI. We build AI-powered products, content systems, and automation tools for startups and businesses.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
            <body
                className={`${inter.variable} font-sans antialiased bg-bg-main text-text-primary`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange={false}
                >
                    <SplashCursor />
                    <CustomCursor />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
