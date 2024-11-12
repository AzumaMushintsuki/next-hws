import React from 'react';
import IUser from "@/app/models/IUser";
import User from "@/app/components/User";
import {Params} from "@/app/models/types";

const UserPage = async ({params}: { params: Params }) => {

    const user:IUser = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id).then(res => res.json());


    return (
        <div>
            <User user ={user}/>
        </div>
    );
};

export default UserPage;