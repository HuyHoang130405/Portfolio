import React from "react";
import FadeInWhenVisible from "../common/FadeInWhenVisible";

export default function ContactSection () {
    return(
        <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4 py-16 text-center">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <p className="text-[#94a3b8] mb-6">Feel free to reach out via email or social media!</p>
          <a
            href="mailto:your@email.com"
            className="inline-block bg-[#38bdf8] hover:bg-[#0ea5e9] text-white px-6 py-3 rounded-full text-lg transition"
          >
            Send Email
          </a>
        </FadeInWhenVisible>
      </section>
    )
}