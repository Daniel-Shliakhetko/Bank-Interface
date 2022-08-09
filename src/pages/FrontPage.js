import React from "react";
import { useState, useEffect } from "react";
import { Loader } from "../partials/Loader";

export const FrontPage = (props) => {
  const loadingDuration = 2000;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, loadingDuration);
  }, []);

  return (
    <>
      {loading && props.isLoading && <Loader />}
      <div>"Content"</div>
    </>
  );
};
