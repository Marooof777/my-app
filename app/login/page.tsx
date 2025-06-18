'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [secureWord, setSecureWord] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSecureWord('');

    try {
      const res = await fetch('/api/getSecureWord', {
        method: 'POST',
        body: JSON.stringify({ username }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      setSecureWord(data.secureWord);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h1 className="text-xl font-bold text-gray-700 mb-4 text-center">Login</h1>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 mb-3 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Get Secure Word'}
        </button>

        {secureWord && (
          <div className="mt-4 p-3 border border-green-500 bg-green-50 rounded">
            Secure Word: <span className="font-mono">{secureWord}</span>
          </div>
        )}

        {error && (
          <p className="mt-3 text-red-600 text-sm text-center">{error}</p>
        )}
      </form>
    </div>
  );
}
