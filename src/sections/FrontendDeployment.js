import React from 'react';
import { Section, Card } from '../styles/StyledComponents';
import MarkdownContent from '../components/MarkdownContent';

const frontendDeploymentMarkdown = `
# Frontend Deployment

After deploying your backend, it's time to deploy your frontend application. This section covers connecting your frontend to the deployed backend and deploying it to Vercel.

## Step 1: Update Your Frontend with the Backend URL

First, you need to update your frontend code to use the deployed backend URL:

1. **Ask Cursor to integrate the new backend URL**:

   Ask Cursor to update your frontend API configuration file with the backend URL you obtained from the previous section:

   \`\`\`javascript
   // In your API configuration file (e.g., src/services/api.js)
   const API_URL = process.env.NODE_ENV === 'production'
     ? 'https://your-backend-url.vercel.app'
     : 'http://localhost:5000';
   
   // Use API_URL for all your API requests
   \`\`\`

   Replace \`'https://your-backend-url.vercel.app'\` with your actual backend URL from Vercel.

## Step 2: Create a GitHub Repository for Your Frontend

Follow these steps to create a GitHub repository for your frontend code:

\`\`\`mac
# Do this in the root directory of your project

# Initialize a new git repository
git init

# Add all files to staging
git add .

# Commit the changes
git commit -m "Initial frontend setup for deployment"

# Go to GitHub and create a new repository named "project-frontend"
# Then connect your local repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/project-frontend.git

# Push your code to GitHub
git push -u origin main
\`\`\`

\`\`\`windows
# Do this in the root directory of your project

# Initialize a new git repository
git init

# Add all files to staging
git add .

# Commit the changes
git commit -m "Initial frontend setup for deployment"

# Go to GitHub and create a new repository named "project-frontend"
# Then connect your local repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/project-frontend.git

# Push your code to GitHub
git push -u origin main
\`\`\`

Note: If your default branch is 'master' instead of 'main', adjust the last command accordingly.

## Step 3: Deploy to Vercel

Now that your code is on GitHub, let's deploy it to Vercel:

1. **Sign in to Vercel**:
   - Go to [Vercel](https://vercel.com/)
   - Sign in with your GitHub account

2. **Import your repository**:
   - Click "Add New..." → "Project"
   - Select your "project-frontend" repository
   - Click "Import"

3. **Configure project settings**:
   - Vercel should automatically detect your React application
   - Set the Framework Preset to "Create React App" (or the framework you're using)
   - Set the Root Directory to \`./\` (if your repository contains only the frontend code)
   - Leave build settings at their default values
   - **IMPORTANT**: Unlike the backend, do NOT create a vercel.json file for the frontend

4. **Configure environment variables**:
   - Expand "Environment Variables" section
   - Add any environment variables your frontend needs
   - You might want to add \`REACT_APP_API_URL=https://your-backend-url.vercel.app\` to specify your backend URL

5. **Deploy**:
   - Click "Deploy"
   - Wait for the deployment to complete

## Step 4: Get Your Frontend Deployment URL

Once deployment is complete:

1. **Copy your deployment URL**:
   - Vercel will provide a URL like \`https://project-frontend-abcd1234.vercel.app\`
   - This is your deployed frontend application!

2. **Test your deployed application**:
   - Visit your deployment URL in a browser
   - The website should not really work for now; we need to give the frontend access to the backend in the next step

## Step 5: Update Backend CORS for the Frontend URL

Finally, you need to update your backend CORS configuration to allow requests from your deployed frontend:

1. **Ask Cursor to update the CORS configuration in your backend**:

   Ask Cursor to modify the CORS configuration in your backend's main server file to include your frontend URL:

   \`\`\`javascript
   // In your backend's main file
   app.use(cors({
     origin: [
       'http://localhost:3000',
       'https://your-frontend-domain.vercel.app' // Add your actual frontend URL here
     ],
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type', 'Authorization']
   }));
   \`\`\`

   Replace \`'https://your-frontend-domain.vercel.app'\` with your actual frontend URL from Vercel.

2. **Push the updated backend code**:

   Navigate to your backend directory:
   
   \`\`\`bash
   # Navigate to your backend directory
   cd backend
   \`\`\`
   
   Add all files to staging:
   
   \`\`\`bash
   # Add all files to staging
   git add .
   \`\`\`
   
   Commit the changes:
   
   \`\`\`bash
   # Commit the changes
   git commit -m "Update CORS for deployed frontend"
   \`\`\`
   
   Push the changes:
   
   \`\`\`bash
   # Push the changes
   git push
   \`\`\`

   Vercel will automatically redeploy your backend with the updated CORS configuration.

## Congratulations!

You now have a fully deployed application with:

1. A backend API deployed on Vercel
2. A frontend application deployed on Vercel
3. Proper configuration to allow them to communicate with each other

Your application is now accessible to anyone on the internet!

## Common Deployment Issues

1. **API Connection Issues**:
   - Verify that your frontend is using the correct backend URL
   - Check that your backend CORS configuration includes your frontend URL
   - Check for HTTPS/HTTP mismatches (browsers block mixed content)

2. **Environment Variable Issues**:
   - Make sure all required environment variables are set in Vercel
   - Remember that environment variables need to be prefixed with \`REACT_APP_\` for Create React App projects

3. **Build Failures**:
   - Check the build logs in Vercel for specific errors
   - Ensure your \`package.json\` has the correct scripts and dependencies

## Optional Custom Domains

Using Vercel's default domains works great for development, but for a production application, you may want to use a custom domain. Here's how to set up a custom domain:

### Step 1: Purchase a Domain

1. **Go to a domain registrar like [GoDaddy](https://www.godaddy.com/)**:
   - Search for your desired domain name
   - Choose a domain with an extension that fits your project (.com, .io, .app, etc.)
   - **Purchase for the minimum time period** (usually 1 year)
   - Avoid adding domain protection or additional services unless you need them

2. **Complete the purchase**:
   - Follow the checkout process
   - Keep your login credentials safe as you'll need them to manage your domain

### Step 2: Set Up Your Domain in Vercel

1. **Access your project settings in Vercel**:
   - Go to your Vercel dashboard
   - Select your project
   - Click on "Settings" > "Domains"

2. **Add your custom domain**:
   - Click "Add" or "Add Domain"
   - Enter your domain name (e.g., yourdomain.com)
   - Click "Add"

3. **Follow Vercel's configuration instructions**:
   - Vercel will provide you with DNS configuration settings
   - These typically include:
     - Name/Host records
     - Record types (A, CNAME)
     - Values/Targets

### Step 3: Configure DNS Settings at GoDaddy

1. **Log in to your GoDaddy account**:
   - Go to GoDaddy.com
   - Sign in with your credentials

2. **Access DNS Management**:
   - Go to "My Products"
   - Find your domain
   - Click "DNS" or "Manage DNS"

3. **Update DNS Records**:
   - For each record that Vercel provided:
     - Add or edit the corresponding record in GoDaddy
     - Set the Name/Host, Type, and Value/Target exactly as specified by Vercel
     - Save your changes

4. **Wait for DNS propagation**:
   - DNS changes can take 24-48 hours to fully propagate
   - Vercel will verify your domain once the changes are detected

### Step 4: Update Your Backend CORS Configuration

After setting up your custom domain, remember to update your backend CORS configuration to include it:

1. **Ask Cursor to update the CORS configuration in your backend**:

   \`\`\`javascript
   // In your backend's main file
   app.use(cors({
     origin: [
       'http://localhost:3000',
       'https://your-vercel-domain.vercel.app',
       'https://yourdomain.com' // Add your custom domain here
     ],
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type', 'Authorization']
   }));
   \`\`\`

2. **Push the updated backend code**:

   \`\`\`bash
   # Add, commit, and push the changes
   git add .
   git commit -m "Update CORS for custom domain"
   git push
   \`\`\`

Once these steps are complete, your application will be accessible via your custom domain, providing a more professional appearance for your project.
`;

const FrontendDeployment = () => {
  return (
    <Section id="frontend-deployment">
      <Card>
        <MarkdownContent content={frontendDeploymentMarkdown} />
      </Card>
    </Section>
  );
};

export default FrontendDeployment; 