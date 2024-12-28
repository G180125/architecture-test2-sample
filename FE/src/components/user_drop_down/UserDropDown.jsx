import React, { useState } from "react";

export default function UserDropdown({ onLogout, onViewProfile }) {
  const [username, setUsername] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Handle username input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Input to set username */}
      {!username ? (
        <input
          type="text"
          placeholder="Enter username"
          className="px-2 py-1 border rounded-md"
          value={username}
          onChange={handleUsernameChange}
        />
      ) : (
        <div
          className="cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-md"
          onClick={toggleDropdown}
        >
          {username}
        </div>
      )}

      {/* Dropdown menu */}
      {isDropdownVisible && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          <ul className="text-gray-800">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={onViewProfile}
            >
              View Profile
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setUsername(""); // Clear username on logout
                setIsDropdownVisible(false); // Close dropdown
                onLogout();
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
