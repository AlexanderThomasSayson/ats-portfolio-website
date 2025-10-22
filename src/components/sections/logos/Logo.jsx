import "./Logo.css";

export const Logo = () => {
  return (
    <section id="logo" className="logo-section">
      <div className="logo-mask">
        <div className="carousel-track">
          {/* Manually added logos */}
          <img src="/images/spring.png" alt="Spring" />
          <img src="/images/react.png" alt="React" />
          <img src="/images/git.png" alt="Spring" />
          <img src="/images/aws.png" alt="Spring" />
          <img src="/images/node-js.png" alt="Spring" />
          <img src="/images/docker.png" alt="Spring" />
          <img src="/images/python-1.png" alt="Spring" />
          {/* Duplicate logos for seamless loop */}
          <img src="/images/spring.png" alt="Spring" />
          <img src="/images/react.png" alt="React" />
          <img src="/images/git.png" alt="Spring" />
          <img src="/images/aws.png" alt="Spring" />
          <img src="/images/node-js.png" alt="Spring" />
          <img src="/images/docker.png" alt="Spring" />
          <img src="/images/python-1.png" alt="Spring" />
        </div>
      </div>
    </section>
  );
};
