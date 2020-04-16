import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext; 
  render() {
    const { isLightTheme, light, dark } = this.context; // destructure the state items
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
}

export default BookList;
