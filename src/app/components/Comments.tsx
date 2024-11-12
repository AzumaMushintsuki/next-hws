import React, {FC} from 'react';
import Link from "next/link";
import {CommentsType} from "@/app/models/types";


const Comments: FC<CommentsType> = ({comments}) => {
    return (
        <div>
            {
                comments.map(({id, body}) => (<div key={id}>
                <Link href={'/users/' + id}>{body}</Link>

                    </div>))
            }
        </div>
    );
};

export default Comments;