import "./Logo.css";

export const Logo = () => {
  return (
    <section id="logo" className="logo-section">
      <div className="logo-mask">
        <div className="carousel-track">
          {/* Manually added logos */}
          <img src="/images/spring.png" alt="Spring" draggable="false" />
          <img src="/images/react.png" alt="React" draggable="false" />
          <img src="/images/git.png" alt="Spring" draggable="false" />
          <img src="/images/aws.png" alt="Spring" draggable="false" />
          <img src="/images/node-js.png" alt="Spring" draggable="false" />
          <img src="/images/docker.png" alt="Spring" draggable="false" />
          <img src="/images/python-1.png" alt="Spring" draggable="false" />
          {/* Duplicate logos for seamless loop */}
          <img src="/images/spring.png" alt="Spring" draggable="false" />
          <img src="/images/react.png" alt="React" draggable="false" />
          <img src="/images/git.png" alt="Spring" draggable="false" />
          <img src="/images/aws.png" alt="Spring" draggable="false" />
          <img src="/images/node-js.png" alt="Spring" draggable="false" />
          <img src="/images/docker.png" alt="Spring" draggable="false" />
          <img src="/images/python-1.png" alt="Spring" draggable="false" />
        </div>
      </div>
    </section>
  );
};
