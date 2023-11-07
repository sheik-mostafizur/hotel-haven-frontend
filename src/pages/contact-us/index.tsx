import { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Main from "../../layout/main";
import Button from "../../components/ui/button";
import toastSuccess from "../../utils/toast-success";
import lottie from "lottie-web";
import animationData from "./data.json"; // Import your animation data

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const { handleSubmit } = useForm<FormData>();
  const formRef = useRef<HTMLFormElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        autoplay: true,
        loop: true, // Set loop to false to play the animation only once
        animationData: animationData,
      });
    }
  }, []);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
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
    }
  };

  return (
    <Main>
      <div className="flex justify-center items-center flex-col lg:flex-row">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap5 lg:gap-20">
          <div>
            <div ref={container} className="w-full -z-20 mt-10 text-primary-500">
              {/* This is where the Lottie animation will be rendered */}
            </div>
          </div>
          <div style={{ marginTop: '30px' }} className=" ">
            <div className="p-4  mx-auto mt-4 mb-4">
              <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>

              <div id="contact" className="flex justify-center items-center gap-10">
                <motion.form
                  ref={formRef}
                  onSubmit={handleSubmit(onSubmit)}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
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
                    <input className="p-2" name="email" type="email" placeholder="Email" />
                  </div>

                  <div className="mb-4  w-full">
                    <label className="text-xl font-semibold" htmlFor="message">
                      Message :
                    </label>
                    <textarea className="p-2" name="message" placeholder="Your Message here ....." rows={6} />
                  </div>
                  <Button className="w-full" size="lg" type="submit">Send Message</Button>
                </motion.form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ContactUs;
