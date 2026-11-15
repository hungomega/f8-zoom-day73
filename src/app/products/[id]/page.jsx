import { Suspense } from "react";

async function ProductDetailContent({ params }) {
    const { id } = await params;

    return (
        <div>
            <h1>Chi tiết sản phẩm có mã: {id}</h1>
        </div>
    );
}

export default function ProductDetailPage({ params }) {
    return (
        <Suspense fallback={<p>Loading product...</p>}>
            <ProductDetailContent params={params} />
        </Suspense>
    );
}
