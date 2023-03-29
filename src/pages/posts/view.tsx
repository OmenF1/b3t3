import { Input } from "postcss";
import { api } from "~/utils/api";
import { useRouter } from 'next/router'


export default function ViewSinglePost() {
    const router = useRouter()
    const {postId} = router.query
    if (postId?.length < 1) return <div>No Id Supplied</div>
    
    const {data: post, isLoading, isError} = api.post.single.useQuery({id: postId?.toString()})

    if (isLoading) return <div>Loading Post {postId.toString()}</div>
    if (isError) return <div>Error Loading Post</div>

    return (
        <>

            <div>
                {post?.body}
            </div>
        </>
    )

}
