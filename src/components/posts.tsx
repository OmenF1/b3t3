import { api } from "~/utils/api";
import PostCard from "./post";

export default function Posts() {
    const {data : posts, isLoading, isError} = api.post.all.useQuery();
    
    if (isLoading) return <div>Loading Posts</div>
    if (isError) return <div>Error Loading Posts</div>

    return (
        <>
            {posts.length ? posts.map(post => {
                return <PostCard key={post.id} post={post} />
            }) : 'Create Blog Post'}
        </>
    )
}