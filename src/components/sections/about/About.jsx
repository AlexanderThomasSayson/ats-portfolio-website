export const About = () => {
  return (
    <section id="about" className="bg-gray-100 flex justify-center py-10 px-4">
      <div className="flex flex-col w-full max-w-6xl">
        {/* Header and Description */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-semibold dark:text-black text-black mb-4">
            Dreams take shape in code.
          </h2>
          <p className="text-lg dark:text-gray-500 text-gray-800 max-w-3xl">
            I believe that every dream holds the potential to become reality. In
            software engineering, even the most complex ideas can be transformed
            into fully functional applications—crafted through logic,
            creativity, and unwavering persistence. Built brick by brick, line
            by line, every line of code brings vision to life.
          </p>
        </div>

        {/* Bottom Black Section */}
        <div className="flex justify-between text-white p-8 rounded-xl gap-x-11">
          <div className="flex-1 text-center">
            <div className="flex flex-col items-left text-left mb-12">
              <h2 className="text-4xl font-semibold dark:text-black text-black mb-4">
                Creativity
              </h2>
              <p className="text-lg dark:text-gray-500 text-gray-800 max-w-3xl">
                My craftsmanship stems from a deep-rooted passion for building
                innovative solutions. It reflects my ability to think beyond
                conventional boundaries, approach challenges creatively, and
                deliver results that are both functional and impactful.
              </p>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex flex-col items-left text-left mb-12">
              <h2 className="text-4xl font-semibold dark:text-black text-black mb-4">
                Adaptability
              </h2>
              <p className="text-lg dark:text-gray-500 text-gray-800 max-w-3xl">
                I've learned through experience that being adaptable—whether to
                changing project requirements, new technologies, or shifting
                priorities is an important trait for any developer. It's
                something I continue to work on and value throughout my journey
                in software development.
              </p>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="flex flex-col items-left text-left mb-12">
              <h2 className="text-4xl font-semibold dark:text-black text-black mb-4">
                Strategy
              </h2>
              <p className="text-lg dark:text-gray-500 text-gray-800 max-w-3xl">
                Clean architecture and well-written code are essential for
                building maintainable and scalable systems. It's one of the most
                valuable strategy and something I strive to apply in every
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
