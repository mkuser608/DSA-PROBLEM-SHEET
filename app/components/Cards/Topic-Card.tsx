"use client";

import Image from "next/image";
import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import Link from "next/link";

// Define the props interface
interface CardProps {
  heading: string;
  totalQuestions: number;
  completedQuestions: number;
  linkUrl: string;
}

const TopicCard = ({
  heading,
  totalQuestions,
  completedQuestions,
  linkUrl,
}: CardProps) => {
  return (
    <Link href={linkUrl} passHref>
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col rounded-xl items-start max-w-sm mx-auto p-4 relative h-[30rem]">
        <EvervaultCard text={heading} />

        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          Hover over this card to reveal an awesome effect. Running out of copy
          here.
        </h2>
        <p className="text-sm border font-light dark:border-white/[0.1] border-black/[0.1] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          Watch me hover
        </p>
      </div>
    </Link>
  );
};

export default TopicCard;
