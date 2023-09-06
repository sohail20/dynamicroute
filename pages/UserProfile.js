// pages/UserProfile.js (or components/UserProfile.js)
import { useEffect, useState } from 'react';

const UserProfile = ({ username }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user"))
        if (data && data !== null)
            setUser(data)
    }, [username]);

    if (!user) {
        return <div>Loading...</div>;
    }

    // Render user profile data here
    return (
        <div>
            {/* Display user profile information */}
            <p>Username: {user.username}</p>
            {/* Add more profile fields as needed */}
        </div>
    );
};

export default UserProfile;
