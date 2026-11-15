import { Suspense } from "react";

async function PostsContent({ params }) {
    const { slug } = await params;

    console.log("Slug:", slug);

    return (
        <div>
            <h1>Posts</h1>
            <p>Slug: {slug.join("/")}</p>
        </div>
    );
}

export default function PostsPage({ params }) {
    return (
        <Suspense fallback={<p>Loading posts...</p>}>
            <PostsContent params={params} />
        </Suspense>
    );
}
