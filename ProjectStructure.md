# Project Structure

```plaintext
portfoliowebsitevue3/
├── node_modules/
├── public/
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── plugins/
│   │   └── vuetify.js
│   ├── services/
│   │   └── mockApi.js
│   ├── components/
│   │   ├── common/
│   │   │   ├── NavBar.vue
│   │   │   └── Footer.vue
│   │   ├── projects/
│   │   │   ├── ProjectTile.vue
│   │   │   ├── ScreenshotCarousel.vue
│   │   │   └── TileContainer.vue
│   │   └── WorkExperienceItem.vue
│   ├── dialogs/
│   │   ├── ProjectDialog.vue
│   │   └── ScreenshotDialog.vue
│   └── views/
│       ├── About.vue
│       ├── Projects.vue
│       └── WorkExperience.vue
├── package.json
├── vite.config.js
└── README.md
```

# Project Overview

**PortfolioWebsiteVue3** is a single-page application (SPA) built using Vue 3, Vite, and Vuetify. The project serves as a personal portfolio website, showcasing sections such as About Me, Projects, and Work Experience. It leverages Vuetify for UI components and styling, providing a responsive and visually appealing interface.

# Detailed Explanation

## Key Features

1. **Single Page Layout**: The entire website is structured within a single `App.vue` component, eliminating the need for multiple routes. Different sections like About Me, Projects, and Work Experience are rendered within this main component.

2. **Multiple Views in App.vue**: Instead of using a router to navigate between different pages, all views are embedded within `App.vue`. Users can navigate between sections through the navigation bar, which scrolls to the respective sections smoothly.

3. **Responsive Design**: The application is designed to be fully responsive, adjusting layouts and component sizes based on the viewport width. Media queries and dynamic sizing are utilized to ensure optimal display across devices.

4. **Vuetify Integration**: Vuetify is integrated as the UI library, providing a wide range of pre-built components like `v-app`, `v-card`, `v-btn`, and more. Custom themes and styles are applied to match the desired aesthetics.

5. **Mock API Services**: Data for projects, work experience, and about sections are fetched from a mock API implemented in `services/mockApi.js`. This simulates asynchronous data fetching and can be easily replaced with real API calls in the future.

6. **Interactive Components**:
   - **Project Dialogs**: Clicking on a project tile opens a dialog with detailed information and a screenshot carousel.
   - **Screenshot Carousel**: Allows users to navigate through multiple screenshots of a project with responsive controls.
   - **Work Experience Items**: Display detailed information about each job experience with responsive avatars.

7. **State Management**: While the project currently doesn't use Vuex or another state management library, component states are managed locally, making the application lightweight and straightforward.

## Important Components and Their Roles

- **App.vue**: The root component that structures the main layout, including the navigation bar, main content sections (About Me, Projects, Work Experience), and the footer.

- **NavBar.vue**: A common component that provides navigation buttons to scroll to different sections of the page. It also includes a responsive navigation drawer for smaller screens.

- **Footer.vue**: A common component that displays footer information, such as copyright.

- **About.vue**: A view component that presents information about the individual, including a profile image, descriptive text, skills, and education.

- **Projects.vue**: A view component that showcases featured and other projects using project tiles. It integrates `TileContainer` and `ProjectDialog` for interactive project displays.

- **WorkExperience.vue**: A view component that lists various work experiences using the `WorkExperienceItem` component.

- **ProjectTile.vue**: A component representing individual project tiles with images and titles. It emits events when a project is clicked to open the detailed dialog.

- **ScreenshotCarousel.vue**: A component that displays a carousel of project screenshots with navigation arrows and responsive height adjustments.

- **TileContainer.vue**: A container component that organizes multiple `ProjectTile` components in a responsive grid layout.

- **WorkExperienceItem.vue**: A component that displays individual work experience entries with responsive avatars and detailed descriptions.

- **ProjectDialog.vue**: A dialog component that presents detailed information about a selected project, including a screenshot carousel and navigation between projects.

- **ScreenshotDialog.vue**: A dialog component that shows enlarged screenshots when clicked.

## Current Implementation Details

- **No Vue Router**: The project does not utilize Vue Router for navigation. Instead, all content is managed within `App.vue`, and navigation between sections is handled through scrolling to specific HTML elements identified by IDs.

- **Responsive Sizing**: Many components adjust their sizes and layouts based on the viewport size, ensuring that the website is mobile-friendly and provides a good user experience across devices.

- **Scoped Styles**: Styles are scoped to individual components to prevent CSS conflicts and ensure modularity.

- **Data Handling**: The project uses a mock API service (`mockApi.js`) to simulate fetching data. This setup allows for easy integration with real APIs in the future without significant changes to the component logic.

## Technologies Used

- **Vue 3**: The progressive JavaScript framework used for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Vuetify**: A popular Vue UI library with beautifully handcrafted Material Design components.
- **Sass**: A CSS preprocessor used for more efficient and maintainable styling.
- **@mdi/font**: Material Design Icons used within Vuetify components.
