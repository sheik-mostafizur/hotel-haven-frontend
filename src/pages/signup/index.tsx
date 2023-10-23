import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Button from "../../components/ui/button";
import {useState} from "react";
import UserForm from "./user-form";
import HotelForm from "./hotel-form";

const SignUp = () => {
  const [isHotelForm, setIsHotelForm] = useState(false);
  const [uDisabled, setUDisabled] = useState(true);
  const [hDisabled, setHDisabled] = useState(false);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="flex min-h-[900px] items-center justify-center">
        <div className="relative rounded-lg border p-8 shadow md:w-[450px]">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <Button
              isDisabled={uDisabled}
              onClick={() => {
                setIsHotelForm(false);
                setHDisabled(false);
                setUDisabled(true);
              }}>
              As A User
            </Button>
            <Button
              isDisabled={hDisabled}
              onClick={() => {
                setIsHotelForm(true);
                setHDisabled(true);
                setUDisabled(false);
              }}>
              As A Hotel Provider
            </Button>
          </div>
          {isHotelForm ? <HotelForm /> : <UserForm />}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
