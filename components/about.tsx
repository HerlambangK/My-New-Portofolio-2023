"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello! I'm Herlambang Kuswicaksonojati, a graduate from UPN Veteran Yogyakarta with a degree in <span className="font-medium underline">Informatics</span>.My profound passion for programming. Over the past 3 years, I've been working as a web developer, specializing in WordPress. Alongside, I've been mastering various programming languages to enhance my web development career. I proudly participated in the Binnar program, where I excelled as the Best Student. I genuinely enjoy problem-solving in programming, and it's what drives me.
      </p>
      <p className="mb-3">
        My core skills encompass React, Next.js, Express.js, Node.js, SQL, AWS, MongoDB, TypeScript, Prisma, and I'm proficient in WordPress. I'm continually eager to embrace new technologies. Currently, I'm on the lookout for a full-time software developer role.
      </p>
      <p className="mb-3">
        Beyond coding, I find pleasure in diverse interests. I'm an enthusiastic gamer and a movie buff. Engaging in sports activities, like hitting the gym, keeps me active. I also have a passion for learning currently, I'm diving into new subjects.
      </p>
      <p className="mb-3">
        Feel free to reach out to me at <a className="italic hover:underline hover:text-blue-500" href="mailto:herlambangk25@gmail.com">herlambangk25@gmail.com</a> or <a className="italic hover:underline hover:text-green-500" href="tel:+62853-3945-1485">+6285339451485</a> if you're interested in connecting. I'm enthusiastic about contributing my skills to impactful projects.
      </p>
      <p>Best regards, Herlambang Kuswicaksonojati</p>

    </motion.section>
  );
}
