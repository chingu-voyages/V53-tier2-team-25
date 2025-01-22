import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CalendarPage from "./pages/Calendar-Page.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ProgressBar from "./components/Progress-Bar.jsx";
import MenuCreationBlock from "./components/menu-creation-block.jsx";
import LandingPageMobile from "./pages/LandingPageMobile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <LandingPage />
        {/* <LandingPageMobile /> */}
        <Footer />
      </>
    ),
  },
  {
    path: "/calendar-page",
    element: (
      <>
        <Header />
        <MenuCreationBlock />
        <ProgressBar />
        <Footer />
      </>
    ),
  },
]);

function App() {

  return <RouterProvider router={router} />;

}

export default App;
