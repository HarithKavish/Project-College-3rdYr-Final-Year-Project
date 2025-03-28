import React from "react";
import "./App.css";
import { NavigationProvider } from "./context/NavigationContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <NavigationProvider>
      <Navbar />
      <main>
        <NavigationProvider.Consumer>
          {({ getPageComponent }) => getPageComponent()}
        </NavigationProvider.Consumer>
      </main>
    </NavigationProvider>
  );
}

export default App;
