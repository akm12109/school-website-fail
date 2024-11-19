#!/bin/bash

# Project name
PROJECT_NAME="school-website"

# Check if the project folder exists
if [ ! -d "$PROJECT_NAME" ]; then
  echo "❌ Error: Project folder '$PROJECT_NAME' does not exist. Please create the project first."
  exit 1
fi

cd $PROJECT_NAME

# Create pages directory
echo "📂 Creating 'pages' directory..."
mkdir -p src/pages

# Define pages and their content
declare -A pages
pages=(
  ["Home"]="Welcome to Our School"
  ["About"]="About Our School"
  ["Academics"]="Explore Our Academic Programs"
  ["Admissions"]="Join Our School"
  ["Facilities"]="Discover Our Facilities"
  ["Contact"]="Get in Touch with Us"
  ["Gallery"]="View Our Memories"
  ["Events"]="Upcoming School Events"
  ["News"]="Latest News and Announcements"
  ["Careers"]="Work With Us"
  ["PrincipalMessage"]="Message from the Principal"
  ["MissionVision"]="Our Mission and Vision"
  ["Sports"]="Our Sports Programs"
  ["Library"]="Explore Our Library"
  ["Clubs"]="Student Clubs and Activities"
  ["Transport"]="Transport Services Information"
  ["Alumni"]="Meet Our Alumni"
  ["FAQs"]="Frequently Asked Questions"
  ["ParentPortal"]="Parent Portal"
  ["Staff"]="Meet Our Staff"
  ["Achievements"]="Our Achievements"
  ["AcademicCalendar"]="Academic Calendar"
  ["Terms"]="Terms and Conditions"
  ["PrivacyPolicy"]="Privacy Policy"
)

# Generate pages
echo "📄 Generating pages..."
for page in "${!pages[@]}"; do
  cat <<EOT > src/pages/${page}.tsx
import React from "react";

const ${page}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 text-center">
      <h1 className="text-4xl font-bold text-blue-600">${pages[$page]}</h1>
      <p className="text-lg mt-4 text-gray-600">This is the ${page} page content.</p>
    </div>
  );
};

export default ${page};
EOT
  echo "✅ Created page: ${page}.tsx"
done

echo "✅ All pages created successfully! Check 'src/pages' directory for the generated files."
