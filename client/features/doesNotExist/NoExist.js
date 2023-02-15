import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap/";

const NoExist = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      {loading ? (
        <ProgressBar animated now={100} />
      ) : (
        <div className="nofound">
          <h1>Page Not Found</h1>
          <p>We're sorry, but the page you requested could not be found.</p>
        </div>
      )}
    </div>
  );
};

export default NoExist;
