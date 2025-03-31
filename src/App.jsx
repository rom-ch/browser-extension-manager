import { useEffect, useState } from "react";
import { ExtensionGrid } from "./components/ExtensionsGrid/ExtensionGrid";
import { Filters } from "./components/Filters/Filters";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";
import data from "./data/data.json";

function App() {
  const [filter, setFilter] = useState("all");
  const [extensions, setExtensions] = useState(() => {
    const localData = localStorage.getItem("extensions");
    if (localData) return JSON.parse(localData);
    return data;
  });
  console.log(filter);

  function toggleExtension(id, isActive) {
    const temp = extensions.map(extension => {
      if (extension.name === id) {
        extension.isActive = isActive;
      }
      return extension;
    });
    setExtensions(temp);
  }

  const filterExtensions = extensions.filter(ext => {
    if (filter === "Active") return ext.isActive;
    if (filter === "Inactive") return !ext.isActive;
    return true;
  });

  useEffect(() => {
    localStorage.setItem("extensions", JSON.stringify(extensions));
  }, [extensions]);

  return (
    <Wrapper>
      <Header />
      <Filters filter={filter} setFilter={setFilter} />
      <ExtensionGrid
        extensions={filterExtensions}
        toggleExtension={toggleExtension}
      />
    </Wrapper>
  );
}

export default App;
