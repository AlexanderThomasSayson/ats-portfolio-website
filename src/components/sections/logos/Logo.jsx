import "./Logo.css";

// Logo carousel is decorative - shows technology expertise
// Using aria-hidden to prevent screen reader confusion
export const Logo = () => {
  const logos = [
    { src: "/images/next-js-white.png", name: "Next.js" },
    { src: "/images/spring-gray.png", name: "Spring Boot" },
    { src: "/images/react-js-gray.png", name: "React" },
    { src: "/images/git-gray.png", name: "Git" },
    { src: "/images/aws-gray.png", name: "AWS" },
    { src: "/images/node-js-gray.png", name: "Node.js" },
    { src: "/images/docker-gray.png", name: "Docker" },
    { src: "/images/python-1.png", name: "Python" },
  ];

  return (
    <section
      id="logo"
      className="logo-section"
      aria-hidden="true"
      role="presentation"
    >
      <div className="logo-mask">
        <div className="carousel-track">
          {/* Primary logos */}
          {logos.map((logo, index) => (
            <img
              key={`primary-${index}`}
              src={logo.src}
              alt=""
              draggable="false"
            />
          ))}
          {/* Duplicate logos for seamless loop */}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo.src}
              alt=""
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
