"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRef } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();
  const hiddenFormRef = useRef<HTMLFormElement>(null);
  const hiddenIframeRef = useRef<HTMLIFrameElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "10de5356-276a-4cab-aabc-84ccf890cb70",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      if (response.ok) {
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
      } else {
        toast({
          title: "Error",
          description:
            "There was a problem submitting the form. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem submitting the form. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center">
      {/* Title & Subtitle */}
      <div className="mb-10 text-center">
        <div className="mb-2">
          <span className="inline-block px-4 py-1 rounded-lg bg-background text-foreground text-xs font-medium border border-border">
            Contact
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4">
          Get in Touch with Us
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Have questions or need solutions? Let us know by filling out the form,
          and we'll be in touch!
        </p>
      </div>

      {/* Info Cards */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="rounded-xl p-6 flex items-center gap-4 border border-border bg-gradient-to-br from-primary/30 to-background/80 shadow-lg">
          <div className="bg-primary/80 p-3 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-foreground" />
          </div>
          <div>
            <div className="text-foreground font-semibold text-lg">E-mail</div>
            <div className="text-foreground/80 text-base">
              Contact@scanpick.in
            </div>
          </div>
        </div>
        <div className="rounded-xl p-6 flex items-center gap-4 border border-border bg-gradient-to-br from-primary/30 to-background/80 shadow-lg">
          <div className="bg-primary/80 p-3 rounded-lg flex items-center justify-center">
            <Phone className="w-6 h-6 text-foreground" />
          </div>
          <div>
            <div className="text-foreground font-semibold text-lg">Phone</div>
            <div className="text-foreground/80 text-base">+91 80507 65537</div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-background/80 rounded-2xl p-8 border border-border shadow-xl flex flex-col gap-8"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-foreground">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Jane"
              required
              className="bg-background border border-border text-foreground placeholder:text-foreground/40"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-foreground">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Smith"
              required
              className="bg-background border border-border text-foreground placeholder:text-foreground/40"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
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
                className="bg-background border border-border text-foreground placeholder:text-foreground/40 pr-10"
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98568 88061"
              className="bg-background border border-border text-foreground placeholder:text-foreground/40"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground">
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
            className="bg-background border border-border text-foreground placeholder:text-foreground/40"
          />
        </div>
        <Button
          type="submit"
          className="w-full h-12 rounded-lg bg-primary text-white font-semibold text-lg hover:bg-accent transition-colors"
        >
          Submit Form
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
