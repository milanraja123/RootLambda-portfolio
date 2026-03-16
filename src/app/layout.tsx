import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
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
        <html lang="en" className={cn("font-sans", geist.variable)}>
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
            >
                <CustomCursor />
                {children}
            </body>
        </html>
    );
}
