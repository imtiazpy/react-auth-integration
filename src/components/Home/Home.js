import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>Home Page</h2>
            <h5>{user.displayName}</h5>
        </div>
    );
};

export default Home;