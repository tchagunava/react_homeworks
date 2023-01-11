
import React from 'react'

const Parent = () => {
    const Users = [
        { name: 'john', lname: 'smith', age: 18, id: 1 },
        { name: 'tom', lname: 'hertz', age: 19, id: 2 },
        { name: 'ben', lname: 'bright', age: 20, id: 3 },
        { name: 'don', lname: 'leam', age: 21, id: 4 },
        { name: null, lname: null, age: null, id: null },

    ];
    return (
        <div>
            {Users.map((user) => {
                return <h1>{user.name}, {user.lname}, {user.age}, {user.id}</h1>
            })}
        </div>
    );
}

export default Parent;