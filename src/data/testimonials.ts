import images from "../constants/images";

export interface ITestimonial {
    name: string;
    occupation: string;
    feedback: string;
    image: string;
}


const testimonials: ITestimonial[] = [
    {
        name: 'John Doe',
        occupation: 'Software Engineer',
        feedback: 'I hired this freelancer to build a web application for my company and was extremely satisfied with the result. They were able to deliver the project on time and exceeded my expectations. I highly recommend their services.',
        image: images.avatar_1
    },
    {
        name: 'Jane Smith',
        occupation: 'Product Manager',
        feedback: `I was very impressed with this freelancer's attention to detail and ability to understand my vision for the project.They were a pleasure to work with and I would definitely hire them again.`,
        image: images.avatar_3
    },
    {
        name: 'Bob Williams',
        occupation: 'Entrepreneur',
        feedback: 'I had a great experience working with this freelancer. They were able to take my idea and turn it into a fully functional product. I highly recommend them for any project.',
        image: images.avatar_2
    }
];


export default testimonials