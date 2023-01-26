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
        title: 'PROJECT_NAME_1',
        description: 'PROJECT_DESCRIPTION_1',
        skills: ['JavaScript', 'React', 'TypeScript', 'Styled Components', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/user/ecommerce-website',
        projectLink: 'https://ecommerce-website.com',
        image: images.moc_1,
        fields: ['Web Development', 'E-commerce']
    },
    {
        title: 'PROJECT_NAME_2',
        description: 'PROJECT_DESCRIPTION_2',
        skills: ['JavaScript', 'React Native', 'TypeScript', 'Express', 'PostgreSQL'],
        githubLink: 'https://github.com/user/recipe-app',
        projectLink: 'https://recipe-app.com',
        image: images.moc_2,
        fields: ['Mobile Development', 'API Integration']
    },
    {
        title: 'PROJECT_NAME_3',
        description: 'PROJECT_DESCRIPTION_3',
        skills: ['JavaScript', 'Vue.js', 'SCSS', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/user/task-manager',
        projectLink: 'https://task-manager.com',
        image: images.moc_3,
        fields: ['Web Development', 'Task Management']
    },
    {
        title: 'PROJECT_NAME_4',
        description: 'PROJECT_DESCRIPTION_4', skills: ['Dart', 'Flutter', 'API Integration'],
        githubLink: 'https://github.com/user/weather-app',
        projectLink: 'https://weather-app.com',
        image: images.moc_4,
        fields: ['Mobile Development', 'API Integration']

    }]

export default projects