import React from "react";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4 px-6">
        <h1 className="text-xl font-bold">School Website</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {children}
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 School Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
