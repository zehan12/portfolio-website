export interface Experience {
    companyName: string;
    title: string;
    logo: string;
    name: string;
    color: string;
    overlayColor: string;
    subTitle: string;
}

export const experience: readonly Experience[] = [
    {
        companyName: "Hootboard",
        title: "Software Engineeer",
        logo: "/hb.jpg",
        name: "hootboard",
        color: "bg-[#FFFFFF]",
        overlayColor: "bg-[#0263F0]",
        subTitle:
            "Revolutionized user experiences with a seamless onboarding flow, developed an intuitive admin interface, integrated AI/ML for facial recognition, and created APIs for efficient data processing and real-time communication.",
    },
    {
        companyName: "Alt Campus",
        title: "Full Stack Developer",
        logo: "/alt.jpg",
        name: "altcampus",
        color: "bg-[#223869]",
        overlayColor: "bg-[#37B667]",
        subTitle:
            "Spearheaded the development and deployment of multiple dynamic and responsive web applications, leveraging modern technologies to enhance user engagement and functionality. Led cross-functional teams in project management, ensuring timely delivery and high-quality standards.",
    },
] as const;
