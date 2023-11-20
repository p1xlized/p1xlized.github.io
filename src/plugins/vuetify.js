// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
const myCustomTheme = {
  dark: false,
  colors: {
    background: '#181825',
    surface: '#1e1e2e',
    secondary:"#313244",
    error: '#f38ba8',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    Rosewater: '#f5e0dc',
    Flamingo: '#f2cdcd',
    Pink:'#f5c2e7',
    Mauve:'#cba6f7',
    Maroon:'#eba0ac',
    Peach:'#fab387',
    Yellow:'#f9e2af',
    Green:'#a6e3a1',
    Teal:'#94e2d5',
    Sky:'#89dceb',
    Sapphire:'#74c7ec',
    Blue:'#89b4fa',
    Lavender:'#b4befe'
  },
}
// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme,
    },
  },
})