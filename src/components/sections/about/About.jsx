export const About = () => {
  return (
    <section id="quotes" className="bg-white flex justify-center py-10 px-4">
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

        {/* Bottom Responsive Section */}
        <div className="flex flex-col md:flex-row justify-between text-white p-4 md:p-8 rounded-xl gap-y-8 md:gap-x-8">
          {/* Card 1 */}
          <div className="flex-1 text-center">
            <div className="flex flex-col items-start text-left mb-6 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold dark:text-black text-black mb-4">
                Creativity
              </h2>
              <p className="text-base md:text-lg dark:text-gray-500 text-gray-800">
                My craftsmanship stems from a deep-rooted passion for building
                innovative solutions. It reflects my ability to think beyond
                conventional boundaries, approach challenges creatively, and
                deliver results that are both functional and impactful.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 text-center">
            <div className="flex flex-col items-start text-left mb-6 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold dark:text-black text-black mb-4">
                Adaptability
              </h2>
              <p className="text-base md:text-lg dark:text-gray-500 text-gray-800">
                I've learned through experience that being adaptable—whether to
                changing project requirements, new technologies, or shifting
                priorities—is an important trait for any developer. It's
                something I continue to work on and value throughout my journey
                in software development.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 text-center">
            <div className="flex flex-col items-start text-left mb-6 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold dark:text-black text-black mb-4">
                Strategy
              </h2>
              <p className="text-base md:text-lg dark:text-gray-500 text-gray-800">
                Clean architecture and well-written code are essential for
                building maintainable and scalable systems. It's one of the most
                valuable strategies and something I strive to apply in every
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
