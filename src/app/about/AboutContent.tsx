"use client";
import { motion, Variants } from "framer-motion";
import {
  Check,
  X,
  Building,
  Clock,
  Zap,
  Lightbulb,
  Handshake,
  Rocket,
  Heart,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/common/CustomCursor";
import { useState } from "react";

// Animation Variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0],
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardHoverEffect = {
  y: -8,
  boxShadow: "0 10px 30px -5px hsl(var(--primary) / 0.2)",
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] as const },
};

// Data
const teamMembers = [
  {
    name: "Shivam Kumar",
    role: "Mechatronics Engineer",
    image: "shivam.jpg",
    linkedin: "#",
  },
  {
    name: "Tirumarredi Naresh",
    role: "Full Stack Developer",
    image: "naresh.jpg",
    linkedin: "#",
  },
  {
    name: "Aarif",
    role: "Fabrication Specialist",
    image: "aarif.jpg",
    linkedin: "#",
  },  
  {
    name: "Varun",
    role: "Marketing & Sales Lead",
    image: "varun.jpg",
    linkedin: "#",
  },
  {
    name: "Vishnu R",
    role: "App & Software Engineer",
    image: "vishnu.jpg",
    linkedin: "#",
  },
  {
    name: "Arijit Patra",
    role: "Manufacturing Lead",
    image: "ARIJIT.jpg",
    linkedin: "#",
  },
];

export default function AboutContent() {
  const [isCursorActive, setIsCursorActive] = useState(false);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <CustomCursor active={isCursorActive} />
      {/* =======================================================================
            CTA Hero Section
            ======================================================================= */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden py-32 md:py-40 text-center"
      >
        <div className="absolute inset-x-0 -top-10 h-[500px] bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.25),transparent_60%)] opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight"
          >
            Behind every win,
            <br />
            there's us.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-xl mx-auto text-xl text-muted-foreground mb-10"
          >
            Here’s how we turn work into wins.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="#who-we-are" passHref>
              <Button size="lg" className="group text-lg px-8 py-6">
                Our Story
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="who-we-are"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 py-20 text-center flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="bg-secondary/50 text-sm text-muted-foreground px-3 py-1 rounded-full mb-4 font-medium"
        >
          Who We Are
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Who We Are
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-lg text-muted-foreground mb-16"
        >
          ScanPick is a team of builders, engineers, and innovators simplifying
          automation across industries.
        </motion.p>
        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
        >
          {[
            {
              icon: Building,
              title: "150+ Businesses",
              desc: "Companies have streamlined their workflows with our solutions.",
            },
            {
              icon: Clock,
              title: "1M+ Hours",
              desc: "Reducing manual work and boosting productivity through automation.",
            },
            {
              icon: Zap,
              title: "95% Faster",
              desc: "Clients see improved efficiency within the first three months of usage.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={cardHoverEffect}
              className="p-8 rounded-xl border border-border transition-shadow hover:shadow-xl hover:shadow-primary/10"
              style={{ background: "var(--gradient-card)" }}
            >
              <item.icon className="w-10 h-10 mx-auto mb-5 text-primary" />
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 py-20 text-center flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="bg-secondary/50 text-sm text-muted-foreground px-3 py-1 rounded-full mb-4 font-medium"
        >
          Our Values
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          The Values Behind ScanPick
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-lg text-muted-foreground mb-16"
        >
          Our values shape everything we do at ScanPick. From innovation to
          integrity, we’re committed to building Smart solutions that empower
          businesses and drive real impact.
        </motion.p>
        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full"
        >
          <motion.div
            variants={itemVariants}
            whileHover={cardHoverEffect}
            className="p-8 rounded-xl border-2 border-primary/80 ring-8 ring-primary/10 text-left"
            style={{ background: "var(--gradient-card)" }}
          >
            <Lightbulb className="w-8 h-8 mb-4 text-primary" />
            <h3 className="text-2xl font-bold">Driving Innovation Forward</h3>
            <p className="text-muted-foreground mt-3">
              We embrace cutting-edge Products to create smarter, more efficient
              solutions.
            </p>
          </motion.div>
          {[
            {
              icon: Handshake,
              title: "Committed to Integrity & Trust",
              desc: "Trust and transparency are at the core of everything we do for our clients.",
            },
            {
              icon: Rocket,
              title: "Empowering Business Growth",
              desc: "We help businesses scale faster with high efficiency, reducing manual tasks and unlocking new opportunities.",
            },
            {
              icon: Heart,
              title: "Putting Customers First",
              desc: "Your success is our priority—we build solutions that truly make an impact.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={cardHoverEffect}
              className="p-8 rounded-xl border border-border text-left bg-secondary/40 transition-shadow hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <item.icon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 py-20 text-center flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="bg-secondary/50 text-sm text-muted-foreground px-3 py-1 rounded-full mb-4 font-medium"
        >
          Why us
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          What makes us stand out
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-lg text-muted-foreground mb-16"
        >
          Discover how our innovative strategies, data-driven approach, and
          commitment to results set us apart from the competition.
        </motion.p>
        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full"
        >
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl bg-secondary/20 border border-border/50 text-muted-foreground/60"
          >
            <h3 className="text-2xl font-bold mb-6 text-left text-muted-foreground">
              Others Solutions
            </h3>
            <ul className="space-y-4 text-left text-lg">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 mt-1.5 text-primary/70 flex-shrink-0" />
                <span>Generic hardware, limited flexibility</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 mt-1.5 text-primary/70 flex-shrink-0" />
                <span>One-size-fits-all automation</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 mt-1.5 text-primary/70 flex-shrink-0" />
                <span>Poor UX, outdated interfaces</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 mt-1.5 text-primary/70 flex-shrink-0" />
                <span>Multiple vendors, no ownership</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 mt-1.5 text-primary/70 flex-shrink-0" />
                <span>Expensive, slow to scale</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 mt-1.5 text-primary/70 flex-shrink-0" />
                <span>Inconsistent & Dependent on Workforce</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-xl border-2 border-primary/70 relative overflow-hidden ring-8 ring-primary/10"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.3),transparent_70%)] opacity-50 animate-flame" />

            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700 ease-linear" />

            <div className="relative">
              <h3 className="text-2xl font-bold mb-6 text-left text-foreground">
                ScanPick Solutions
              </h3>
              <ul className="space-y-4 text-left text-lg">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1.5 text-green-500 flex-shrink-0" />
                  <span>Custom-built for your workflow</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1.5 text-green-500 flex-shrink-0" />
                  <span>Scalable automation, tailored systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1.5 text-green-500 flex-shrink-0" />
                  <span>Clean UI, smooth integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1.5 text-green-500 flex-shrink-0" />
                  <span>All-in-one product + dev team</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1.5 text-green-500 flex-shrink-0" />
                  <span>Fast, reliable, future-ready tech</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1.5 text-green-500 flex-shrink-0" />
                  <span>Consistent & Reliable Output</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 py-20 text-center flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="bg-secondary/50 text-sm text-muted-foreground px-3 py-1 rounded-full mb-4 font-medium"
        >
          Our Team
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Meet the Minds Behind ScanPick
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-lg text-muted-foreground mb-16"
        >
          We bring together technology and strategy to create smarter solutions.
        </motion.p>
        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full"
        >
          {teamMembers.map((member, i) => (
            <motion.a
              key={`${member.name}-${i}`}
              variants={itemVariants}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-left border border-border/30 rounded-xl overflow-hidden bg-secondary/20 block cursor-none"
              onMouseEnter={() => setIsCursorActive(true)}
              onMouseLeave={() => setIsCursorActive(false)}
            >
              <div className="relative w-full aspect-[9/10] overflow-hidden">
                <Image
                  src={`/images/team/${member.image}`}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
