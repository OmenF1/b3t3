import Link from "next/link"
import type {Post} from "../types/postTypes"

type PostProps = {
    post: Post
}

export default function PostCard({post} : PostProps) {
    const {id, title, body} = post
    return (
        <>
            <div className="flex flex-col text-white items-center w-full mb-5">
                <div className="sm:container-sm border-2 border-white rounded-md w-11/12 sm:w-3/4">
                    <div className="flex text-white border-b-2 border-white text-center h-10 bg-gray-900 justify-center items-center">
                        <Link href={{ pathname: '/posts/view', query: { postId: id } }}>
                            {title}
                        </Link>
                    </div>
                    <div className="text-white h-40 bg-gray-800">
                        {body.substring(0,150)}
                    </div>
                </div>
            </div>
        </>
    )
}