import React from "react";
import Сompany from "../../components/Сompany/Сompany";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import About from "../../components/About/About";
import Comment from "../../components/Comment/Comment";
import Clients from "../../components/Clients/Clients";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Сompany />
      <About />
      <Comment />
      <Clients />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
