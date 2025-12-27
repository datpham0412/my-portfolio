export interface Experience {
  title: string
  company: string
  companyUrl: string
  period: string
  location: string
  type: string
  description: string
  achievements: string[]
}

export const experience: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Quest Payment Systems",
    companyUrl: "https://questps.com.au/",
    period: "Dec 2023 - Present",
    location: "Melbourne, Australia",
    type: "Software Development",
    description:
      "Built and maintained key platforms for both internal operations and external developers, including a developer portal,  and a market-intel mobile app.",
    achievements: [
      "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
      "Designed a real-time analytics dashboard (Redis + PostgreSQL) that kept FID under 100 ms at 10 K concurrent users.",
      "Implemented CI/CD pipelines and automated tests with Jenkins & S3, boosting deployment efficiency by 60 % and slashing infra costs by 80 %.",
      "Hardened API security with JWT auth and auto-expiring Redis-backed GUID endpoints.",
      "Lead development of a Flutter mobile app for market intelligence—aggregating terminal data across Australia to power operations-analytics and strategic planning."
    ],
  },
  {
    title: "Bartender & Customer Service",
    company: "Sam's Bar & Grill",
    companyUrl: "https://www.samsbargrill.com.au/",
    period: "2022 - 2023",
    location: "Melbourne, Australia",
    type: "Hospitality",
    description:
      "Fine dining restaurant experience showcasing exceptional communication and customer service skills.",
    achievements: [
      "Delivered premium dining experiences in a fast-paced fine dining environment, consistently maintaining high service standards.",
      "Developed strong communication and interpersonal skills through direct customer interaction and team collaboration.",
      "Managed multiple tables simultaneously while ensuring attention to detail and customer satisfaction.",
      "Collaborated effectively with kitchen staff and management to ensure smooth restaurant operations.",
    ],
  },
  {
    title: "Server & Food Service",
    company: "District Pho Restaurant",
    companyUrl: "https://www.instagram.com/districtpho?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    period: "2021 - 2022",
    location: "Melbourne, Australia",
    type: "Hospitality",
    description:
      "Customer-focused role in a busy Vietnamese restaurant, building foundational service and teamwork skills.",
    achievements: [
      "Provided friendly and efficient customer service in a high-volume restaurant environment.",
      "Gained valuable experience in multitasking, time management, and working under pressure.",
      "Developed cultural awareness and communication skills serving diverse customer base.",
      "Maintained high standards of food safety and restaurant cleanliness protocols.",
    ],
  },
] 