interface Config {
    title: string;
    description: string;
    index: number;
}

export const JOB_CONFIG: Config[] = [
    {
        title: "Java & C Programmer",
        description: "Use Spring framework along with C/C++ to deliver high-quality software solutions.",
        index: 0
    },
    {
        title: "Marketing Specialist",
        description: "Develop and execute marketing strategies to promote products or services.",
        index: 1
    },
    {
        title: "Graphic Designer",
        description: "Create visually appealing designs for various digital and print media.",
        index: 2
    }
];

interface ModalContent {
    title: string;
    idealCandidate: string;
    requireSkills: string[];
    requirements: string[];
    howToApply: string;
}

export const JOB_MODAL_CONFIG: ModalContent[] = [
    {
        title: "Java & C Programmer",
        idealCandidate: "Are you an experienced Java programmer with expertise in Spring framework and C/C++? We're looking for someone who can use the JNI (Java Native Interface) to deliver high-quality software solutions.",
        requireSkills: ["Java", "Spring", "JNI", "C/C++", "Problem-solving"],
        requirements: [
            "Bachelor's degree in Computer Science or related field",
            "Proven experience in Java software development, with a focus on Spring framework",
            "Strong understanding of database integration concepts and technologies",
            "Good knowledge of C programming language",
            "Good knowledge of C++ programming language",
            "Strong leadership and project management skills",
            "Excellent communication and teamwork abilities",
            "Ability to prioritize tasks and meet deadlines"
        ],
        howToApply: "If you're ready to take on the challenge of leading a team to success, apply now by emailing your resume to"
    },
    {
        title: "Marketing Specialist",
        idealCandidate: "Do you have a passion for marketing and promoting products or services? We're seeking a marketing specialist to develop and execute effective marketing strategies.",
        requireSkills: ["Marketing", "Digital Marketing", "Market Research", "Communication", "Creativity"],
        requirements: [
            "Bachelor's degree in Marketing, Business, or related field",
            "Proven experience in marketing or advertising",
            "Knowledge of digital marketing platforms and tools",
            "Strong analytical and problem-solving skills",
            "Excellent communication and presentation abilities"
        ],
        howToApply: "Ready to make an impact in the world of marketing? Apply now by sending your resume and cover letter to"
    },
    {
        title: "Graphic Designer",
        idealCandidate: "Are you a creative thinker with an eye for design? Join our team as a graphic designer and create visually appealing designs for various digital and print media.",
        requireSkills: ["Adobe Creative Suite", "Graphic Design", "Typography", "Creativity", "Attention to Detail"],
        requirements: [
            "Bachelor's degree in Graphic Design or related field",
            "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
            "Strong portfolio showcasing creative design work",
            "Excellent attention to detail and time management skills",
            "Ability to work collaboratively and take direction"
        ],
        howToApply: "Ready to unleash your creativity as a graphic designer? Apply now by submitting your portfolio and resume to"
    }
];
