import {Params} from "@/app/models/types";
import React from "react";
import IPost from "@/app/models/IPost";
import Post from "@/app/components/Post";

const PostPage = async ({params}: { params: Params }) => {

    const post:IPost = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id).then(res => res.json());


    return (
        <div>
            <Post post={post}/>
        </div>
    );
};

export default PostPage;