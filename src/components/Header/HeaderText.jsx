const HeaderText = () => {
  return (
    <div className="lg:text-left lg:m-0 m-2 md:m-5 ">
      <h1 className="text-md font-normal mb-4 leading-5 lg:text-2xl lg:font-bold lg:leading-tight">
        At CruzNegra, we believe technology should solve problems and inspire
        trust, creativity, and exclusivity.
      </h1>
      <div className="text-center lg:text-left items-center lg:items-start flex justify-center lg:justify-start mt-4">
        {/* Contenedor para alinear el botón */}
        <a
          href="#form"
          type="button"
          className="bg-white text-black_cruznegra px-4 py-2 text-sm rounded-md border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all"
        >
          Let's Talk
        </a>
      </div>
    </div>
  );
};

export default HeaderText;
