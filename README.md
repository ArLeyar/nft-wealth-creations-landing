# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/1f77e9ca-f28d-40dd-869f-396f72feaea0
**Custom Domain**: nwctrading.xyz

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/1f77e9ca-f28d-40dd-869f-396f72feaea0) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### GitHub Pages Deployment
This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

To enable GitHub Pages:
1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Under "Custom domain", enter: nwctrading.xyz
5. Check "Enforce HTTPS" for secure connections

The custom domain is configured via the CNAME file in the public directory.

Simply open [Lovable](https://lovable.dev/projects/1f77e9ca-f28d-40dd-869f-396f72feaea0) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

This project is already set up to use the custom domain: nwctrading.xyz

If you want to change the domain:
1. Update the CNAME file in the public directory
2. Update the custom domain in GitHub Pages settings

For deploying to a different service, we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
