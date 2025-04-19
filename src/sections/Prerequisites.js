import React from 'react';
import { Section, Card } from '../styles/StyledComponents';
import MarkdownContent from '../components/MarkdownContent';

const prerequisitesMarkdown = `
# Prerequisites

Before diving into building full-stack applications, you'll need to set up your development environment. This section will guide you through installing and configuring all the necessary tools and services.

## Node.js and npm

Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a browser. npm (Node Package Manager) comes bundled with Node.js and is essential for managing JavaScript packages.

\`\`\`mac
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js (includes npm)
brew install node

# Verify installation
node --version
npm --version
\`\`\`

\`\`\`windows
# 1. Download the Windows installer from the Node.js website
# https://nodejs.org/en/download/

# 2. Run the installer and follow the installation wizard

# 3. Verify installation (in Command Prompt or PowerShell)
node --version
npm --version
\`\`\`

## Cursor IDE

Cursor is an AI-powered code editor that enhances developer productivity. It's built on top of VS Code and provides powerful AI assistance for writing, understanding, and debugging code.

\`\`\`mac
# 1. Download Cursor from the official website
# https://cursor.sh/

# 2. Open the downloaded .dmg file and drag Cursor to your Applications folder

# 3. Launch Cursor from your Applications folder
\`\`\`

\`\`\`windows
# 1. Download the Windows installer from the official website
# https://cursor.sh/

# 2. Run the installer and follow the installation wizard

# 3. Launch Cursor from the Start menu or desktop shortcut
\`\`\`

## Git and GitHub

Git is a version control system that helps you track changes in your code. GitHub is a platform for hosting and collaborating on Git repositories.

### Setting up Git

\`\`\`mac
# Install Git
brew install git

# Verify installation
git --version

# Configure Git with your name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
\`\`\`

\`\`\`windows
# 1. Download Git for Windows from the official website
# https://git-scm.com/download/win

# 2. Run the installer and follow the installation wizard
#    - Select default options, but make sure "Git from the command line and also from 3rd-party software" is selected
#    - For the default editor, choose your preferred editor (Notepad is fine for beginners)
#    - For the "Adjusting your PATH environment" step, select "Git from the command line and also from 3rd-party software"

# 3. Verify installation (in Command Prompt or PowerShell)
git --version

# 4. Configure Git with your name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
\`\`\`

### Creating a GitHub Account

1. Go to [GitHub's website](https://github.com/)
2. Click "Sign up" and follow the registration process
3. Verify your email address

### Connecting Git to GitHub via SSH (Recommended)

\`\`\`mac
# Generate an SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Start the SSH agent
eval "$(ssh-agent -s)"

# Add your SSH key to the agent
ssh-add ~/.ssh/id_ed25519

# Copy your public key to clipboard
pbcopy < ~/.ssh/id_ed25519.pub

# Now add this key to your GitHub account:
# 1. Go to GitHub → Settings → SSH and GPG keys
# 2. Click "New SSH key"
# 3. Paste your key and give it a title (e.g., "My Mac")
# 4. Click "Add SSH key"

# Verify the connection
ssh -T git@github.com
\`\`\`

\`\`\`windows
# Generate an SSH key (in Git Bash)
ssh-keygen -t ed25519 -C "your.email@example.com"

# Start the SSH agent (in Git Bash)
eval "$(ssh-agent -s)"

# Add your SSH key to the agent
ssh-add ~/.ssh/id_ed25519

# Copy your public key to clipboard
# Open the file in Notepad:
notepad ~/.ssh/id_ed25519.pub
# Then copy the contents

# Now add this key to your GitHub account:
# 1. Go to GitHub → Settings → SSH and GPG keys
# 2. Click "New SSH key"
# 3. Paste your key and give it a title (e.g., "My Windows PC")
# 4. Click "Add SSH key"

# Verify the connection (in Git Bash)
ssh -T git@github.com
\`\`\`

## MongoDB

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.

### Creating a MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Try Free" to create an account
3. Complete the registration process
4. Verify your email address

## Vercel

Vercel is a platform for deploying web applications with zero configuration.

### Creating a Vercel Account

1. Go to [Vercel's website](https://vercel.com/)
2. Click "Sign Up" and choose "Continue with GitHub" (recommended since you'll be deploying from GitHub)
3. Authorize Vercel to access your GitHub account
4. Complete the onboarding process

## Verification

Let's make sure everything is set up correctly:

\`\`\`mac
# Check Node.js and npm
node --version # Should show v16.x.x or higher
npm --version # Should show 8.x.x or higher

# Check Git
git --version # Should show 2.x.x or higher
\`\`\`

\`\`\`windows
# Check Node.js and npm
node --version # Should show v16.x.x or higher
npm --version # Should show 8.x.x or higher

# Check Git
git --version # Should show 2.x.x or higher
\`\`\`

Now that you have all the necessary tools and accounts set up, you're ready to start building your full-stack application!
`;

const Prerequisites = () => {
  return (
    <Section id="prerequisites">
      <Card>
        <MarkdownContent content={prerequisitesMarkdown} />
      </Card>
    </Section>
  );
};

export default Prerequisites; 