import Navbar from "./components/navbar/Navbar";
import Button from "./components/button/Button";
import ContactForm from "./components/contactForm/ContactForm";
import Gallery from "./components/gallery/Gallery";
import ProfileCard from "./components/profileCard/ProfileCard";

function App() {
  return (
    <>
      <Navbar />
      <ProfileCard />
      <ContactForm />
      <Gallery />
      <Button />
    </>
  );
}

export default App;
