import React from "react";
import Header from "./components/Header";
import InvitationInfo from "./components/InvitationInfo";
import RsvpForm from "./components/RsvpForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <InvitationInfo />
      <RsvpForm />
      <Footer />
    </div>
  );
}

export default App;
