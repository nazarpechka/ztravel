import Nav from "./Nav";

const Hero = ({ img, heading, subheading, children }) => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${img})`,
        }}
        className="flex flex-col justify-between gap-16 text-white bg-cover"
      >
        <Nav />
        <div className="container m-auto py-32">
          <h2 className="text-8xl text-bold">{heading}</h2>
          <p className="text-2xl text-gray-200 pt-2">{subheading}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Hero;
