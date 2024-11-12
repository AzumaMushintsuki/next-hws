import React, {FC} from 'react';
import {UserType} from "@/app/models/types";

const User:FC<UserType> = ({user}) => {

    return (
        <div>
            <h4>ID: {user.id}</h4>
            <h1>{user.name}</h1>
            <h3>Username is <b>{user.username}</b></h3>
        </div>
    );
};

export default User;