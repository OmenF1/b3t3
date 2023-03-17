import Head from "next/head";
import Link from "next/link";

//  TODO:
//  Move that main so that is part of the base template.
const CreatePost = () => {
    return (
        <>
            <Head>
                <title>B3T3 - New post</title>
                <meta name="description" content="Create a new Blog post" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white items-center">
                <form className="w-3/4 object-center">
                    <div className="mb-6">
                        <input className="w-full sm:w-10/12 shadow-inner rounded-1 p-2 flex-1 bg-white" id="title" type="text" placeholder="Title Of Post" />
                    </div>
                    <div className="mb-3">
                        <textarea id="comment"  rows={12} className="w-full sm:w-10/12 shadow-inner rounded-1 p-2 flex-1 h-auto" placeholder="Post Body..." required></textarea>
                    </div>
                    <div>
                        <input type="checkbox" name="commentsAllow"></input>
                        <label for="commentsAllow">Allow Comments</label>
                    </div>
                    <div>
                        <button className="shadow p-2 rounded-5 bg-blue-400" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </main>
        </>
    )
};

export default CreatePost;