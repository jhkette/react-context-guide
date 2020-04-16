import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/Booklist";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeToggle from "./components/ThemeToggle";


// you wrap the app components in the context providers. They are imported above.
// The app can now access state globally accross the app
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
