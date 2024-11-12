import React from 'react';
import IPost from "@/app/models/IPost";
import Posts from "@/app/components/Posts";

const Page = async () => {

    const posts:IPost[] = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());


    return (
        <div>
            <Posts posts={posts}/>
        </div>
    );
};

export default Page;