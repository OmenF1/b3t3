import { useState } from "react";
import { api } from "~/utils/api";

import { postInput } from "~/types/postTypes";

export default function NewPost() {
    
    const [postTitle, setTitle] = useState('')
    const [postBody, setBody] = useState('')
    const {mutate} = api.post.create.useMutation()

    return (
        <>
            <form className="w-3/4 object-center text-black"
                onSubmit={(e) => {

                    e.preventDefault()
                    const result = postInput.safeParse({title: postTitle, body: postBody})
                    
                    if (!result.success)
                    {
                        console.error("not valid");
                        return;
                    }

                    mutate({title: postTitle, body: postBody})

                }}
            >
                <div className="mb-6">
                    <input className="w-full sm:w-10/12 shadow-inner rounded-1 p-2 flex-1 bg-white" id="title" type="text" placeholder="Title Of Post" 
                        value={postTitle}
                        onChange={(e) =>{
                            setTitle(e.target.value)
                        }}
                    />
                </div>
                <div className="mb-3">
                    <textarea id="body"  rows={12} className="w-full sm:w-10/12 shadow-inner rounded-1 p-2 flex-1 h-auto" placeholder="Post Body..." required
                        value={postBody}
                        onChange={(e) => {
                            setBody(e.target.value)
                        }}
                    ></textarea>
                </div>
                <div>
                    <input type="checkbox" name="commentsAllow"></input>
                    <label >Allow Comments</label>
                </div>
                <div>
                    <button className="shadow p-2 rounded-5 bg-blue-400" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}