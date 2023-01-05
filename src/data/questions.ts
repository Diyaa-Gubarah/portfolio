const QuestionData = [
    'What is the project scope?',
    'What is the timeline for the project?',
    'What type of work are you looking to hire for?',
    'What is the budget for the project?',
    'Do you have a domain and hosting set up, or will that be something I need to assist with?',
    'Do you have any content (text, images,design etc.) already prepared for the project, or will that be something I need to assist with?',
    'Do you have a project manager or point of contact who will be responsible for providing direction and feedback during the project?',
    'Will there be any changes or updates to the project scope after the initial agreement has been made?',
    'Are you open to suggestions or new ideas for the project?',
];


export type OptionProps = {
    id: string;
    question: string;
    name: string;
    value: string;
}


const ScopeOption: OptionProps[] = [
    { id: "1", question: QuestionData[0], name: 'Mobile app development', value: "scope_1" },
    { id: "2", question: QuestionData[0], name: 'Website development', value: "scope_2" },
    { id: "3", question: QuestionData[0], name: 'Server-side development', value: "scope_3" },
    { id: "4", question: QuestionData[0], name: 'Integration with third-party APIs', value: "scope_4" },
    { id: "5", question: QuestionData[0], name: 'Game development', value: "scope_5" },
    { id: "6", question: QuestionData[0], name: 'Data visualization', value: "scope_6" },
    { id: "7", question: QuestionData[0], name: 'Automation', value: "scope_7" },
    { id: "8", question: QuestionData[0], name: 'E-commerce development', value: "scope_8" },
    { id: "9", question: QuestionData[0], name: 'Internet of Things (IoT) development', value: "scope_9" },
    { id: "10", question: QuestionData[0], name: 'Machine learning', value: "scope_10" },
    { id: "11", question: QuestionData[0], name: 'Consulting and training', value: "scope_11" },
];


const TimeLineOption: OptionProps[] = [
    { id: "1", question: QuestionData[1], name: 'Within one month', value: "tl_1" },
    { id: "2", question: QuestionData[1], name: 'Within two months', value: "tl_2" },
    { id: "3", question: QuestionData[1], name: 'Within three months', value: "tl_3" },
    { id: "4", question: QuestionData[1], name: 'Within six months', value: "tl_4" },
    { id: "5", question: QuestionData[1], name: 'On going', value: "tl_5" },
];

const HireOption: OptionProps[] = [
    { id: "1", question: QuestionData[2], name: 'Full-time', value: "hire_1" },
    { id: "2", question: QuestionData[2], name: 'Part-time', value: "hire_2" },
    { id: "3", question: QuestionData[2], name: 'Project-based', value: "hire_3" },
    { id: "4", question: QuestionData[2], name: 'Contract', value: "hire_4" },
    { id: "5", question: QuestionData[2], name: 'Ongoing support/maintenance', value: "hire_5" },
];


const BudgetOption: OptionProps[] = [
    { id: "1", question: QuestionData[3], name: '$250-$500', value: "budget_1" },
    { id: "2", question: QuestionData[3], name: '$500-$1,000', value: "budget_2" },
    { id: "3", question: QuestionData[3], name: '$1,000-$5,000', value: "budget_3" },
    { id: "4", question: QuestionData[3], name: '$5,000-$10,000', value: "budget_4" },
    { id: "5", question: QuestionData[3], name: 'Over $10,000', value: "budget_5" },
    { id: "6", question: QuestionData[3], name: 'Not sure, we can discuss budget later', value: "budget_6" },
];


const HostOption: OptionProps[] = [
    { id: "1", question: QuestionData[4], name: 'I have a domain and hosting', value: "host_1" },
    { id: "2", question: QuestionData[4], name: 'I do not have a domain and hosting', value: "host" },
];



const AssetsOption: OptionProps[] = [
    { id: "1", question: QuestionData[5], name: 'I have all content prepared', value: "assets_1" },
    { id: "2", question: QuestionData[5], name: 'I will need assistance with content creation', value: "assets_2" },
];


const YesNowOption1: OptionProps[] = [
    { id: "1", question: QuestionData[6], name: `Yes, I have`, value: "yes" },
    { id: "2", question: QuestionData[6], name: `No, I don't have`, value: "no" },
];


const YesNowOption2: OptionProps[] = [
    { id: "1", question: QuestionData[7], name: 'Yes, and I will consider any additional fees.', value: "yes" },
    { id: "2", question: QuestionData[7], name: 'No, just the initial agreement.', value: "no" },
];



const YesNowOption3: OptionProps[] = [
    { id: "1", question: QuestionData[8], name: 'Yes, I will be happy', value: "yes" },
    { id: "2", question: QuestionData[8], name: 'No, thanks', value: "no" },
];






export type Question = {
    id: string;
    question: string;
    options: OptionProps[];
}


export default [
    { id: "1", question: 'What is the project scope?', options: ScopeOption },
    { id: "2", question: 'What is the timeline for the project?', options: TimeLineOption },
    { id: "3", question: 'What type of work are you looking to hire for?', options: HireOption },
    { id: "4", question: 'What is the budget for the project?', options: BudgetOption },
    { id: "5", question: 'Do you have a domain and hosting set up, or will that be something I need to assist with?', options: HostOption },
    { id: "6", question: 'Do you have any content (text, images,design etc.) already prepared for the project, or will that be something I need to assist with?', options: AssetsOption },
    { id: "7", question: 'Do you have a project manager or someone who will be responsible for providing direction and feedback during the project?', options: YesNowOption1 },
    { id: "8", question: 'Will there be any changes or updates to the project scope after the initial agreement has been made?', options: YesNowOption2 },
    { id: "9", question: 'Are you open to suggestions or new ideas for the project?', options: YesNowOption3 },
]