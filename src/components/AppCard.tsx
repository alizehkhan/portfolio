const AppCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="-mb-2 mt-3 flex w-fit items-center gap-3 rounded-md bg-white p-2 shadow-sm">
      <img className="h-10 w-10 rounded-md object-cover" src={image} alt="" />
      <p className="text-md font-serif">{name}</p>
    </div>
  );
};

export default AppCard;
