import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charts from "./components/chart";
import Initial from "./components/initial";
import Header, { DrawerHeader } from "./components/header";
import Box from "@mui/material/Box";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3, m: "5% 0 0 8%" }}>
          <Routes>
            <Route path="/" element={<Charts />} />
            <Route path="/initial" element={<Initial />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
