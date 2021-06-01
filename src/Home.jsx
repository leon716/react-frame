import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { test } from './Service';

const Home = () => {
    const [users, setUsers] = useState([]);
    const get = async () => {
        let json = await test();
        setUsers(json.users);
    }
    useEffect(() => {
        get();
    }, [])
    return (
        <div>
            <h2>
                홈
            </h2>
            <div>
            {users.map((user) => {
                return (
                <Link key={user.userId} to={"/detail/" + user.userId}>
                    <div className="flex-row">
                        <div style={{width:"30%"}}>{user.firstname}</div>
                        <div style={{width:"40%"}}>{user.lastname}</div>
                    </div>
                </Link>)
            })}
            </div>
        </div>
    );
};

export default Home;