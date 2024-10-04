# Jelle's Portfolio

A personal portfolio website built using **Vue.js 3** and **Vuetify 3**. This project showcases projects, work experience, and provides information about Jelle, a passionate software engineer with experience in game development and software development.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Locally in Development Mode](#running-locally-in-development-mode)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This portfolio website includes the following sections:

- **About Me**: An introduction and background, including skills and education.
- **Projects**: A gallery of projects with detailed descriptions and screenshots.
- **Work Experience**: A timeline of previous work experiences and responsibilities.

The website is designed to be responsive and user-friendly, utilizing Vuetify's Material Design components.

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
   git clone https://github.com/yourusername/portfolio-website-vue3.git
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

## Deployment

After building the project, you can deploy the contents of the `dist` folder to any static hosting service like Netlify, Vercel, GitHub Pages, etc.

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

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository**:

   Click on the 'Fork' button at the top right corner of the repository page to create a copy of the repository in your GitHub account.

2. **Clone your forked repository**:

   ```bash
   git clone https://github.com/yourusername/portfolio-website-vue3.git
   cd portfolio-website-vue3
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

For any inquiries or issues, please open an issue on the repository or contact me at [your-email@example.com].

---

Feel free to customize this README with more details about your project, screenshots, or any additional information you'd like to include.