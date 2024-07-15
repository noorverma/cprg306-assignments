'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      setError(null); 
      await gitHubSignIn();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      setError(null); 
      await firebaseSignOut();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
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
            <p>You are signed in as <strong>{user.displayName}</strong></p>
            <p>Welcome, {user.displayName} ({user.email})</p>
            <Link href="/week-8/shopping-list" legacyBehavior>
              <a className="bg-blue-500 text-white px-4 py-2 rounded mx-3">
               Shopping List
              </a>
            </Link>
            <button onClick={handleSignOut} className="bg-red-500 text-white px-6 py-2 rounded">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
