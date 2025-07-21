export function Food() {
  const favFood =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTltZRK6Nb2hlLcg-PySvkjbxAJdEx_0zcQ&s";
  const description = "Most Loved Food In India";

  return (
    <div className="bg-white flex items-center max-w-96 px-5 rounded-3xl">
      <h1 className="text-2xl text-green-500">Favorite Food Is Biryani</h1>
      <img className="w-34" src={favFood} alt={description} />
    </div>
  );
}
