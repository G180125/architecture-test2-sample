export const handleLogin = (username, password) => {
    // Basic validation
    if (!username || !password) {
      throw new Error("Username and password cannot be empty.");
    }
  
    if (username === "admin" && password === "password") {
      return { username: "admin", role: "admin" };
    } else if (username === "user" && password === "password") {
      return { username: "user", role: "user" };
    } else {
      throw new Error("Invalid username or password.");
    }
  };
  