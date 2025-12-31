# Action Plan: Modern Portfolio Website (Notion-Inspired)

This document outlines the steps to build a clean, minimalist, and aesthetically pleasing portfolio website using Next.js, TypeScript, and inspired by the design philosophy of Notion.io.

---

### **Phase 1: Project Setup & Foundation**

-   [ ] **Initialize Project:**
    -   Set up a new Next.js project with TypeScript.
    -   Command: `npx create-next-app@latest --typescript portfolio-notion`

-   [ ] **Version Control:**
    -   Initialize a Git repository.
    -   Create a corresponding repository on GitHub.
    -   Perform the initial commit and push.

-   [ ] **Styling Setup:**
    -   Integrate Tailwind CSS for utility-first styling, which is ideal for creating clean, custom designs.
    -   Follow the official Next.js + Tailwind CSS integration guide.

-   [ ] **Project Structure:**
    -   Create the following directories inside `src/`:
        -   `components/` (for reusable UI elements)
        -   `styles/` (for global styles and fonts)
        -   `lib/` (for constants, and project data)
        -   `app/` (will be used for pages)

---

### **Phase 2: Core UI & Notion Aesthetic**

-   [ ] **Typography:**
    -   Integrate the 'Inter' font, a close alternative to Notion's primary font. Use `@next/font` for optimal loading.
    -   Define a typographic scale in `tailwind.config.js` for headings, paragraphs, and other text elements to match Notion's clean hierarchy.

-   [ ] **Color Palette:**
    -   Configure `tailwind.config.js` with a minimalist, Notion-like color palette:
        -   Primary text: `rgb(55, 53, 47)` (Notion's Near Black)
        -   Background: `rgb(255, 255, 255)` (White)
        -   Subtle Grays: For borders, secondary text, and backgrounds.
        -   Accent Color: One single, vibrant color for links and highlights (e.g., a muted blue or red).

-   [ ] **Layout Component:**
    -   Create a main `Layout.tsx` component.
    -   This component will wrap all pages, providing a consistent header, footer, and a centered, max-width content area.

-   [ ] **Icons:**
    -   Choose an icon library (e.g., `react-feather` or `lucide-react`) that provides simple, line-based icons similar to those used in Notion.

---

### **Phase 3: Building Pages & Components**

-   [ ] **Header / Navigation:**
    -   Build a `Header.tsx` component.
    -   Keep it minimal: just a logo/name on the left and navigation links ("Projects", "About", "Contact") on the right.
    -   Make it stick to the top on scroll with a blurred background effect.

-   [ ] **Hero Section (Home Page):**
    -   Create a `Hero.tsx` component for the main landing page (`app/page.tsx`).
    -   Include:
        -   A large, clean headline (e.g., "Hi, I'm [Your Name]").
        -   A sub-headline describing your role (e.g., "A Frontend Developer building modern web experiences.").
        -   An optional, professional avatar.

-   [ ] **Projects Section:**
    -   Create a `ProjectCard.tsx` component that looks like a Notion block or database entry.
        -   Fields: Project Icon, Title, Short Description, Tech Stack Tags, Link to project/source.
    -   Create a `ProjectData.ts` file in `lib/` to store project information as an array of objects.
    -   Build the "Projects" section on the home page by mapping over the project data and rendering the cards in a clean grid.

-   [ ] **About Section:**
    -   Create an `About.tsx` section for the homepage or a separate page.
    -   Write a concise bio.
    -   Use Notion-like "callout" blocks (an icon with a bordered background) to highlight key skills or achievements.

-   [ ] **Contact Section:**
    -   Create a `Contact.tsx` component.
    -   Instead of a form, use simple icon links for Email, GitHub, LinkedIn, and Twitter. This is cleaner and requires no backend.

-   [ ] **Footer:**
    -   Build a `Footer.tsx` component with social media links and a copyright notice.

---

### **Phase 4: Animation & Polish**

-   [ ] **Animation Library:**
    -   Integrate `Framer Motion` for subtle, performant animations.

-   [ ] **Implement Animations:**
    -   **Page Transitions:** Add a gentle fade-in effect when navigating between pages.
    -   **Scroll Animations:** Animate sections (like Projects and About) to fade in and slide up as the user scrolls them into view.
    -   **Hover Effects:** Apply a subtle lift or glow effect to `ProjectCard` components on hover to provide feedback.

---

### **Phase 5: Deployment to GitHub Pages**

-   [ ] **Configure Next.js for Static Export:**
    -   In `next.config.mjs`, add the following to enable static site generation:
        ```javascript
        /** @type {import('next').NextConfig} */
        const nextConfig = {
          output: 'export',
        };
        export default nextConfig;
        ```
    -   If your repository name is `your-username.github.io`, no `basePath` is needed. If it's a named repository (e.g., `portfolio`), you'll need to configure `basePath`.

-   [ ] **Update Build Script:**
    -   Modify the `build` script in `package.json` to be `next build`. The output will now be in the `out/` directory.

-   [ ] **Setup GitHub Actions for CI/CD:**
    -   Create a `.github/workflows/deploy.yml` file.
    -   Configure the workflow to:
        1.  Check out the code.
        2.  Set up Node.js.
        3.  Install dependencies (`npm install`).
        4.  Build the static site (`npm run build`).
        5.  Deploy the contents of the `out/` directory to the `gh-pages` branch on GitHub.

-   [ ] **Configure GitHub Pages:**
    -   In your GitHub repository settings, under "Pages," set the source to deploy from the `gh-pages` branch.
    -   Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.
