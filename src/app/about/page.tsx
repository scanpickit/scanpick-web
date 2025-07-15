"use client";
import dynamic from "next/dynamic";
import React from "react";

const AboutContent = dynamic(() => import("./AboutContent"), { ssr: false });

export default function AboutPage() {
  return <AboutContent />;
}
