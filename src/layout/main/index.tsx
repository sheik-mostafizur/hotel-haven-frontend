import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

type MainProps = {
  children: React.ReactNode;
};
const Main = ({children}: MainProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
