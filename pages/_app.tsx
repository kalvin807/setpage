import "tailwindcss/tailwind.css"
import "@fontsource/inter/variable-full.css"
import { ThemeProvider } from "next-themes"

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
