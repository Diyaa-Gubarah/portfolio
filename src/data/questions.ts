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
    { id: "1", question: QuestionData[0], name: "SERVICES_NAME_1", value: "scope_1" },
    { id: "2", question: QuestionData[0], name: "SERVICES_NAME_2", value: "scope_2" },
    { id: "3", question: QuestionData[0], name: "SERVICES_NAME_3", value: "scope_3" },
    { id: "4", question: QuestionData[0], name: "SERVICES_NAME_4", value: "scope_4" },
    { id: "5", question: QuestionData[0], name: "SERVICES_NAME_5", value: "scope_5" },
    { id: "6", question: QuestionData[0], name: "SERVICES_NAME_6", value: "scope_6" },
    { id: "7", question: QuestionData[0], name: "SERVICES_NAME_7", value: "scope_7" },
    { id: "8", question: QuestionData[0], name: "SERVICES_NAME_8", value: "scope_8" },
    { id: "9", question: QuestionData[0], name: "SERVICES_NAME_9", value: "scope_9" },
    { id: "10", question: QuestionData[0], name: "SERVICES_NAME_10", value: "scope_10" },
    { id: "11", question: QuestionData[0], name: "SERVICES_NAME_11", value: "scope_11" },
];


const TimeLineOption: OptionProps[] = [
    { id: "1", question: QuestionData[1], name:"FORM_Q2_A1", value: "tl_1" },
    { id: "2", question: QuestionData[1], name:"FORM_Q2_A2", value: "tl_2" },
    { id: "3", question: QuestionData[1], name:"FORM_Q2_A3", value: "tl_3" },
    { id: "4", question: QuestionData[1], name:"FORM_Q2_A4", value: "tl_4" },
    { id: "5", question: QuestionData[1], name:"FORM_Q2_A5", value: "tl_5" },
];

const HireOption: OptionProps[] = [
    { id: "1", question: QuestionData[2], name:"FORM_Q3_A1", value: "hire_1" },
    { id: "2", question: QuestionData[2], name:"FORM_Q3_A2", value: "hire_2" },
    { id: "3", question: QuestionData[2], name:"FORM_Q3_A3", value: "hire_3" },
    { id: "4", question: QuestionData[2], name:"FORM_Q3_A4", value: "hire_4" },
    { id: "5", question: QuestionData[2], name:"FORM_Q3_A5", value: "hire_5" },
];


const BudgetOption: OptionProps[] = [
    { id: "1", question: QuestionData[3], name:"FORM_Q4_A1", value: "budget_1" },
    { id: "2", question: QuestionData[3], name:"FORM_Q4_A2", value: "budget_2" },
    { id: "3", question: QuestionData[3], name:"FORM_Q4_A3", value: "budget_3" },
    { id: "4", question: QuestionData[3], name:"FORM_Q4_A4", value: "budget_4" },
    { id: "5", question: QuestionData[3], name:"FORM_Q4_A5", value: "budget_5" },
    { id: "6", question: QuestionData[3], name:"FORM_Q4_A6", value: "budget_6" },
];


const HostOption: OptionProps[] = [
    { id: "1", question: QuestionData[4], name:"FORM_Q5_A1", value: "host_1" },
    { id: "2", question: QuestionData[4], name:"FORM_Q5_A2", value: "host" },
];



const AssetsOption: OptionProps[] = [
    { id: "1", question: QuestionData[5], name:"FORM_Q6_A1", value: "assets_1" },
    { id: "2", question: QuestionData[5], name:"FORM_Q6_A2", value: "assets_2" },
];


const YesNowOption1: OptionProps[] = [
    { id: "1", question: QuestionData[6], name:"FORM_Q7_A1", value: "yes" },
    { id: "2", question: QuestionData[6], name:"FORM_Q7_A2", value: "no" },
];


const YesNowOption2: OptionProps[] = [
    { id: "1", question: QuestionData[7], name:"FORM_Q8_A1", value: "yes" },
    { id: "2", question: QuestionData[7], name:"FORM_Q8_A2", value: "no" },
];



const YesNowOption3: OptionProps[] = [
    { id: "1", question: QuestionData[8], name:"FORM_Q9_A1", value: "yes" },
    { id: "2", question: QuestionData[8], name:"FORM_Q9_A2", value: "no" },
];






export type Question = {
    id: string;
    question: string;
    options: OptionProps[];
}


export default [
    { id: "1", question: 'FORM_Q1', options: ScopeOption },
    { id: "2", question: "FORM_Q2", options: TimeLineOption },
    { id: "3", question: "FORM_Q3", options: HireOption },
    { id: "4", question: "FORM_Q4", options: BudgetOption },
    { id: "5", question: "FORM_Q5", options: HostOption },
    { id: "6", question: "FORM_Q6", options: AssetsOption },
    { id: "7", question: "FORM_Q7", options: YesNowOption1 },
    { id: "8", question: "FORM_Q8", options: YesNowOption2 },
    { id: "9", question: "FORM_Q9", options: YesNowOption3 },
]