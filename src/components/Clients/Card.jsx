const TestimonialCard = ({ name, title, comment, image, rating }) => {
  const stars = Array(rating).fill("★");
  return (
    <div className="flex flex-col justify-between flex-1 lg:py-8 lg:px-7 bg-opacity-70 text-white p-6 md:p-4 px-8 md:px-6 rounded-t-lg backdrop-blur-md border-t border-l border-r transition-all border-neutral_lighter rounded-t-lg">
      <div className="flex-1">
        <div className="flex items-center">
          {/* Renderizamos las estrellas basadas en la puntuación */}
          {stars.map((star, index) => (
            <svg
              key={index}
              className="w-5 h-5 text-[#FDB241]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="flex-1 mt-8">
          <p className="text-lg leading-relaxed text-white">{comment}</p>
        </blockquote>
      </div>
      <div className="flex items-center mt-8">
        <img
          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
          src={image}
          alt={name}
        />
        <div className="ml-4">
          <p className="text-base font-bold text-white">{name}</p>
          <p className="mt-0.5 text-sm font-pj text-white">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
