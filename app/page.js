import Explain from "@/components/Explain";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Informations from "@/components/Informations";
import Table from "@/components/Table";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Form />
      <Informations />
      <Explain />
      <Table />
      <Features />
      <Footer />
    </>
  );
}
