import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SuccessPage() {
  const { state } = useLocation();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-green-600">Form Submitted Successfully!</h2>
      <div className="space-y-2">
        {Object.entries(state).map(([key, value]) => (
          <p key={key}>
            <strong className="capitalize">{key}:</strong> {value}
          </p>
        ))}
      </div>
    </div>
  );
}
