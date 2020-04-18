import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark; // ternery operator to get isLightTheme
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>The way of kings</li>
        <li style={{ background: theme.ui }}>The name fo the wind</li>
        <li style={{ background: theme.ui }}>The final empire</li>
      </ul>
    </div>
  );


}

export default BookList;
