// src/components/Card.jsx

const Card = ({ name, image }) => {
  return (
    <div className="relative flex flex-col my-6 bg-slate-500/10 shadow-sm border border-slate-500/20 rounded-lg hover:border-orange-600 items-center hover:scale-105 transition-transform size-40">
      <div className="relative m-2.5 overflow-hidden">
        <img
          className="max-h-full max-w-full object-contain"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-white text-xl font-semibold">
          {name}
        </h6>
      </div>
    </div>
  );
};

export default Card;