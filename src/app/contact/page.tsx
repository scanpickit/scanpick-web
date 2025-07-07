import ContactForm from "../../components/forms/ContactForm";
import AddressSection from "../../components/sections/AddressSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-scanpick-black">
      <main className="container mx-auto px-4 lg:px-8 py-20">
        <ContactForm />
        <div className="mt-20 flex flex-col items-center">
          <AddressSection/>
        </div>
      </main>
    </div>
  );
}
