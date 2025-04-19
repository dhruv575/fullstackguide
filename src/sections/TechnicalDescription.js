import React from 'react';
import { Section, Card, Button, Box, Grid } from '../styles/StyledComponents';
import MarkdownContent from '../components/MarkdownContent';

const technicalDescriptionMarkdown = `
# Technical Description

Before diving into coding, it's crucial to document your project's technical aspects. The Technical Description serves as a blueprint for your development process and helps you think through important considerations before writing any code.

## What is a Technical Description?

A Technical Description is a document that outlines:
- The purpose and scope of your project
- Your chosen tech stack and justification
- Data models and relationships
- Development steps for both frontend and backend
- Special considerations and requirements

## Why Create a Technical Description?

Creating a clear Technical Description before starting development:
- Helps clarify your thinking and planning
- Serves as documentation for yourself and others
- Acts as a roadmap throughout the development process
- Makes it easier to identify potential issues early
- Helps ensure you don't miss important features

## How to Create Your Technical Description

1. Create a new Google Doc
2. Include the following sections (described in detail below)
3. Download as Markdown when complete
4. Add to your project's README.md file

## Required Sections

### 1. Project Proposal

Provide a clear, concise description of what your project aims to accomplish. This should include:
- The problem your project solves
- Target audience
- Core features and functionality
- Any unique selling points

### 2. Technical Stack

List all technologies you plan to use, including:
- Frontend framework (React in our case)
- Backend framework and language (Node.js, Express)
- Database (MongoDB)
- Deployment platforms (Vercel)
- Third-party APIs and services (OpenAI, Cloudinary, etc.)
- Any other libraries or tools

For each technology, briefly explain why you chose it for this project.

### 3. Data Models

Define the structure of your database models, including:
- Each model's fields and their data types
- Relationships between models
- Any validation rules
- Indexes for performance

### 4. Backend Development Steps

Break down the backend development process into clear, actionable steps:
- Initial setup and configuration
- Creating models
- Building authentication
- Implementing API routes
- Creating controllers
- Setting up middleware
- Integrating third-party services

### 5. Frontend Development Steps

Similarly, outline the frontend development process:
- Project initialization and folder structure
- Component hierarchy
- Page/route planning
- State management approach
- API integration
- UI/UX considerations
- Responsive design implementation

### 6. Special Considerations

Include any additional considerations specific to your project:
- Security concerns
- Performance optimization
- Accessibility requirements
- Mobile responsiveness
- Testing strategy
- Deployment workflow

### 7. API Keys and Configuration

**IMPORTANT:** Always include any necessary API keys, connection strings, and configuration details your project will need:
- MongoDB connection URI
- OpenAI API key
- Cloudinary keys (cloud name, API key, secret)
- JWT or authentication secrets
- Email service credentials
- Any other service credentials or configuration details

This ensures that when you begin development, you have all the necessary credentials ready. For security, in your actual project, you'll store these in environment variables rather than hardcoding them.

## Example Technical Description

Below is an excerpt from a sample technical description for a project called "HandL" which tracks daily highs and lows:

\`\`\`
# HandL Technical Description

## Project Proposal

I would like to develop a project that allows people to track their day through a quick few things. The project is named HighsAndLows. Every day, they should be able to enter in a score from 1-10, a daily high, and a daily low.

They should be able to friend other users of the app and view their daily highs and lows, as well as charts/analytics about how they are doing generally. People should also be able to backtrack/fill out days they missed in a later time.

People will get formatted emails which recap their week (after they have used the platform for a whole week at least). These recaps should be generated with the help of LLMs.

## Proposed Technical Stack

* **MongoDB + Express + Node**: We will intend to use MongoDB for storage of zips, agencies, locations, and partners.  
* **Vercel:** Both the backend and frontend will be deployed on Vercel (in different deployments of course)  
* **Up to you:** Some package that allows us to send texts every day around 10:30 PM to users to remind them to fill out for that day  
* **MailJS:** For sending out emails that recap a person's week  
* **OpenAI API:** We should use ChatGPT 4o-mini to generate these recaps above (given quite a lot of structure)  
* **Cloudinary**: For image hosting  
* **React:** The frontend will be all react. The app has been created using npx create-react-app to begin with.

## User Model
- Username (String)  
- Name (String)  
- Phone Number (String)  
- Email (String)  
- Profile_Picture_URL (String)  
- Friends[] (Foreign Key)  
- Days[] (Foreign Key)

## Day Model
- Date (Date)  
- Score (Number)  
- High (String)  
- Low (String)

## Backend Development Steps

1. Set up the file directory and all necessary introductory files for the project. Install any necessary components.  
2. Create and define our different file models  
3. Build out authentication and sign up/login framework. Authentication should last for 1 year when done, and rely on email. Phone number is also required.  
4. Build the controllers and routes needed to add and remove each of our models. Then, create routes to query the lists of them.  
5. Build out framework and middleware necessary for sending texts, adding friends, viewing friends, etc  
6. Build out framework and middleware necessary for uploading pictures to Cloudinary and then receiving back the link.   
7. Build out framework for summarizing weeks and sending out emails about them using MailJS

## Frontend Development Steps

1. Create a file directory with images, components, data and pages. Create a global API variable that is set and can be edited for where the server is hosted  
2. Develop a header, footer, and landing page which explain what this project is about and how it works generally.  
3. Develop a sign up/log in page which follows the authentication guidelines laid out above  
4. Develop a dashboard from which users can view their own stats, fill out days they've missed and view previous days through a calendar feature and/or fill out the current day  
5. Develop a tab on the dashboard through which users can manage friend requests or search for new friends  
6. Develop a public view for each user which will show some aggregated stats as well as their 5 most recent days  
7. Build a feed feature which will display the person's friend's "Days", with the most recent ones at the top. You should be able to view their profiles from there as well

## Frontend Considerations

1. We want the frontend to be as clean and modern as possible, considering our target audience is 16-24 year olds. Take heavy inspiration from the UI of Notion  
2. We want the frontend to feel responsive and provide micro feedback  
3. This web application will most likely be used predominantly on mobile devices. Mobile compatibility is a top priority for this project.

## Necessary Keys

JWT_SECRET=fde5be3fca2f594bb39592a9d3781f5d...
CLOUDINARY_CLOUD_NAME="djt4gxy9s"  
CLOUDINARY_API_KEY="5516265853xxxxx"  
CLOUDINARY_API_SECRET="d6HCnsoaDBypM1dXCReFoJqxxxxx"  
OPENAI_API_KEY="sk-proj-v7uw_Ehnon3QpMJsLMnW1swNQVU4-xxxxx"
\`\`\`

## Next Steps

After completing your Technical Description:

1. Save your Google Doc as a Markdown file
2. Open your project in Cursor
3. Copy the contents of your Markdown file into the project's README.md
4. Commit your changes to the repository

This will serve as the starting point for your development journey. As you build your project, you may update and refine your Technical Description based on new insights and challenges.
`;

const TechnicalDescription = () => {
  const downloadExample = (format) => {
    const baseUrl = '/src/data/HandL Technical Description';
    let url;
    
    switch (format) {
      case 'docx':
        url = `${baseUrl}.docx`;
        break;
      case 'pdf':
        url = `${baseUrl}.pdf`;
        break;
      case 'md':
        url = `${baseUrl}.md`;
        break;
      default:
        url = `${baseUrl}.pdf`;
    }
    
    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = `HandL Technical Description.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Section id="technical-description">
      <Card>
        <MarkdownContent content={technicalDescriptionMarkdown} />
        <Box margin="var(--spacing-md) 0">
          <h3>Download Example Technical Description</h3>
          <Grid cols={3} gap="var(--spacing-sm)">
            <Button onClick={() => downloadExample('docx')}>
              Download as DOCX
            </Button>
            <Button onClick={() => downloadExample('pdf')}>
              Download as PDF
            </Button>
            <Button onClick={() => downloadExample('md')}>
              Download as Markdown
            </Button>
          </Grid>
        </Box>
      </Card>
    </Section>
  );
};

export default TechnicalDescription; 