import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-8 rounded-lg w-4/5 sm:w-1/2 md:w-1/3">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-500 mb-6">
          Oops! It seems the page you're looking for doesn't exist.
        </p>
        <Link href="/" className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-200">Go to Home Page
        </Link>
      </div>
    </div>
  );
}
