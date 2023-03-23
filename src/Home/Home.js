import React from 'react';

import {auth} from '../firebase';

const Home = ({user}) => {
    return (
        <div>
            <h1>Hello, <span></span>{user.displayName}</h1>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>

    )
}

export default Home;