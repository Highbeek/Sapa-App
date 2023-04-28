import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Discover from "./Discover";
import Error from "./ErrorPage";
import SharedLayout from "./SharedLayout";

function AppRender() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/Discover" element={<Discover />}></Route>
        <Route path="/HowItWorks" element={<HowItWorks />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRender;
