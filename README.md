# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


EcoIntelligence Website
This repository contains the code for the EcoIntelligence website, a React application built to showcase the company's services and offerings. The website is designed to be visually appealing and user-friendly, providing easy navigation and access to key information.

Approach and Assumptions

Approach:
1. Component-Based Structure: The code is organized into reusable components for better maintainability and scalability.
2. Ant Design Framework: Utilizes Ant Design components for UI elements to ensure consistency and a polished look.
3. Smooth Scrolling: Implemented smooth scrolling functionality for seamless navigation between sections.
4. Responsive Design: Ensured the website is responsive across various devices for a consistent user experience.
5. Animations: Incorporated animations to make the website more engaging and visually appealing.
6. Interactivity: Provided interactive elements such as buttons and forms to encourage user engagement.

Assumptions:
1. Dependencies: Assumes that all necessary dependencies are installed and up to date.
2. Styling: Styling assumptions are made based on the CSS files provided in the App.css and inline styles within the components.
3. Images: Assumes all image assets are available in the specified paths (BG.png, service1.png, etc.).

Contents
1. App.js: Main React component containing the structure of the website, including header, content sections, and footer.
2. HeroSection.js: Component for the hero section of the website, showcasing the main message and a call-to-action button.
3. AboutUsSection.js: Component highlighting the company's values and providing a brief overview.
4. ServicesSection.js: Component displaying the company's services using a carousel for visual representation.
5. ContactUsSection.js: Component featuring a contact form for users to reach out to the company.
6. BG.png, service1.png, etc.: Image assets used in various sections of the website.
7. App.css: Stylesheet containing CSS rules for styling the components.

Unit Test Cases
1. Test the functionality of the contact form by inputting valid data and verifying that the form submits successfully.
2. Test the smooth scrolling functionality by clicking on navigation links and ensuring the page scrolls to the corresponding section smoothly.
3. Test the responsiveness of the website by accessing it on different devices and screen sizes, ensuring that the layout adjusts accordingly.