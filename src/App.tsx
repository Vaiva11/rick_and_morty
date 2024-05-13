import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/Theme";
import { Provider } from "./utils/context/Context";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Provider>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}
