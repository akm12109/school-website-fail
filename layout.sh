#!/bin/bash

# Project name
PROJECT_NAME="school-website"

# Check if the project folder exists
if [ ! -d "$PROJECT_NAME" ]; then
  echo "❌ Error: Project folder '$PROJECT_NAME' does not exist. Please create the project first."
  exit 1
fi

cd $PROJECT_NAME

# Create layouts directory
echo "📂 Creating 'layouts' directory..."
mkdir -p src/layouts

# Define layouts and their content
declare -A layouts
layouts=(
  ["MainLayout"]="A basic layout for general pages"
  ["DashboardLayout"]="Layout for the admin or teacher dashboard"
  ["AuthLayout"]="Layout for authentication pages (login/signup)"
  ["AdminLayout"]="Layout with sidebar and navigation for admin panel"
  ["LandingLayout"]="Layout for the landing page"
)

# Generate layouts
echo "📄 Generating layouts..."
for layout in "${!layouts[@]}"; do
  cat <<EOT > src/layouts/${layout}.tsx
import React from "react";

const ${layout}: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

export default ${layout};
EOT
  echo "✅ Created layout: ${layout}.tsx"
done

echo "✅ All layouts created successfully! Check 'src/layouts' directory for the generated files."
