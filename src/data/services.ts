export interface Service {
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites designed to present your business professionally and convert visitors into customers.",
    features: [
      "Responsive Design",
      "Modern UI",
      "SEO Friendly",
      "Deployment",
    ],
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Complete web applications with frontend, backend, database, authentication, dashboards, and business workflows.",
    features: [
      "React Applications",
      "REST APIs",
      "Authentication",
      "PostgreSQL",
    ],
  },
  {
    title: "Python Backend & APIs",
    description:
      "Scalable backend systems and APIs built with Python for reliable business applications and integrations.",
    features: [
      "FastAPI",
      "Django",
      "REST APIs",
      "Database Integration",
    ],
  },
  {
    title: "AI Integration",
    description:
      "AI-powered features integrated into existing applications and business workflows to automate and improve processes.",
    features: [
      "LLM Integration",
      "AI Chatbots",
      "RAG",
      "AI Automation",
    ],
  },
  {
    title: "Automation",
    description:
      "Automate repetitive business processes with Python and intelligent workflows to save time and reduce manual work.",
    features: [
      "Python Automation",
      "API Automation",
      "Data Processing",
      "Workflow Automation",
    ],
  },
  {
    title: "Maintenance & Bug Fixing",
    description:
      "Improve, maintain, debug, and extend existing websites and web applications.",
    features: [
      "Bug Fixing",
      "Performance Improvements",
      "Feature Updates",
      "Technical Support",
    ],
  },
];