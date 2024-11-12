import React, {FC} from 'react';
import {PostsType} from "@/app/models/types";
import Link from "next/link";

const Posts:FC<PostsType> = ({posts}) => {
    return (
        <div>
            {
                posts.map(({id, title}) => (<div key={id}>
                    <Link href={'/posts/' + id}>{title}</Link>
                </div>))
            }
        </div>
    );
};

export default Posts;