#!/bin/bash

# Project name
PROJECT_NAME="school-website"

# Check if the project folder exists
if [ ! -d "$PROJECT_NAME" ]; then
  echo "❌ Error: Project folder '$PROJECT_NAME' does not exist. Please create the project first."
  exit 1
fi

cd $PROJECT_NAME

# Create components directory
echo "📂 Creating 'components' directory..."
mkdir -p src/components

# Define components and their content
declare -A components
components=(
  ["Navbar"]="Navigation bar for the website"
  ["Footer"]="Footer for the website"
  ["Button"]="Reusable button component"
  ["Card"]="Card layout for displaying content"
  ["HeroSection"]="Hero section for landing pages"
  ["Modal"]="Popup modal component"
  ["Form"]="Reusable form component"
  ["Sidebar"]="Sidebar for navigation or menus"
  ["Carousel"]="Image slider component"
  ["Table"]="Table component for displaying data"
)

# Generate components
echo "📄 Generating components..."
for component in "${!components[@]}"; do
  cat <<EOT > src/components/${component}.tsx
import React from "react";

const ${component}: React.FC = () => {
  return (
    <div className="p-4 border rounded bg-gray-100">
      <h2 className="text-lg font-bold">${component}</h2>
      <p className="text-gray-600">${components[$component]}</p>
    </div>
  );
};

export default ${component};
EOT
  echo "✅ Created component: ${component}.tsx"
done

echo "✅ All components created successfully! Check 'src/components' directory for the generated files."
