// pages/[username].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (username) {
      const data = JSON.parse(localStorage.getItem('user'));

      if (!data) {
        // No user data found in localStorage, redirect to index page
        router.push('/');
      } else if (data.username !== username) {
        // User data found but username doesn't match, redirect to index page
        router.push('/');
      } else {
        // Username matches, set user data
        setUser(data);
      }
    }
  }, [username, router]);

  if (!username || !user) {
    return (
      <div>
        <p>Loading...</p>
        <p>If you are not redirected, <a href="/">click here</a> to go back to the index page.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      {/* Display user information */}
    </div>
  );
};

export default UserProfile;
  