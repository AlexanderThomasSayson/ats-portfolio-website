import "./Logo.css";

export const Logo = () => {
  return (
    <section id="logo" className="logo-section">
      <div className="logo-mask">
        <div className="carousel-track">
          {/* Manually added logos */}
          <img src="/images/next-js-white.png" alt="Spring" draggable="false" />
          <img src="/images/spring-gray.png" alt="Spring" draggable="false" />
          <img src="/images/react-js-gray.png" alt="React" draggable="false" />
          <img src="/images/git-gray.png" alt="Spring" draggable="false" />
          <img src="/images/aws-gray.png" alt="Spring" draggable="false" />
          <img src="/images/node-js-gray.png" alt="Spring" draggable="false" />
          <img src="/images/docker-gray.png" alt="Spring" draggable="false" />
          <img src="/images/python-1.png" alt="Spring" draggable="false" />
          {/* Duplicate logos for seamless loop */}
          <img src="/images/next-js-white.png" alt="Spring" draggable="false" />
          <img src="/images/spring-gray.png" alt="Spring" draggable="false" />
          <img src="/images/react-js-gray.png" alt="React" draggable="false" />
          <img src="/images/git-gray.png" alt="Spring" draggable="false" />
          <img src="/images/aws-gray.png" alt="Spring" draggable="false" />
          <img src="/images/node-js-gray.png" alt="Spring" draggable="false" />
          <img src="/images/docker-gray.png" alt="Spring" draggable="false" />
          <img src="/images/python-1.png" alt="Spring" draggable="false" />
        </div>
      </div>
    </section>
  );
};
