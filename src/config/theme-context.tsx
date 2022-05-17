import React, { createContext, useState } from 'react';
const themes = {
    dark: {
        backgroundColor: '#151618',
        backgroundCard: '#25282c',
        color: 'white',
        backgroundBtn:'gray',
        inputBackground:'gray'

    },
    light: {
        backgroundColor: '#EFF0F3',
        backgroundCard: '#fff',
        color: '#1d1d1d',
        backgroundBtn:'blue',
        inputBackground:'white'

    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
}
const ThemeContext = createContext(initialState);


interface Props {
    children: any
}


const ThemeProvider: React.FC<Props> = ({ children, ...props }) => {
    const [dark, setDark] = useState(false) // Default theme is light

    // To toggle between dark and light modes
    const toggle = () => {
        setDark(!dark)
    }

    // Filter the styles based on the theme selected
    const theme = dark ? themes.dark : themes.light

    return (
        <ThemeContext.Provider {...props} value={{ dark, theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }