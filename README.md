# jihotv Web Magazine

This is the source code for the jihotv web magazine, a modern, minimalist, and performant blog built with Next.js and deployed on GitHub Pages.

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ✨ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14 (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with the [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) plugin.
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Content**: Markdown files with Front Matter
- **Deployment**: GitHub Actions to GitHub Pages

## 🚀 Getting Started

### 1. Install Dependencies

First, install the project dependencies using npm:

```bash
npm install
```

### 2. Run the Development Server

To run the development server locally, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ✍️ Managing Content

This site is designed for easy content management directly through the file system.

### How to Add a New Post

1.  **Create a new folder** inside the `content/posts/` directory. The name of the folder will be the URL slug for the post (e.g., `my-new-post`).

2.  Inside your new folder, create an `index.md` file.

3.  Add the **front matter** and your content to the `index.md` file. The front matter is the YAML block at the top of the file. Here is a template:

    ```yaml
    ---
    title: "Your Post Title"
    date: "YYYY-MM-DD"
    tags: ["Tag1", "Tag2"]
    featured_image: "/images/posts/your-post-slug/featured.jpg"
    excerpt: "A short summary of your post that will appear on the main page."
    author: "Your Name"
    reading_time: 5 
    ---

    ## Your Post Content

    Write your post content here using Markdown...
    ```

4.  **Add the featured image** for the post. Place the image file (e.g., `featured.jpg`) inside a new directory at `public/images/posts/your-post-slug/`. Make sure the `featured_image` path in your front matter matches this location.

5.  Commit and push your changes to the `main` branch. The GitHub Actions workflow will automatically build and deploy your new post.
