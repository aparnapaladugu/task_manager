import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm border border-gray-200 text-center">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
        <Link to="/dashboard" className="mt-6 inline-flex rounded-lg bg-green-600 px-6 py-2 text-white hover:bg-green-700">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
