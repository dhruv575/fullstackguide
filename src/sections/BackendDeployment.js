import React from 'react';
import { Section, Card } from '../styles/StyledComponents';
import MarkdownContent from '../components/MarkdownContent';

const backendDeploymentMarkdown = `
# Backend Deployment

After developing your backend application, the next step is deploying it to make it accessible from anywhere. This section covers deploying your Node.js backend to Vercel.

## Step 1: Prepare Your Backend for Deployment

Before deploying, we need to ensure our backend is configured correctly for production. You can ask Cursor to make these changes for you:

1. **Set up CORS to allow frontend access**:

Ask Cursor to update your main server file (usually \`index.js\` or \`server.js\`) with the CORS configuration:

\`\`\`javascript
// Add this to your backend's main file
const cors = require('cors');

// Configure CORS for production
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend-domain.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
\`\`\`

2. **Create a Vercel configuration file**:

Ask Cursor to create a \`vercel.json\` file in the root of your backend directory:

\`\`\`javascript
// Create this file in your backend directory
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",  // or your main server file
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"  // or your main server file
    }
  ]
}
\`\`\`

3. **Ensure environment variables are properly configured**:

Ask Cursor to update your code to use environment variables for sensitive information:

\`\`\`javascript
// In your backend code
const mongoURI = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;
// other environment variables
\`\`\`

## Step 2: Create a GitHub Repository for Your Backend

Let's set up a dedicated GitHub repository for your backend:

\`\`\`mac
# Navigate to your backend directory
cd backend

# Initialize a new git repository
git init

# Add all files to staging
git add .

# Commit the changes
git commit -m "Initial backend setup for deployment"

# Go to GitHub and create a new repository named "project-backend"
# Then connect your local repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/project-backend.git

# Push your code to GitHub
git push -u origin main
\`\`\`

\`\`\`windows
# Navigate to your backend directory
cd backend

# Initialize a new git repository
git init

# Add all files to staging
git add .

# Commit the changes
git commit -m "Initial backend setup for deployment"

# Go to GitHub and create a new repository named "project-backend"
# Then connect your local repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/project-backend.git

# Push your code to GitHub
git push -u origin main
\`\`\`

Note: If your default branch is 'master' instead of 'main', adjust the last command accordingly.

## Step 3: Deploy to Vercel

Now that your code is on GitHub, let's deploy it to Vercel:

1. **Sign in to Vercel**:
   - Go to [Vercel](https://vercel.com/)
   - Sign in with your GitHub account (or create an account if you don't have one)

2. **Import your repository**:
   - Click "Add New..." → "Project"
   - Select your "project-backend" repository
   - Click "Import"

3. **Configure project settings**:
   - Set the Framework Preset to "Other"
   - Set the Root Directory to \`./\` (if your repository contains only the backend code)
   - Set the Build Command to \`npm install\` (or leave empty if not needed)
   - Set the Output Directory to \`./\` (or leave empty)

4. **Configure environment variables**:
   - Expand "Environment Variables" section
   - Add all your environment variables:
     - MONGODB_URI
     - JWT_SECRET
     - Any other environment variables your app needs

5. **Deploy**:
   - Click "Deploy"
   - Wait for the deployment to complete

## Step 4: Save Your Deployment URL

Once deployment is complete:

1. **Copy your deployment URL**:
   - Vercel will provide a URL like \`https://project-backend-abcd1234.vercel.app\`
   - Copy this URL - this is your backend API endpoint!

2. **Save this URL in a secure place**:
   - You'll need this URL to connect your frontend to your backend
   - Consider adding it to your project documentation

3. **Test your deployment**:
   - Visit \`your-deployment-url/api/test\` (or another existing endpoint)
   - You should see your API responding correctly

## Step 5: Update Your Frontend Configuration

You'll use this backend URL when deploying your frontend in the next section.

## Common Deployment Issues

1. **CORS errors**:
   - Make sure your backend's CORS configuration includes your frontend's domain
   - Double-check that you've configured methods and headers correctly

2. **Environment variable issues**:
   - Ensure all environment variables are added in Vercel's project settings
   - Check for typos in environment variable names

3. **Database connection problems**:
   - Verify your MongoDB connection string is correct
   - Ensure your IP whitelist in MongoDB Atlas includes 0.0.0.0/0 for Vercel access

4. **Deployment failures**:
   - Check the build logs in Vercel for specific errors
   - Ensure your \`package.json\` has correct dependencies and scripts

## Monitoring Your Deployed Backend

Vercel provides several tools to monitor your backend:

1. **Deployment logs**:
   - View real-time logs during deployment
   - Identify any build or runtime issues

2. **Function logs**:
   - Monitor serverless function execution
   - Track errors and performance

3. **Analytics**:
   - View request counts and performance metrics
   - Monitor application usage

## Next Steps

After successfully deploying your backend, proceed to the Frontend Deployment section to complete your project deployment.
`;

const BackendDeployment = () => {
  return (
    <Section id="backend-deployment">
      <Card>
        <MarkdownContent content={backendDeploymentMarkdown} />
      </Card>
    </Section>
  );
};

export default BackendDeployment; 