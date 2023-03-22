import Head from "next/head";
import Link from "next/link";
import NewPost from "~/components/new";

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
                <NewPost />
            </main>
        </>
    )
};

export default CreatePost;