export default async function PostsPage({ params }) {
    const { slug } = await params;

    console.log("Slug:", slug);

    return (
        <div>
            <h1>Posts</h1>
        </div>
    );
}
