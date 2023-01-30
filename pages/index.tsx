import type { NextPage } from "next";
import AdditionalField from "../components/additionalField";
import ContactForm from "../components/contactForm";
import CustomButton from "../components/customButton";
import InputField from "../components/inputField";
import Statement from "../components/statement";

const Home: NextPage = () => {
  return (
    <section id="main-form" className="max-w-[1000px] mx-auto p-10">
      <h2 className="text-5xl mb-5 text-black">Investor Onboarding Form</h2>
      <Statement />
      <ContactForm />
    </section>
  );
};

export default Home;
