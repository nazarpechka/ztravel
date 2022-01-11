const DestinationCard = ({ img, name }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${img})`,
      }}
      className="w-52 h-60 bg-cover py-2 px-4 flex items-end rounded-md shadow-lg transform hover:-translate-y-2 transition duration-200"
    >
      <span className="text-lg font-bold text-white">{name}</span>
    </div>
  );
};

export default DestinationCard;
