import React from 'react';
import { Section, Card } from '../styles/StyledComponents';
import MarkdownContent from '../components/MarkdownContent';

const gettingStartedMarkdown = `
# Getting Started

Now that you have all the necessary tools installed, let's get started building our full-stack application. This section will guide you through creating a new React application and setting up MongoDB.

## Creating a New React Project

Let's start by creating a new React application using Create React App:

\`\`\`mac
# Navigate to your projects directory
cd ~/Documents/projects

# Create a new React application
npx create-react-app my-fullstack-app

# Navigate into the project directory
cd my-fullstack-app

# Start the development server to test your new app
npm start
\`\`\`

\`\`\`windows
# Navigate to your projects directory
cd C:\\Users\\YourUsername\\Documents\\projects

# Create a new React application
npx create-react-app my-fullstack-app

# Navigate into the project directory
cd my-fullstack-app

# Start the development server to test your new app
npm start
\`\`\`

This will create a new React application and open it in your browser at http://localhost:3000.

## Project Structure

The initial project structure created by Create React App looks like this:

\`\`\`
my-fullstack-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── serviceWorker.js
├── .gitignore
├── package.json
└── README.md
\`\`\`

## Setting Up MongoDB

Now, let's set up a MongoDB cluster to store our application data:

### Creating a MongoDB Atlas Cluster

1. Log in to your MongoDB Atlas account (created in the Prerequisites section)
2. Click "Build a Database"
3. Choose the "Free" shared cluster option
4. Select your preferred cloud provider (AWS, Google Cloud, or Azure) and region (choose one close to your location)
5. Click "Create Cluster" (creation can take a few minutes)

### Setting Up Database Access

1. Once your cluster is created, click "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Create a username and password (store these securely, you'll need them later)
4. Set privileges to "Read and write to any database"
5. Click "Add User"

### Configuring Network Access

1. Click "Network Access" in the left sidebar
2. Click "Add IP Address" 
3. For development purposes, you can select "Allow access from anywhere" (less secure but easier for development)
4. Click "Confirm"

### Getting Your MongoDB Connection String

1. Go back to the "Database" section
2. Click "Connect" on your cluster
3. Select "Connect your application"
4. Copy the connection string provided
5. Replace the placeholder in the string with your actual password
6. Save this connection string securely - you'll need it to connect your application to MongoDB

The connection string should look something like this:
\`\`\`
mongodb+srv://username:password@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
\`\`\`

You now have a React application set up and a MongoDB cluster ready to store your data! In the next sections, we'll look at connecting your React application to your MongoDB database and building out your application's features.
`;

const GettingStarted = () => {
  return (
    <Section id="setup">
      <Card>
        <MarkdownContent content={gettingStartedMarkdown} />
      </Card>
    </Section>
  );
};

export default GettingStarted; 