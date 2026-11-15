export default async function ProductsPage({ searchParams }) {
    const { page } = await searchParams;

    return (
        <div>
            <h1>Trang hiện tại: {page || 1}</h1>
        </div>
    );
}
