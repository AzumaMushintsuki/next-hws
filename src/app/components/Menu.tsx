import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <header>
            <ul>
                <li><Link href={`/`}>Home</Link></li>
                <li><Link href={`/users`}>All users</Link></li>
                <li><Link href={`/posts`}>All posts</Link></li>
                <li><Link href={`/comments`}>All comments</Link></li>
            </ul>
        </header>
    );
};

export default Menu;