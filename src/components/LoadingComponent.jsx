import React from "react";
import { useEffect, useState } from "react";

const LoadingComponent = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    console.log("loading", isLoading)
    setIsLoading(!isLoading)
  }

  useEffect(()=>{
    window.addEventListener("load", handleLoading)
    //return cleanup function
    return () => window.removeEventListener("load", handleLoading
  }, [])
  useEffect(() => console.log("isLoading", isLoading), [])
  return (isLoading ? <h1> LOADING </h1>: <div>Not loading anymore</div>);
};

export default LoadingComponent;
