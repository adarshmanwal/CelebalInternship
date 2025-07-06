import RadioCard from "../../../../components/radio/RadioCard";
import radioData from "../../../../constant/radioData";

const PopularRadios = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-white text-xl font-semibold">📻 Popular Radios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {radioData.map((radio, index) => (
          <RadioCard key={index} radio={radio} />
        ))}
      </div>
    </div>
  );
};

export default PopularRadios;
