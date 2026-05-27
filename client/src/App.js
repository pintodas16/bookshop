import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import "./styles/style.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Provider store={store}>
      <Navbar setSearchTerm={setSearchTerm} term={searchTerm} />
      <MainContent searchTerm={searchTerm} />
    </Provider>
  );
}

export default App;
