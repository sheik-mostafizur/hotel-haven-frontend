import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Container from "../../components/ui/container";
import {useAppDispatch} from "../../redux/hooks";
import {changeTheme} from "../../redux/themeSlice";

const Settings = () => {
  const dispatch = useAppDispatch();
  const themes = ["base", "dark", "matrix"];

  return (
    <>
      <Navbar />
      <Container>
        <h1>User Settings</h1>
        <div>
          <h3>Change your theme</h3>
          <ul className="flex items-center gap-4">
            <li
              onClick={() => dispatch(changeTheme({theme: themes[0]}))}
              className="cursor-pointer shadow-md shadow-[#f04935]/50  w-8 h-8 bg-[#f04935] rounded-full"></li>
            <li
              onClick={() => dispatch(changeTheme({theme: themes[1]}))}
              className="cursor-pointer shadow-md shadow-[#000000]/50  w-8 h-8 bg-[#000000] rounded-full"></li>
            <li
              onClick={() => dispatch(changeTheme({theme: themes[2]}))}
              className="cursor-pointer shadow-md shadow-[#32cd37]/50  w-8 h-8 bg-[#32cd37] rounded-full"></li>
          </ul>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Settings;
