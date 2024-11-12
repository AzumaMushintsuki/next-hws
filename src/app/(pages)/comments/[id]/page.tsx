import {Params} from "@/app/models/types";
import React from "react";
import Comment from "@/app/components/Comment";
import IComment from "@/app/models/IComment";

const CommentPage = async ({params}: { params: Params }) => {

    const comment:IComment = await fetch('https://jsonplaceholder.typicode.com/comments/' + params.id).then(res => res.json());


    return (
        <div>
            <Comment comment={comment}/>
        </div>
    );
};

export default CommentPage;