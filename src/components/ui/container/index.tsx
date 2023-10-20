import {ReactNode} from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({children}: ContainerProps) => {
  return <div className="container mx-auto p-4">{children}</div>;
};

export default Container;
