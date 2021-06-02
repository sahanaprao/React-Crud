import React from 'react';

import Card from '../../UI/Card/Card';

const UserList = (props) => {

    return (
        <Card>
            { props.userList.map(user => {
                return ( 
                    <div key={user.id}>
                        <div>{ `${user.name} (${user.age} years old)`}</div>
                    </div>
                )
            }) }
        </Card>
    )
}

export default UserList;