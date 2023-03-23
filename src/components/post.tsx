
import type {Post} from "../types/postTypes"

type PostProps = {
    post: Post
}

export default function PostCard({post} : PostProps) {
    const {id, title, body} = post
    return (
        <>
            <div className="w-full">
                <div className="sm:container-sm border-2 border-white rounded-sm w-1/2">
                    <div className="text-white border-b-2 border-white text-center">
                        <a href={id}>{title}</a>
                    </div>
                    <div className="text-white">
                        {body.substring(0,150)}
                    </div>
                </div>
            </div>
        </>
    )
}