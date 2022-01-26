const Section = ({ heading, className, children }) => {
  return (
    <section
      className={
        "container mx-auto py-8 flex flex-col gap-8 items-center " + className
      }
    >
      <h3 className="text-4xl text-center">{heading}</h3>
      {children}
    </section>
  );
};

export default Section;
