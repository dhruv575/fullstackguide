import React from 'react';
import { Section, Card } from '../styles/StyledComponents';
import MarkdownContent from '../components/MarkdownContent';

const frontendDevelopmentMarkdown = `
# Frontend Development

Now that you've set up your project and developed your backend, it's time to create the frontend of your application. This section will guide you through the process of building a responsive, visually appealing user interface that connects to your backend.

## Step 1: Create a Custom Logo

Before diving into code development, let's give your application a unique identity by creating a custom logo:

1. Choose a logo creation tool:
   - [Canva](https://www.canva.com/create/logos/) (user-friendly, many free templates)
   - [Figma](https://www.figma.com/) (more advanced design capabilities)
   - [Looka](https://looka.com/) (AI-powered logo generation)
   - You can also ask GPT-4o to generate logo ideas if you have access

2. Design considerations:
   - Keep it simple and recognizable
   - Choose colors that align with your brand
   - Make sure it works well in different sizes
   - Export in multiple sizes (at least 64x64px, 192x192px, and 512x512px)
   - Save in PNG format with transparent background

## Step 2: Update Project Assets

Once you have your logo, update your project assets:

\`\`\`mac
# Navigate to the public folder
cd public

# Replace the default favicons with your custom logo
# 1. Delete the existing favicon.ico
rm favicon.ico
# 2. Copy your logo (rename it to favicon.ico)
cp path/to/your/logo-64x64.png favicon.ico

# Replace the larger app icons
rm logo192.png
rm logo512.png
cp path/to/your/logo-192x192.png logo192.png
cp path/to/your/logo-512x512.png logo512.png
\`\`\`

\`\`\`windows
# Navigate to the public folder
cd public

# Replace the default favicons with your custom logo
# 1. Delete the existing favicon.ico
del favicon.ico
# 2. Copy your logo (rename it to favicon.ico)
copy path\\to\\your\\logo-64x64.png favicon.ico

# Replace the larger app icons
del logo192.png
del logo512.png
copy path\\to\\your\\logo-192x192.png logo192.png
copy path\\to\\your\\logo-512x512.png logo512.png
\`\`\`

## Step 3: Update Application Metadata

Personalize your application's title and description:

1. Open \`public/index.html\` in your editor
2. Find and update the following:
   - \`<title>\` tag: Change to your application's name
   - \`<meta name="description">\` tag: Update with a brief description of your app
   - Open Graph meta tags (\`og:title\`, \`og:description\`) if present

This metadata is important for SEO and when your site is shared on social media.

## Step 4: Start Your Development Server

Before making code changes, start your development server to see real-time updates:

\`\`\`mac
# Navigate back to the project root
cd ..

# Start the development server
npm start
\`\`\`

\`\`\`windows
# Navigate back to the project root
cd ..

# Start the development server
npm start
\`\`\`

This will open your application in a browser at http://localhost:3000.

## Step 5: Frontend Development with Claude

Now that your development environment is ready, you can begin building your frontend with Claude's assistance:

1. **Open Cursor Chat** and make sure it's set to Agent mode with Claude 3.7 Sonnet

2. **Ask Claude to help you implement the frontend**:
   \`\`\`
   Based on the Technical Description in my README.md and the backend we've developed, please help me build the frontend for this project. Let's follow the frontend development steps outlined in the Technical Description and implement them one by one, starting with setting up the file structure.
   \`\`\`

3. **Work through the frontend development steps sequentially**:
   - Follow the steps outlined in your Technical Description
   - Implement one component or feature at a time
   - Test thoroughly before moving to the next step
   - Make sure Claude understands and follows your specific requirements

## Step 6: Step-by-Step Development Process

Regardless of your specific application, the following incremental approach is recommended:

1. **Set up folder structure** (components, pages, styles, utils, assets, etc.)
2. **Establish common components** (header, footer, loading spinners, etc.)
3. **Create basic layout** and navigation flow
4. **Implement authentication** forms and logic
5. **Develop main functionality** features one by one
6. **Add API integration** to connect with your backend
7. **Polish styling** for a professional appearance
8. **Implement responsiveness** for mobile devices

## Step 7: Testing and Refinement

Throughout the development process:

1. **Regularly preview your application** at http://localhost:3000
2. **Test each feature thoroughly** after implementation
3. **Use the browser's developer tools** (Ctrl+Shift+I or Cmd+Option+I):
   - Inspect element structure and styling
   - Check console for errors (Console tab)
   - Test responsive design (Toggle device toolbar with Ctrl+Shift+M or Cmd+Option+M)
   - Monitor network requests to your backend API (Network tab)

4. **Add console logs for debugging**:
   \`\`\`javascript
   console.log('Data from API:', data);
   console.log('Current state:', currentState);
   \`\`\`

5. **Request design or functionality changes** from Claude as needed
   \`\`\`
   The header component looks good, but can we make it sticky so it stays at the top when scrolling?
   \`\`\`

## Step 8: Responsive Design

Ensure your application works well on all device sizes:

1. Test on various screen sizes using browser developer tools
2. Use CSS media queries to adjust layouts for different devices
3. Implement a mobile-first approach where appropriate
4. Test touch interactions for mobile devices

## Step 9: Backend Integration

As you build the frontend:

1. **Create API service files** to interact with your backend
2. **Implement proper error handling** for API requests
3. **Add loading states** while waiting for responses
4. **Set up authentication** token management
5. **Test all API endpoints** with real data

## Step 10: Documentation and Cleanup

Before considering your frontend complete:

1. **Remove any unused components or code**
2. **Add comments** to complex sections
3. **Organize CSS/styling** for maintainability
4. **Document any special considerations** for future reference

## Common Issues and Solutions

- **Component not rendering**: Check for errors in the console and verify all required props are passed
- **Styling inconsistencies**: Use a consistent theme system or CSS variables
- **API connection problems**: Verify the API endpoint URLs and request formats
- **Authentication issues**: Check token storage and inclusion in requests
- **Performance concerns**: Optimize renders with React hooks like useMemo and useCallback

## Best Practices for Working with Claude

1. **Show code context** when asking for changes to specific components
2. **Provide clear requirements** for new features
3. **Ask for explanations** of suggested code
4. **Request alternative approaches** if you're not satisfied with the first solution
5. **Work incrementally** - don't try to build the entire UI at once

Remember, frontend development is iterative. Take your time to build a clean, maintainable, and user-friendly interface that integrates seamlessly with your backend.
`;

const FrontendDevelopment = () => {
  return (
    <Section id="frontend">
      <Card>
        <MarkdownContent content={frontendDevelopmentMarkdown} />
      </Card>
    </Section>
  );
};

export default FrontendDevelopment; 