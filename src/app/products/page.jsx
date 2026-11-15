import { Suspense } from "react";

async function ProductsContent({ searchParams }) {
    const { page } = await searchParams;

    return (
        <div>
            <h1>Trang hiện tại: {page || 1}</h1>
        </div>
    );
}

export default function ProductsPage({ searchParams }) {
    return (
        <Suspense fallback={<p>Loading products...</p>}>
            <ProductsContent searchParams={searchParams} />
        </Suspense>
    );
}
