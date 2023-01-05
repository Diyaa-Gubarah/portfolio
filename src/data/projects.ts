import images from "../constants/images";

export interface IProject {
    title: string;
    description: string;
    skills: string[];
    githubLink: string;
    projectLink: string;
    image: string;
    fields: string[];
}


const projects: IProject[] = [
    {
        title: 'E-commerce Website',
        description: 'This project is an e-commerce website built with React and TypeScript. It features a fully functional shopping cart and checkout process, as well as a responsive design for mobile devices. The backend is powered by Express and MongoDB.',
        skills: ['JavaScript', 'React', 'TypeScript', 'Styled Components', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/user/ecommerce-website',
        projectLink: 'https://ecommerce-website.com',
        image: images.moc_1,
        fields: ['Web Development', 'E-commerce']
    },
    {
        title: 'Recipe App',
        description: 'This project is a mobile app for searching and saving recipes. It was built with React Native and utilizes the Spoonacular API for recipe data. The app also includes a feature for creating grocery lists based on selected recipes. The backend is powered by Express and PostgreSQL.',
        skills: ['JavaScript', 'React Native', 'TypeScript', 'Express', 'PostgreSQL'],
        githubLink: 'https://github.com/user/recipe-app',
        projectLink: 'https://recipe-app.com',
        image: images.moc_2,
        fields: ['Mobile Development', 'API Integration']
    },
    {
        title: 'Task Manager',
        description: 'This project is a task management web application built with Vue.js and SCSS. It allows users to create, edit, and delete tasks, as well as organize them by project and priority. The backend is powered by Express and MongoDB.',
        skills: ['JavaScript', 'Vue.js', 'SCSS', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/user/task-manager',
        projectLink: 'https://task-manager.com',
        image: images.moc_3,
        fields: ['Web Development', 'Task Management']
    },
    {
        title: 'Weather App',
        description: 'This project is a weather forecasting mobile app built with Flutter. It utilizes the OpenWeatherMap API to retrieve current and forecasted weather data for a specific location. The app also includes a feature for saving and displaying the weather for multiple locations.',
        skills: ['Dart', 'Flutter', 'API Integration'],
        githubLink: 'https://github.com/user/weather-app',
        projectLink: 'https://weather-app.com',
        image: images.moc_4,
        fields: ['Mobile Development', 'API Integration']

    }]

export default projects