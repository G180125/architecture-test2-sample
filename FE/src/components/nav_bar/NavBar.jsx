import { Link } from "react-router-dom";

const NavBar = ({ logo, pages, user }) => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">
            <Link to="/">{logo}</Link>
          </div>
          <ul className="flex space-x-6">
            {Array.from(pages.entries()).map(([name, destination], index) => (
              <li key={index}>
                <Link
                  to={destination}
                  className="hover:text-yellow-400 transition duration-300"
                >
                  {name}
                </Link>
              </li>
            ))}
            {user && user.username !== "guest" ? (
              <li className="text-yellow-500 font-bold">{user.username}</li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="bg-yellow-500 px-4 py-2 rounded text-gray-800 hover:bg-yellow-400 transition duration-300"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
