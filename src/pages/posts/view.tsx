import { Input } from "postcss";
import { api } from "~/utils/api";
import { useRouter } from 'next/router'

/*
    I'm not sure if my method of opening these posts this way is correct, but I'll leave it as is for now.

*/
export default function ViewSinglePost() {
    const router = useRouter()
    const {postId} = router.query
    if (postId?.length < 1) return <div>No Id Supplied</div>
    
    const {data: post, isLoading, isError} = api.post.single.useQuery({id: postId?.toString()})

    if (isLoading) return <div>Loading Post</div>
    if (isError) return <div>Error Loading Post</div>

    return (
        <>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="self-center">
            <div className="mb-5">
                <h2 className="text-4xl">{post?.title}</h2>
                <h4 className="text-sm">{post?.createdOn.toDateString()}</h4>
            </div>
            <div>
                <p>{post?.body}</p>
            </div>
        </div>
      </main>
        </>
    )

}
