import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CalendarPage from "./pages/Calendar-Page.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ProgressBar from "./components/Progress-Bar.jsx";
import MenuCreationBlock from "./components/menu-creation-block.jsx";

import DishSelect from "./components/day-on.jsx";

import AllergyPage from "./pages/AllergyPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-0 m-0">
          <LandingPage />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: "/calendar",
    element: (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <MenuCreationBlock />
          <ProgressBar />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: "/allergies",
    element: (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <MenuCreationBlock />
          <ProgressBar />
      
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: "/dish-select",
    element: (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <MenuCreationBlock />
          <ProgressBar />
  
        </main>
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
