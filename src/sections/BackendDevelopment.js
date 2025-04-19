import React from 'react';
import { Section, Card } from '../styles/StyledComponents';
import MarkdownContent from '../components/MarkdownContent';

const backendDevelopmentMarkdown = `
# Backend Development

Now that you've created your Technical Description and set up your initial project, it's time to develop the backend of your application. This section will guide you through using Cursor and Claude to efficiently build your backend.

## Step 1: Prepare Your Environment

Before starting backend development, ensure you have:

- Completed your Technical Description
- Created your React application
- Set up a GitHub repository (optional but recommended)

## Step 2: Open Your Project in Cursor

\`\`\`mac
# Navigate to your project directory
cd path/to/your/project

# Open the project in Cursor
cursor .
\`\`\`

\`\`\`windows
# Navigate to your project directory
cd path\\to\\your\\project

# Open the project in Cursor
cursor .
\`\`\`

## Step 3: Add Your Technical Description to README.md

1. Ensure you've copied your Technical Description markdown content
2. Open README.md in your project
3. Delete the default content
4. Paste your Technical Description
5. Save the file

This ensures that Cursor's AI can access your project specifications.

## Step 4: Create and Set Up Your Backend Directory

Open a terminal in Cursor and run the following commands:

\`\`\`mac
# Create a backend directory in the project root
mkdir backend

# Navigate to the backend directory
cd backend

# Initialize a Node.js package
npm init -y
\`\`\`

\`\`\`windows
# Create a backend directory in the project root
mkdir backend

# Navigate to the backend directory
cd backend

# Initialize a Node.js package
npm init -y
\`\`\`

## Step 5: Configure Cursor AI

1. Click on the Cursor Chat panel (usually in the sidebar)
2. Make sure the AI is set to "Agent" mode
3. Verify that the model is set to "Claude 3.7 Sonnet"

![Cursor Chat Settings](https://i.imgur.com/example-image.png)

## Step 6: Start Backend Development with Claude

Now, you're ready to start developing your backend with Claude's assistance. Here's the recommended approach:

1. **Ask Claude to read and understand your project**:
   \`\`\`
   Please read through my README.md file to understand the project. Let me know if you have any questions or need clarification before we start backend development.
   \`\`\`

2. **Ask clarifying questions** if Claude has any, or provide additional context as needed

3. **Request step-by-step backend development**:
   \`\`\`
   Based on the Technical Description in my README.md, please help me build the backend for this project. Let's go step by step, following the backend development steps I outlined. Start with setting up the initial file structure and necessary packages.
   \`\`\`

4. **Work through each step sequentially**:
   - Let Claude suggest the code for each step
   - Review the code before implementing it
   - Implement one step at a time
   - Test each component before moving to the next

## Step 7: Following the Development Process

As Claude helps you develop your backend, you should:

1. **Go slowly and understand each step** before moving on
2. **Ask questions** if something isn't clear
3. **Request explanations** of any code you don't understand
4. **Make adjustments** to match your specific requirements
5. **Test frequently** to catch issues early

## Step 8: Running and Testing Your Backend

After completing the development steps:

\`\`\`mac
# Make sure you're in the backend directory
cd backend

# Install all dependencies (if you haven't already)
npm install

# Start your development server
npm run dev
\`\`\`

\`\`\`windows
# Make sure you're in the backend directory
cd backend

# Install all dependencies (if you haven't already)
npm install

# Start your development server
npm run dev
\`\`\`

## Step 9: Debugging with Claude

If you encounter any errors or issues:

1. **Copy the error message** and return to Cursor Chat
2. **Ask Claude to help debug**:
   \`\`\`
   I'm encountering this error while running the backend:
   [PASTE ERROR HERE]
   Can you help me fix it?
   \`\`\`
3. **Follow Claude's debugging suggestions**
4. **Test again** after applying fixes

## Common Issues and Solutions

- **Missing dependencies**: Make sure all required packages are installed
- **Configuration errors**: Double-check your environment variables and configuration files
- **Connection issues**: Verify your MongoDB connection string and credentials
- **Authorization problems**: Ensure your API keys are correct and properly configured
- **Middleware errors**: Check the order of your middleware setup

## Best Practices for Working with Claude

1. **Be specific** with your requests
2. **Provide context** when asking questions
3. **Work incrementally** rather than trying to build everything at once
4. **Review code carefully** before implementing
5. **Test frequently**
6. **Ask for explanations** of anything you don't understand
7. **Remember that you're in control** - Claude is a tool to assist you, but you make the final decisions

Remember that developing a backend is an iterative process. Take your time, understand each component, and ensure everything works correctly before moving on to the next step.
`;

const BackendDevelopment = () => {
  return (
    <Section id="backend">
      <Card>
        <MarkdownContent content={backendDevelopmentMarkdown} />
      </Card>
    </Section>
  );
};

export default BackendDevelopment; 