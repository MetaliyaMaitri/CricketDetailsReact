import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Layout from "./Layout";
import MatchDetails from "./MatchDetails.js";
import MatchteamAdd from "./MatchteamAdd.js";
import Matches from "./Matches";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/matches" element={<Matches />}></Route>
        <Route path="/match/:id" element={<MatchDetails />}></Route>
        <Route path="/match/add" element={<MatchteamAdd />}></Route>
        <Route path="/match/edit/:id" element={<MatchteamAdd />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
