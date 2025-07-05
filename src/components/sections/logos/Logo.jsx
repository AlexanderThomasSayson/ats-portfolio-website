import "./Logo.css";

export const Logo = () => {
  return (
    <section id="logo" className="logo-section">
      <div className="logo-mask">
        <div className="carousel-track">
          {/* Manually added logos */}
          <img src="/src/assets/images/spring.png" alt="Spring" />
          <img src="/src/assets/images/react.png" alt="React" />
          <img src="/src/assets/images/git.png" alt="Spring" />
          <img src="/src/assets/images/aws.png" alt="Spring" />
          <img src="/src/assets/images/node-js.png" alt="Spring" />
          <img src="/src/assets/images/docker.png" alt="Spring" />
          <img src="/src/assets/images/python-1.png" alt="Spring" />
          {/* Duplicate logos for seamless loop */}
          <img src="/src/assets/images/spring.png" alt="Spring" />
          <img src="/src/assets/images/react.png" alt="React" />
          <img src="/src/assets/images/git.png" alt="Spring" />
          <img src="/src/assets/images/aws.png" alt="Spring" />
          <img src="/src/assets/images/node-js.png" alt="Spring" />
          <img src="/src/assets/images/docker.png" alt="Spring" />
          <img src="/src/assets/images/python-1.png" alt="Spring" />
        </div>
      </div>
    </section>
  );
};
