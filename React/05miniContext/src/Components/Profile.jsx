import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="text-center text-red-500 font-bold">Please Login</div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Welcome, {user.username}</h2>
        {/* Add more profile content here */}
      </div>
    </div>
  );
}

export default Profile;
