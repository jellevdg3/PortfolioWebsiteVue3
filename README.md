# Jelle's Portfolio

A **template** personal portfolio website built using **Vue.js 3** and **Vuetify 3**. This project showcases projects, work experience, and provides information about Jelle, a passionate software engineer with experience in game development and software development. **Others are welcome to use and customize this template** to create their own portfolio websites. Please note that the data included is **placeholder content** and should be replaced with your personal information and projects.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Locally in Development Mode](#running-locally-in-development-mode)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
  - [Deploying to Netlify](#deploying-to-netlify)
  - [Deploying to GitHub Pages](#deploying-to-github-pages)
  - [Deploying to an Apache Web Server via FTP](#deploying-to-an-apache-web-server-via-ftp)
- [Customization](#customization)
  - [Replacing Placeholder Data](#replacing-placeholder-data)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This portfolio website template includes the following sections:

- **About Me**: An introduction and background, including skills and education.
- **Projects**: A gallery of projects with detailed descriptions and screenshots.
- **Work Experience**: A timeline of previous work experiences and responsibilities.

The website is designed to be responsive and user-friendly, utilizing Vuetify's Material Design components. **Feel free to customize this template to suit your personal branding and project showcases.**

## Features

- **Responsive Design**: Ensures optimal viewing experience across devices.
- **Dynamic Content**: Uses mock API services to fetch data for projects and work experience.
- **Project Gallery**: Interactive project tiles that open detailed dialogs with carousels.
- **Smooth Navigation**: Navigation bar with smooth scrolling to different sections.
- **Theming**: Dark theme using Vuetify's theming capabilities.

## Project Structure

- **src/**: Contains the source code of the application.
  - **components/**: Reusable Vue components.
  - **dialogs/**: Dialog components for displaying project details and screenshots.
  - **views/**: Page-level components for different sections of the site.
  - **services/**: Contains the `mockApi.js` file which simulates API calls.
  - **plugins/**: Vuetify plugin configuration.
  - **router.js**: Vue Router configuration.
  - **main.js**: Application entry point.
- **public/**: Static assets.
- **package.json**: Project dependencies and scripts.

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v14.x or higher recommended).
- **npm**: Node Package Manager is installed with Node.js.

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/jellevdg3/PortfolioWebsiteVue3.git
   cd portfolio-website-vue3
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

## Running Locally in Development Mode

To start the development server:

```bash
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` (the port may vary; check the terminal output).

## Building for Production

To build the application for production:

```bash
npm run build
```

This command will create an optimized production build in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

This will serve the production build at `http://localhost:4173` (the port may vary).

### Configuring the Base URL in Vite

When deploying your application, especially to a subdirectory on your server (e.g., `https://yourdomain.com/portfolio/`), you need to set the `base` URL in Vite to ensure that all asset paths are correctly resolved.

1. **Open `vite.config.js`** in the root directory of your project.

2. **Set the `base` property** to your desired base path. For example, if deploying to `https://yourdomain.com/portfolio/`:

   ```javascript
   // vite.config.js
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'

   export default defineConfig({
     plugins: [vue()],
     base: '/portfolio/', // Set this to your subdirectory
   })
   ```

   If deploying to the root (`https://yourdomain.com/`), you can leave it as `'/'` or omit it since `'/'` is the default.

3. **Rebuild the project** after setting the base URL:

   ```bash
   npm run build
   ```

Setting the correct `base` ensures that all assets, links, and routes function correctly relative to the deployment path.

## Deployment

After building the project, you can deploy the contents of the `dist` folder to any hosting service. Below are instructions for deploying to Netlify, GitHub Pages, and an Apache web server via FTP.

### Deploying to Netlify

1. **Create a Netlify account** and connect it to your GitHub repository.

2. **Set build settings**:

   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

3. **Deploy**:

   Netlify will automatically build and deploy your application whenever you push changes to the main branch.

### Deploying to GitHub Pages

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Install GitHub Pages package** (if not already installed):

   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deployment scripts** to your `package.json`:

   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**:

   ```bash
   npm run deploy
   ```

### Deploying to an Apache Web Server via FTP

Deploying to an Apache web server is straightforward. You can upload the built files using FTP. Follow these steps:

#### Prerequisites

- **FTP Client**: Install an FTP client like [FileZilla](https://filezilla-project.org/) or [WinSCP](https://winscp.net/).
- **FTP Credentials**: Obtain your FTP server address, username, password, and the target directory from your hosting provider.

#### Steps

1. **Build the Project**

   First, create a production build of your application:

   ```bash
   npm run build
   ```

   This will generate the `dist` folder containing the optimized files.

2. **Configure the Base URL (if necessary)**

   If you're deploying to a subdirectory on your Apache server (e.g., `https://yourdomain.com/portfolio/`), ensure that the `base` URL in `vite.config.js` is set accordingly (as explained in the [Building for Production](#building-for-production) section).

3. **Connect to Your Apache Server via FTP**

   - Open your FTP client.
   - Enter your FTP server address, username, and password.
   - Connect to the server.

4. **Navigate to the Target Directory**

   - Typically, the root directory for your website is `public_html` or `www`.
   - If deploying to a subdirectory, navigate to or create the desired folder (e.g., `public_html/portfolio`).

5. **Upload the `dist` Folder Contents**

   - On your local machine, navigate to the `dist` folder generated after building.
   - Select all files and folders inside `dist`.
   - Drag and drop them into the target directory on your server via the FTP client.
   - Wait for the upload to complete.

6. **Verify the Deployment**

   - Open your browser and navigate to your domain (e.g., `https://yourdomain.com/` or `https://yourdomain.com/portfolio/`).
   - Ensure that the website loads correctly and that all assets are functioning as expected.

#### Additional Configuration (Optional)

- **.htaccess for Single Page Applications (SPA)**

  To ensure that routing works correctly in a Single Page Application, you may need to configure an `.htaccess` file to redirect all requests to `index.html`. Create an `.htaccess` file in the root of your deployed directory with the following content:

  ```apache
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /portfolio/ # Change this if deploying to a subdirectory
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /portfolio/index.html [L]
  </IfModule>
  ```

  Replace `/portfolio/` with your actual base path. If deploying to the root, use `/`.

## Customization

### Replacing Placeholder Data

This template comes with **placeholder data** to help you get started. To personalize the portfolio:

1. **About Me Section**

   - Navigate to the `src/services/mockApi.js` file.
   - Replace the placeholder information with your own details, such as your name, bio, skills, and education.

2. **Projects Section**

   - In the same `mockApi.js` file, update the project entries with your own projects.
   - Replace project titles, descriptions, images, and links to reflect your actual work.

3. **Work Experience Section**

   - Update the work experience entries with your own professional history.
   - Include your previous job titles, companies, durations, and responsibilities.

4. **Assets**

   - Replace placeholder images and icons in the `public/` directory with your own visuals.
   - Ensure that file paths in your components reference the correct asset locations.

5. **Theming and Styling**

   - Customize the theme by modifying Vuetify's theme settings in the `src/plugins/vuetify.js` file.
   - Adjust colors, fonts, and other styling aspects to match your personal branding.

6. **Additional Sections**

   - Feel free to add or remove sections as needed.
   - Create new Vue components in the `src/components/` directory to extend functionality.

## Contributing

Contributions are welcome! This template is open for others to use and improve. Please follow these steps to contribute:

1. **Fork the repository**:

   Click on the 'Fork' button at the top right corner of the repository page to create a copy of the repository in your GitHub account.

2. **Clone your forked repository**:

   ```bash
   git clone https://github.com/yourusername/PortfolioWebsiteVue3.git
   cd PortfolioWebsiteVue3
   ```

3. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**:

   Implement your feature or fix bugs.

5. **Test your changes**:

   Ensure that all features are working as expected.

6. **Commit your changes**:

   ```bash
   git add .
   git commit -m "Add your commit message here"
   ```

7. **Push to your forked repository**:

   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**:

   Go to the original repository and click on 'Pull Requests'. Click on 'New Pull Request', select your branch, and submit your pull request.

### Code Guidelines

- **Follow the existing coding style**.
- **Comment your code** where necessary.
- **Ensure your code builds and runs without errors**.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or issues, please open an issue on the repository or contact me at [jellevdg3@gmail.com](mailto:jellevdg3@gmail.com)