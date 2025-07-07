"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="w-full flex flex-col items-center justify-center">
      {/* Title & Subtitle */}
      <div className="mb-10 text-center">
        <div className="mb-2">
          <span className="inline-block px-4 py-1 rounded-lg bg-black text-white text-xs font-medium border border-white/10">
            Contact
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Get in Touch with Us
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Have questions or need solutions? Let us know by filling out the form,
          and we'll be in touch!
        </p>
      </div>

      {/* Info Cards */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="rounded-xl p-6 flex items-center gap-4 border border-white/10 bg-gradient-to-br from-[#A62929]/30 to-black/80 shadow-lg">
          <div className="bg-[#A62929]/80 p-3 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white font-semibold text-lg">E-mail</div>
            <div className="text-white/80 text-base">Contact@scanpick.in</div>
          </div>
        </div>
        <div className="rounded-xl p-6 flex items-center gap-4 border border-white/10 bg-gradient-to-br from-[#A62929]/30 to-black/80 shadow-lg">
          <div className="bg-[#A62929]/80 p-3 rounded-lg flex items-center justify-center">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white font-semibold text-lg">Phone</div>
            <div className="text-white/80 text-base">+91 80507 65537</div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-black/80 rounded-2xl p-8 border border-white/10 shadow-xl flex flex-col gap-8"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-white">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Jane"
              required
              className="bg-black border border-white/10 text-white placeholder:text-white/40"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-white">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Smith"
              required
              className="bg-black border border-white/10 text-white placeholder:text-white/40"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Jane@mail.com"
                required
                className="bg-black border border-white/10 text-white placeholder:text-white/40 pr-10"
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98568 88061"
              className="bg-black border border-white/10 text-white placeholder:text-white/40"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-white">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Hi, I am Jane. I want help with..."
            rows={4}
            required
            className="bg-black border border-white/10 text-white placeholder:text-white/40 resize-none"
          />
        </div>
        <Button
          type="submit"
          className="w-full h-12 rounded-lg bg-[#A62929] text-white font-semibold text-lg hover:bg-[#922222] transition-colors"
        >
          Submit Form
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
