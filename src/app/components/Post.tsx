import React, {FC} from 'react';
import {PostType} from "@/app/models/types";

const Post:FC<PostType> = ({post}) => {

    return (
        <div>
            <h4>ID: {post.id}</h4>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
        </div>
    );
};

export default Post;