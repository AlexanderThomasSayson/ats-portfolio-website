import * as React from "react";
import { Cards } from "../../cards/Cards";

export const Techstacks = () => {
  const cards = [
    {
      title: "AWS",
      description:
        "Deploys applications and configures cloud storage using core AWS services such as EC2, RDS, S3, and Lambda.",
      image: "/images/aws.png",
      alt: "AWS logo",
    },
    {
      title: "Spring Boot",
      description:
        "Builds robust backend systems using Java, with a focus on microservices architecture and service-oriented design.",
      image: "/images/spring.png",
      alt: "Spring Boot logo",
    },
    {
      title: "MySQL",
      description:
        "Implements MySQL for designing and maintaining structured relational databases with a focus on performance and reliability.",
      image: "/images/mysql.png",
      alt: "MySQL logo",
    },
    {
      title: "Postgres",
      description:
        "Utilizes PostgreSQL for designing robust, scalable, and ACID-compliant relational database architectures.",
      image: "/images/postgres.png",
      alt: "Postgres logo",
    },
    {
      title: "Git",
      description:
        "Integrates Git into the development lifecycle for source control, automated deployment, and CI/CD pipelines.",
      image: "/images/git.png",
      alt: "Git logo",
    },
    {
      title: "React JS",
      description:
        "Incorporate React JS in full-stack projects for building efficient front-end interfaces that communicate with RESTful and real-time APIs.",
      image: "/images/react.png",
      alt: "React logo",
    },

    {
      title: "Next.js",
      description:
        "Build fast, SEO-friendly, and scalable web applications using the React-based Next.js framework with server-side rendering and API routes.",
      image: "/images/next-white.png",
      alt: "Next.js logo",
    },
    {
      title: "React Native",
      description:
        "Develop cross-platform mobile applications for iOS and Android using React Native’s powerful component-based architecture and native performance.",
      image: "/images/react-native.png",
      alt: "React Native logo",
    },
    {
      title: "Android Studio",
      description:
        "Create and debug native Android applications using Android Studio, the official IDE for Android development, equipped with powerful tools and emulators.",
      image: "/images/android-studio-logo.png",
      alt: "Android Studio logo",
    },

    {
      title: "Node JS",
      description:
        "Leverages JavaScript as a foundation for full-stack development, integrating seamlessly with frameworks like React and Node.js.",
      image: "/images/node-js.png",
      alt: "React logo",
    },
    {
      title: "Python",
      description:
        "Develops AI/ML solutions using Python libraries, focusing on model training, hyperparameter tuning, and performance optimization for real-world data sets.",
      image: "/images/python-1.png",
      alt: "Python logo",
    },
    {
      title: "Docker",
      description:
        "Utilizes Docker to containerize applications, ensuring consistent development, testing, and deployment environments across platforms.",
      image: "/images/docker.png",
      alt: "Docker logo",
    },
  ];

  return (
    <section
      id="about"
      className="flex justify-center py-10 px-4"
      style={{ backgroundColor: "#1B1B1B" }}
    >
      <div className="flex flex-col w-full max-w-6xl">
        {/* Header and Description */}
        <div className="flex flex-col items-center text-left mb-12">
          <h2 className="text-4xl font-semibold dark:text-gray-500 text-black mb-4">
            I undertook intensive
            <span className="text-white"> bootcamp training</span> and acquired
            <span className="text-white"> certifications</span> in
            <span className="text-white"> full-stack development</span>, gaining
            hands-on experience with the following technologies:
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Cards key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
