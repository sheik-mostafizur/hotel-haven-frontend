import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

interface SpinnerProps {
  children: ReactNode;
}

const HashSpinner: React.FC<SpinnerProps> = ({ children }) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <HashLoader
            color="#f04935"
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default HashSpinner;
