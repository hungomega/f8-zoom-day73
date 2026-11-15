import Link from "next/link";

export default function Nav() {
    return (
        <header className="w-full bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-600">Logo</h1>

                {/* Navigation */}
                <ul className="flex items-center gap-8 text-gray-700 font-medium">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-blue-600 transition-colors"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/about"
                            className="hover:text-blue-600 transition-colors"
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/products"
                            className="hover:text-blue-600 transition-colors"
                        >
                            Products
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/contact"
                            className="hover:text-blue-600 transition-colors"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
