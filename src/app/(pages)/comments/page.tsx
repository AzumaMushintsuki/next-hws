import React from 'react';
import IComment from "@/app/models/IComment";
import Comments from "@/app/components/Comments";


const Page = async () => {

    const comments:IComment[] = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());


    return (
        <div>
            <Comments comments={comments}/>
        </div>
    );
};

export default Page;