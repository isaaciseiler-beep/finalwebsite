import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";


const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });


export const metadata: Metadata = {
title: "Your Name — Portfolio",
description: "Cutting‑edge portfolio with left nav, gradients, and motion.",
};


export default function RootLayout({ children }: { children: React.ReactNode }){
return (
<html lang="en" className={`${jakarta.variable} ${sora.variable}`}>
<body className="app-shell">
<GradientBackdrop />
<aside className="sidebar"><Sidebar/></aside>
<main className="relative">{children}</main>
</body>
</html>
);
}
