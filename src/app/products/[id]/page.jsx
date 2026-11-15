export default async function ProductDetailPage({ params }) {
    const { id } = await params;

    return (
        <div>
            <h1>Chi tiết sản phẩm có mã: {id}</h1>
        </div>
    );
}
