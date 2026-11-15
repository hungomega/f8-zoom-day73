import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav.jsx";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Day 73 - Next.js",
    description: "Learning Next.js App Router",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="vi"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Nav />
                <main>{children}</main>
            </body>
        </html>
    );
}
