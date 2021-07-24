import logo from './logo.svg';
import './App.css';
import {useContext} from "react";
import React from "react";
import {ThemeContext, themes} from "./context/context";





function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />

        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>

            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            Я стилизован темой из контекста!
        </button>
    );
}


export default App;
