import React from "react";
import { MantineProvider, Text } from "@mantine/core";
import { SimpleNavbar } from "./components/NavBar";
import { ContactForm } from "./components/ContactForm";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
      <SimpleNavbar></SimpleNavbar>
      <ContactForm></ContactForm>
    </MantineProvider>
  );
}

export default App;
