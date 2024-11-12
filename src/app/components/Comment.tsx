import React, {FC} from 'react';
import {CommentType} from "@/app/models/types";

const Comment:FC<CommentType> = ({comment}) => {

    return (
        <div>
            <h4>ID: {comment.id}</h4>
            <h1>{comment.name}</h1>
            <h3>{comment.body}</h3>
        </div>
    );
};

export default Comment;