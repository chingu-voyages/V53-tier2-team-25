import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CalendarPage from "./pages/Calendar-Page.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";



const router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/calendar-page",
    element:(
    <>
    <Header />
    <CalendarPage />,
    < Footer/>
    </>
    )
  },
  
   
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
