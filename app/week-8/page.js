'use client';

import React, { useState } from 'react';
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      setError(null); // Clear any existing errors
      await gitHubSignIn();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      setError(null); // Clear any existing errors
      await firebaseSignOut();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div>
        <h1>Week-8</h1>
        {!user && (
          <div className="text-center">
            <button onClick={handleSignIn} className="bg-blue-500 text-white px-4 py-2 rounded">
              Sign in with GitHub
            </button>
            {error && (
              <p className="text-red-500 mt-4">
                Error: {error}
              </p>
            )}
          </div>
        )}
        {user && (
          <div className="text-center">
            <p>
              You are signed in as <strong>{user.displayName}</strong>
            </p>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded mt-4">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
