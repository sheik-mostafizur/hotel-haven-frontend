import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

type MainProps = {
  children: React.ReactNode;
};
const Main = ({children}: MainProps) => {
  return (
    <>
      <Navbar />
      <main className="dark:bg-secondary-900">{children}</main>
      <Footer />
    </>
  );
};

export default Main;
