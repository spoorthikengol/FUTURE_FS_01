# FUTURE_FS_01 — Personal Professional Portfolio

**Future Interns — Full Stack Web Development — Task 1**

A professional portfolio for **Spoorthi K P**, showcasing AI, computer vision and full-stack projects with a product-focused approach.

## 🌐 Live Portfolio

**[spoorthikp.vercel.app](https://spoorthikp.vercel.app/)**

## Overview

A responsive single-page portfolio introducing **MediMind AI** as the primary ongoing project alongside other technical work including **SafetyNet AI** and an **MRI enhancement/segmentation project**.

The portfolio also presents experience, education, certifications, skills and direct contact functionality.

## Features

* Editorial hero section with animated profile presentation
* Responsive design from mobile to desktop
* Selected Work section with expandable project case studies
* MediMind AI presented as the flagship project
* SafetyNet AI clearly identified as a hackathon/team project
* Experience section with scroll animations
* About section with education and interests
* Certifications section with certificate links
* Ask Spoorthi AI portfolio assistant
* GitHub and LinkedIn integration
* Resume access
* Dark / light theme with persisted preference
* Smooth scroll and Framer Motion animations
* `prefers-reduced-motion` support
* Functional contact form with server-side email delivery
* Honeypot spam protection
* Client-side validation and success/error states
* SEO metadata and canonical URL
* Open Graph / social preview metadata
* `robots.txt` and `sitemap.xml`
* Responsive layout optimized for mobile, tablet and desktop
* Accessible keyboard navigation and visible focus states

## Featured Projects

### MediMind AI

An AI-powered healthcare assistant designed to help users understand medical reports and receive meaningful health insights.

Key areas include:

* Medical report analysis
* Health scoring
* Disease risk prediction
* Medical terminology simplification
* AI health assistance
* Health dashboards
* Personalized insights

### SafetyNet AI

A computer-vision safety project developed as a **team hackathon build**.

The project explores intelligent safety monitoring using computer vision and AI.

### MRI Enhancement & Segmentation

A medical-imaging project focused on image enhancement and segmentation techniques for MRI analysis.

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS v4
* Framer Motion
* Python
* FastAPI
* PostgreSQL
* Hugging Face
* Resend
* Vercel

## Design Philosophy

The portfolio uses a minimal editorial design system with a near-black / off-white foundation and an amber accent.

Typography uses:

* **Space Grotesk** for display text
* **Inter** for body text
* **IBM Plex Mono** for technical labels and metadata

The design intentionally avoids:

* Skill percentage bars
* Fake statistics
* Fabricated testimonials
* Fake clients
* Stock photography

Project descriptions are based on work that was actually built.

## Ask Spoorthi AI

The portfolio includes an interactive **Ask Spoorthi AI** assistant.

Visitors can ask about:

* Spoorthi
* Projects
* Skills
* Experience
* MediMind AI
* Technical interests

The assistant uses project and profile knowledge stored within the portfolio application.

## Contact

The portfolio includes a working contact form connected to a Vercel serverless API.

The form provides:

* Name
* Email
* Subject
* Message
* Validation
* Loading state
* Success state
* Error handling
* Honeypot spam protection

Messages are delivered through **Resend** using a server-side environment variable.

The API key is never exposed to the browser.

## Project Structure

```text
FUTURE_FS_01/
├── api/
│   └── contact.ts
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── resume/
│   └── spoorthi.jpg
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tsconfig.api.json
└── vite.config.ts
```

The project uses a data-driven structure so profile information, projects, experience and certifications can be updated without rewriting the main UI components.

## Installation

```bash
git clone https://github.com/spoorthikengol/FUTURE_FS_01.git
cd FUTURE_FS_01
npm install
```

## Environment Variables

Create a `.env` file based on `.env.example`.

```bash
RESEND_API_KEY=your_resend_api_key_here
```

The Resend API key must remain server-side and should never be committed to GitHub.

## Running Locally

Start the Vite development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

For testing the Vercel serverless contact API locally:

```bash
npm install -g vercel
vercel dev
```

## Production Build

Verify the production build with:

```bash
npm run build
```

The project should complete the TypeScript check and Vite production build successfully.

## Deployment

The portfolio is deployed using **Vercel**.

Production URL:

**https://spoorthikp.vercel.app/**

Deployment flow:

1. Push changes to the GitHub `main` branch.
2. Vercel detects the new commit.
3. Vercel builds the React/Vite application.
4. The production deployment is generated automatically.

The contact API is deployed alongside the frontend as a Vercel serverless function.

## SEO

The portfolio includes:

* Page title
* Meta description
* Canonical URL
* Open Graph metadata
* Twitter/social preview metadata
* `robots.txt`
* `sitemap.xml`
* Semantic HTML structure

## Accessibility

Accessibility considerations include:

* Keyboard navigation
* Visible focus states
* Accessible button labels
* Semantic headings
* Responsive typography
* Reduced-motion support
* Sufficient text contrast
* Mobile-friendly interaction targets

## Future Improvements

Possible future improvements include:

* Individual project routes
* More detailed project case studies
* Additional project screenshots
* Advanced AI capabilities for Ask Spoorthi AI
* More interactive project demonstrations
* Analytics and performance monitoring

## Author

**Spoorthi K P**

Student — JNN College of Engineering

📧 **[spoorthikengol27@gmail.com](mailto:spoorthikengol27@gmail.com)**

🔗 **LinkedIn:** https://linkedin.com/in/spoorthi-k-p-1017aa3a2

💻 **GitHub:** https://github.com/spoorthikengol

🌐 **Portfolio:** https://spoorthikp.vercel.app/

---

### Future Interns — Full Stack Web Development Internship

**Task 1 — Personal Professional Portfolio**

Built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.
