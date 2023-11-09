import { useEffect } from "react";

const useSetTitle = (title: any) => {
  useEffect(() => {
    document.title = `${title} | Hotel Heaven`;
  }, [title]);
};

export default useSetTitle;
