import { useState, useEffect } from "react";

function GamesList() {
  const [games, setGames] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/games")
      .then((res) => res.json())
      .then((data) => {
        console.log("API data: ", data);
        setGames(data.results);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading)
    return (
      <p className="text-center text-2xl text-gray-500 py-12">Loading....</p>
    );

  return (
    <div className="flex justify-center items-start p-8 flex-1">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 list-none max-w-7xl">
        {games.map((game) => (
          <li
            key={game.id}
            className="bg-gray-900 rounded overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-white font-semibold text-lg">
              {game.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GamesList;
