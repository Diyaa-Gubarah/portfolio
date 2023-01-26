import images from "../constants/images";

export interface ITestimonial {
    name: string;
    occupation: string;
    feedback: string;
    image: string;
}


const testimonials: ITestimonial[] = [
    {
        name: 'TESTIMONIALS_NAME_1',
        occupation: 'Software Engineer',
        feedback: 'TESTIMONIALS_DESCRIPTION_1',
        image: images.avatar_1
    },
    {
        name: 'TESTIMONIALS_NAME_2',
        occupation: 'Product Manager',
        feedback: 'TESTIMONIALS_DESCRIPTION_2',
        image: images.avatar_3
    },
    {
        name: 'TESTIMONIALS_NAME_3',
        occupation: 'Entrepreneur',
        feedback: 'TESTIMONIALS_DESCRIPTION_3',
        image: images.avatar_2
    }
];


export default testimonials