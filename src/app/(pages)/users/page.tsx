import React from 'react';
import Users from "@/app/components/Users";
import IUser from "@/app/models/IUser";

const Page = async () => {

    const users:IUser[] = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());


    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default Page;