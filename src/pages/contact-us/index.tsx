import {useRef, useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import emailjs from "emailjs-com";
import {motion} from "framer-motion";
import Main from "../../layout/main";
import Button from "../../components/ui/button";
import toastSuccess from "../../utils/toast-success";
import contact from "../../assets/contact.png";
import {BeatSpinner} from "../../components/spinner";
import Container from "../../components/ui/container";
import SetTitle from "../../components/set-title";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {handleSubmit} = useForm<FormData>();
  const formRef = useRef<HTMLFormElement | null>(null);
  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await emailjs.send(
        "service_nvwfvek",
        "template_qfb2f2p",
        data,
        "OqespYIns1SjwRkCQ"
      );
      if (response.status === 200) {
        toastSuccess("Email sent successfully");
      }
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Main>
      <SetTitle title="Contact Us" />
      <Container>
        <div className="flex justify-center items-center flex-col lg:flex-row">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap5 lg:gap-20">
            <div>
              <div className="w-full -z-20 text-primary-500 flex justify-center items-center">
                <img src={contact} alt="" />
              </div>
            </div>
            <div style={{marginTop: "30px"}} className=" ">
              <div className="p-4  mx-auto mt-4 mb-4">
                <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>

                <div
                  id="contact"
                  className="flex justify-center items-center gap-10">
                  <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)}
                    transition={{
                      duration: 0.5,
                    }}
                    className="w-full">
                    <div className="mb-4 mt-10  w-full">
                      <label className="text-xl font-semibold" htmlFor="name">
                        Name :
                      </label>
                      <input className="p-2" type="text" placeholder="Name" />
                    </div>
                    <div className="mb-4  w-full">
                      <label className="text-xl font-semibold" htmlFor="email">
                        Email :
                      </label>
                      <input
                        className="p-2"
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="mb-4  w-full">
                      <label
                        className="text-xl font-semibold"
                        htmlFor="message">
                        Message :
                      </label>
                      <textarea
                        className="p-2"
                        name="message"
                        placeholder="Your Message here ....."
                        rows={6}
                      />
                    </div>
                    <Button className="w-full" size="lg" type="submit">
                      {isLoading ? <BeatSpinner /> : "Send Message"}
                    </Button>
                  </motion.form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default ContactUs;
