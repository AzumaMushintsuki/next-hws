import React, {FC} from 'react';
import Link from "next/link";
import {UsersType} from "@/app/models/types";


const Users: FC<UsersType> = ({users}) => {
    return (
        <div>
            {
                users.map(({id, name}) => (<div key={id}>
                <Link href={'/users/' + id}>{name}</Link>

                    </div>))
            }
        </div>
    );
};

export default Users;