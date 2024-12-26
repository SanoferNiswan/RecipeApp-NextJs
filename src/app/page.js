import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
          Welcome to Recipe App
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover delicious recipes from around the world. Whether you're a seasoned chef or a kitchen newbie, we've got something for everyone!
        </p>
      </div>
      
      <div className="mt-12">
        <Link href={'/recipe-list'}>
          <button className="bg-purple-600 text-white text-xl font-semibold py-4 px-10 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300">
            Explore All Recipes
          </button>
        </Link>
      </div>
      <footer className="text-gray-500 mt-20">
        <p>&copy; 2024 Recipe App | Crafted with ❤️</p>
      </footer>
    </div>
  );
}
