import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charts from "./components/chart";
import Initial from "./components/initial";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Charts />} />
            <Route path="/initial" element={<Initial />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
