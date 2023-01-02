const OptionData = [
    { id: "1", option: "option 1", value: "op1" },
    { id: "2", option: "option 2", value: "op3" },
    { id: "3", option: "option 3", value: "op3" },
    { id: "4", option: "option 4", value: "op4" },
    { id: "5", option: "option 5", value: "op5" },
];


export type OptionProps = {
    id: string;
    name: string;
    value: string;
}


const ScopeOption: OptionProps[] = [
    { id: "1", name: 'Mobile app development', value: "scope_1" },
    { id: "2", name: 'Website development', value: "scope_2" },
    { id: "3", name: 'Server-side development', value: "scope_3" },
    { id: "4", name: 'Integration with third-party APIs', value: "scope_4" },
    { id: "5", name: 'Game development', value: "scope_5" },
    { id: "6", name: 'Data visualization', value: "scope_6" },
    { id: "7", name: 'Automation', value: "scope_7" },
    { id: "8", name: 'E-commerce development', value: "scope_8" },
    { id: "9", name: 'Internet of Things (IoT) development', value: "scope_9" },
    { id: "10", name: 'Machine learning', value: "scope_10" },
    { id: "11", name: 'Consulting and training', value: "scope_11" },
];


const TimeLineOption: OptionProps[] = [
    { id: "1", name: 'Within one month', value: "tl_1" },
    { id: "2", name: 'Within two months', value: "tl_2" },
    { id: "3", name: 'Within three months', value: "tl_3" },
    { id: "4", name: 'Within six months', value: "tl_4" },
    { id: "5", name: 'On going', value: "tl_5" },
];


const BudgetOption: OptionProps[] = [
    { id: "1", name: '$250-$500', value: "budget_1" },
    { id: "2", name: '$500-$1,000', value: "budget_2" },
    { id: "3", name: '$1,000-$5,000', value: "budget_3" },
    { id: "4", name: '$5,000-$10,000', value: "budget_4" },
    { id: "5", name: 'Over $10,000', value: "budget_5" },
    { id: "6", name: 'Not sure, we can discuss budget later', value: "budget_6" },
];


const HostOption: OptionProps[] = [
    { id: "1", name: 'I have a domain and hosting', value: "host_1" },
    { id: "2", name: 'I do not have a domain and hosting', value: "host" },
];



const AssetsOption: OptionProps[] = [
    { id: "1", name: 'I have all content prepared', value: "assets_1" },
    { id: "2", name: 'I will need assistance with content creation', value: "assets_2" },
];


const YesNowOption: OptionProps[] = [
    { id: "1", name: 'Yes', value: "yes" },
    { id: "2", name: 'No', value: "no" },
];


const HireOption: OptionProps[] = [
    { id: "1", name: 'Full-time', value: "hire_1" },
    { id: "2", name: 'Part-time', value: "hire_2" },
    { id: "3", name: 'Project-based', value: "hire_3" },
    { id: "4", name: 'Contract', value: "hire_4" },
    { id: "5", name: 'Ongoing support/maintenance', value: "hire_5" },
];



type Question = {
    id: string;
    question: string;
    options: [];
}


export default [
    { id: "1", question: '1. What is the project scope?', options: ScopeOption },
    { id: "2", question: '2. What is the timeline for the project?', options: TimeLineOption },
    { id: "3", question: '3. What type of work are you looking to hire for?', options: HireOption },
    { id: "4", question: '4. What is the budget for the project?', options: BudgetOption },
    { id: "5", question: '5. Do you have a domain and hosting set up, or will that be something I need to assist with?', options: HostOption },
    { id: "6", question: '6. Do you have any content (text, images,design etc.) already prepared for the project, or will that be something I need to assist with?', options: AssetsOption },
    { id: "7", question: '7. Do you have a project manager or point of contact who will be responsible for providing direction and feedback during the project?', options: YesNowOption },
    { id: "8", question: '8. Are you open to suggestions or new ideas for the project?', options: YesNowOption },
]