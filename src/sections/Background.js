import React from 'react';
import { Section, Card } from '../styles/StyledComponents';
import MarkdownContent from '../components/MarkdownContent';

const backgroundMarkdown = `
# Background

Over the past 2-3 months, I've played around a lot with tech stacks that allow me to build good, full-stack applications in efficient manners. Wanted to compile my thoughts into a document and procedure that theoretically anyone could follow to build something like this.

The example project I built (nominally for this but mostly for my friends and I) can be found at [handl.club](https://www.handl.club/). You can check it out as an example of something that could be built within 3-4 hours given some experience with these systems.

I will preface that this will be significantly harder than building something with Firebase, but will also be able to create significantly more powerful applications, while also giving you significantly more control over the app. I also believe that, in the long run, most jobs are going to end up being some flavor of product management; I think working on something like this will set people up well for that world.

## Why This Tech Stack?

The technologies chosen for this guide provide a powerful and flexible foundation for modern web development:

1. **MongoDB** - A flexible, document-based NoSQL database that scales well and works seamlessly with JavaScript
2. **React** - A popular JavaScript library for building interactive user interfaces
3. **Git** - The industry-standard version control system
4. **Vercel** - A platform for deploying web applications with zero configuration
5. **Cursor** - An AI-powered code editor that enhances developer productivity

This combination offers:
- Excellent developer experience
- Scalable infrastructure
- Modern tooling
- Rapid deployment capabilities
- Flexibility to build complex applications

In the following sections, we'll explore each technology in detail and guide you through the process of setting up a complete full-stack application from scratch.
`;

const Background = () => {
  return (
    <Section id="background">
      <Card>
        <MarkdownContent content={backgroundMarkdown} />
      </Card>
    </Section>
  );
};

export default Background; 