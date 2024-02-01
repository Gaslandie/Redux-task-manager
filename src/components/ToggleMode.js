//ce composant est pour le changement de theme de notre page
import { useState } from "react";
import { FaMoon,FaSun } from "react-icons/fa";

export default function ToggleMode() {
    const [darkMode,setDarkMode] = useState(false);
    const changeTheme = () => {
        document.body.classList.toggle("dark");
        setDarkMode(!darkMode);
    }
    return (
        //notre fonction changeTheme est sans parenthèse car on veut pas qu'il soit executé
        //au rendu mais lorsqu'elle est aplé
        <section className="toggle" onClick={changeTheme}>
      {darkMode ? (
        <section className="toggle-light">
          <FaSun />
        </section>
      ) : (
        <section className="toggle-dark">
          <FaMoon />
        </section>
      )}
    </section>
    )
}