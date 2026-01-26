export const projects = [
  {
    id: "yamaha",
    slug: "yamaha",
    title: "Dealer Network Development",
    shortDescription:
      "A centralized ticketing and support platform for Yamaha Philippines, enhancing communication efficiency across its nationwide dealer network.",
    image: "/images/DND.png",
    logo: "/images/yamaha.png",
    size: "laptop",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Express",
      "Docker",
      "AWS",
    ],
    problem:
      "Yamaha Philippines faced significant challenges managing support requests and communications across their extensive dealer network. The existing system was fragmented, leading to delayed responses, lost tickets, and poor visibility into issue resolution times. Dealers had no standardized way to report issues, and the support team struggled to prioritize and track requests effectively.",
    solution:
      "I contributed to the development of a centralized ticketing platform that streamlined the entire support workflow. The system featured real-time ticket tracking, automated priority assignment based on issue severity, and a comprehensive dashboard for monitoring dealer communications. We implemented role-based access controls to ensure dealers only saw relevant information while giving administrators full visibility.",
    challenges: [
      "Integrating with legacy dealer management systems that had inconsistent data formats",
      "Designing a scalable architecture to handle high volumes of concurrent tickets during peak periods",
      "Implementing offline-first capabilities for dealers with unreliable internet connections",
      "Ensuring data synchronization across multiple regional offices",
    ],
    outcomes: [
      "Reduced average ticket resolution time by 40%",
      "Improved dealer satisfaction scores from 3.2 to 4.5 out of 5",
      "Enabled real-time tracking of over 500 daily support requests",
      "Decreased manual data entry by 60% through automated workflows",
    ],
    screenshots: ["/images/DND.png"],
    role: "Full Stack Developer",
    duration: "6 months",
    team: "5 developers",
  },
  {
    id: "payment",
    slug: "payment",
    title: "Payment Gateway",
    shortDescription:
      "A flexible and scalable backend payment gateway for seamless transactions via PayPal, Tremendous, and other providers.",
    image: "/images/payment.png",
    logo: "/images/bountiply.png",
    size: "phone",
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "PayPal API",
      "Tremendous API",
      "Redis",
      "Docker",
    ],
    problem:
      "The rewards platform needed a unified payment system that could handle multiple payout methods while maintaining compliance with financial regulations. Users expected instant payouts, but the existing manual process was slow, error-prone, and couldn't scale with the growing user base.",
    solution:
      "I engineered a microservices-based payment gateway that abstracted multiple payment providers behind a unified API. The system supported PayPal, Tremendous gift cards, and direct bank transfers. It included comprehensive transaction logging, automated retry logic for failed payments, and a reconciliation system to ensure accuracy.",
    challenges: [
      "Implementing idempotent payment processing to prevent duplicate transactions",
      "Handling webhook callbacks from multiple providers with different formats",
      "Building a robust queue system for processing high-volume payouts",
      "Ensuring PCI compliance while maintaining developer experience",
    ],
    outcomes: [
      "Processed over $2M in reward payouts within the first year",
      "Achieved 99.9% payment success rate with automated retry logic",
      "Reduced payout processing time from 24 hours to under 5 minutes",
      "Supported 3 payment providers with a single unified API",
    ],
    screenshots: ["/images/payment.png"],
    role: "Backend Developer",
    duration: "4 months",
    team: "3 developers",
  },
  {
    id: "airevent",
    slug: "airevent",
    title: "Air Event Gala",
    shortDescription:
      "An engaging event creation system that enables users to design, customize, and manage interactive events with drag-and-drop interface.",
    image: "/images/air-event-page.png",
    logo: "/images/air-event-logo.png",
    size: "laptop",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "AWS S3",
      "CloudFront",
    ],
    problem:
      "US-based event organizers needed a platform to create and manage virtual galas and interactive events. Existing solutions were either too complex for non-technical users or lacked the customization options needed for branded corporate events.",
    solution:
      "I played a key role in developing an intuitive event creation system with drag-and-drop functionality. Users could customize every aspect of their event pages, from layouts to interactive elements like live polls, Q&A sessions, and virtual networking rooms. The platform included real-time attendee engagement tracking and post-event analytics.",
    challenges: [
      "Building a performant drag-and-drop editor that worked across all devices",
      "Implementing real-time synchronization for live event interactions",
      "Optimizing video streaming quality while minimizing bandwidth usage",
      "Creating a white-label system that could match any brand's design guidelines",
    ],
    outcomes: [
      "Enabled creation of over 200 virtual events for corporate clients",
      "Achieved average attendee engagement rates of 78%",
      "Reduced event setup time by 70% compared to custom development",
      "Supported concurrent viewership of up to 10,000 attendees per event",
    ],
    screenshots: ["/images/air-event-page.png"],
    role: "Frontend Developer",
    duration: "8 months",
    team: "6 developers",
  },
  {
    id: "redyoos",
    slug: "redyoos",
    title: "Redyoos",
    shortDescription:
      "An AI-powered jewelry valuation platform with two-way communication and PayPal payment integration for seamless user orders.",
    image: "/images/redyoos-page.png",
    logo: "/images/redyoos-logo-white.png",
    size: "tablet",
    technologies: [
      "React Native",
      "Python",
      "TensorFlow",
      "Node.js",
      "PayPal API",
      "MongoDB",
    ],
    problem:
      "Traditional jewelry valuation required in-person expert assessments, which were time-consuming and inaccessible to many users. Sellers needed a quick, reliable way to get initial valuations before committing to formal appraisals or sales.",
    solution:
      "I developed key features for an AI-powered platform that provides instant preliminary jewelry valuations through image analysis. The system used computer vision to identify jewelry types, estimate material quality, and provide value ranges. I built the two-way communication module for user-expert interactions and integrated PayPal for processing premium valuation orders.",
    challenges: [
      "Training AI models to accurately identify various jewelry types and conditions",
      "Building a real-time chat system with image sharing capabilities",
      "Implementing secure payment flows for different service tiers",
      "Ensuring mobile app performance with heavy image processing",
    ],
    outcomes: [
      "Processed over 5,000 jewelry valuations in the first 6 months",
      "Achieved 85% accuracy in preliminary value estimations",
      "Reduced user wait time from days to under 2 minutes for initial valuations",
      "Increased user conversion by 45% through instant feedback",
    ],
    screenshots: ["/images/redyoos-page.png"],
    role: "Mobile & Backend Developer",
    duration: "5 months",
    team: "4 developers",
  },
  {
    id: "textract",
    slug: "textract",
    title: "Document and Text Extractor",
    shortDescription:
      "A text extraction system engineered to automate text detection around receipts and documents using OCR technology.",
    image: "/images/textract-v2.png",
    logo: null,
    size: "laptop",
    technologies: [
      "Python",
      "AWS Textract",
      "OpenCV",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    problem:
      "Manual data entry from receipts and documents was consuming significant resources and introducing errors. The rewards platform needed to automatically process expense receipts to validate and credit user rewards, but existing OCR solutions had poor accuracy with varied document formats.",
    solution:
      "I created an automated document processing pipeline using AWS Textract combined with custom pre-processing algorithms. The system handled image preprocessing (deskewing, contrast enhancement), intelligent field extraction, and data validation. It could process various document types including receipts, invoices, and forms with high accuracy.",
    challenges: [
      "Handling low-quality images from mobile phone cameras",
      "Extracting structured data from unstructured receipt formats",
      "Building confidence scoring to flag documents needing human review",
      "Optimizing processing costs while maintaining throughput",
    ],
    outcomes: [
      "Achieved 94% accuracy in automated data extraction",
      "Processed over 50,000 documents per month",
      "Reduced manual review requirements by 75%",
      "Cut document processing costs by 60% compared to manual entry",
    ],
    screenshots: ["/images/textract-v2.png"],
    role: "Backend Developer",
    duration: "3 months",
    team: "2 developers",
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "E-commerce Fullstack",
    shortDescription:
      "A full-stack e-commerce platform designed for scalability, security, and seamless user experience across all devices.",
    image: "/images/ats-e-commerce.png",
    logo: null,
    size: "tablet",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "Tailwind CSS",
    ],
    problem:
      "Small to medium businesses needed an affordable, customizable e-commerce solution that didn't require extensive technical knowledge to manage. Existing platforms were either too expensive, too limited in customization, or required significant development effort to deploy.",
    solution:
      "I engineered a complete e-commerce platform featuring product management, shopping cart functionality, secure checkout with Stripe integration, and an intuitive admin dashboard. The platform was built with SEO optimization, responsive design, and performance as core priorities. It included inventory management, order tracking, and customer analytics.",
    challenges: [
      "Implementing secure payment processing with proper error handling",
      "Building a performant product search with filtering and pagination",
      "Creating a flexible admin interface for non-technical users",
      "Optimizing page load times for product-heavy catalogs",
    ],
    outcomes: [
      "Achieved Lighthouse performance score of 95+",
      "Supported catalogs of up to 10,000 products with sub-second search",
      "Reduced checkout abandonment by 30% through UX improvements",
      "Enabled deployment in under 1 hour with customizable templates",
    ],
    screenshots: ["/images/ats-e-commerce.png"],
    role: "Full Stack Developer",
    duration: "Personal Project",
    team: "Solo",
  },
];

export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};

export const getAllProjectSlugs = () => {
  return projects.map((project) => project.slug);
};
