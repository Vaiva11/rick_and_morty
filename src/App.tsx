import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/Theme";
import { CharacterCountProvider } from "./utils/context/charactersCountContext";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CharacterCountProvider>
        <Router />
      </CharacterCountProvider>
    </ThemeProvider>
  );
}
