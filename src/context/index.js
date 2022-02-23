import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = props => {
    const [userData, setUserData] = useState({});
    const [respositories, setRepositories] = useState({});
    const [followers, setFollowers] = useState({});
    const [following, setFollowing] = useState({});
    const [isOpened, setIsOpened] = useState(false);

    return (
        <context.Provider value={{
            userData,
            setUserData,
            respositories,
            setRepositories,
            followers,
            setFollowers,
            following,
            setFollowing,
            isOpened,
            setIsOpened
        }}>
            {props.children}
        </context.Provider>
    );
}