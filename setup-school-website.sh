#!/bin/bash

# Project name
PROJECT_NAME="school-website"

echo "🚀 Creating a React project..."
npx create-react-app $PROJECT_NAME --template typescript
cd $PROJECT_NAME

echo "📦 Installing Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Configure Tailwind CSS
cat <<EOT > tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
EOT

echo "🎨 Adding Tailwind CSS to global styles..."
cat <<EOT > src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOT

# Create folder structure
echo "📂 Setting up folder structure..."
mkdir -p src/{components,layouts,pages,utils}

# Create example components
echo "✨ Creating example components..."
cat <<EOT > src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-lg font-bold">School Name</h1>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/academics" className="hover:underline">Academics</a></li>
        <li><a href="/admissions" className="hover:underline">Admissions</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
EOT

cat <<EOT > src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; 2024 School Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
EOT

cat <<EOT > src/layouts/MainLayout.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
EOT

# Add a sample Home page
cat <<EOT > src/pages/Home.tsx
import React from "react";
import MainLayout from "../layouts/MainLayout";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Our School</h1>
        <p className="text-lg mt-4 text-gray-600">A place where education meets excellence.</p>
      </div>
    </MainLayout>
  );
};

export default Home;
EOT

# Update App.tsx to use Home page
cat <<EOT > src/App.tsx
import React from "react";
import Home from "./pages/Home";

const App: React.FC = () => {
  return <Home />;
};

export default App;
EOT

# Finish
echo "✅ React + Tailwind CSS setup complete! Navigate to '$PROJECT_NAME' and run 'npm start' to see your project in action."
