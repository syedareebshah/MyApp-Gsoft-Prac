import { DefaultTheme, DarkTheme } from 'react-native-paper';




declare global {
    namespace ReactNativePaper {
        interface ThemeColors {
            primary: string;
            accent: string;
        }

        //   interface Theme {
        //     myOwnProperty: boolean;
        //   }
    }
}

export const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
        backgroundClr:'black'
    },

};







