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
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col rounded-xl jus max-w-sm mx-auto p-4 relative h-[30rem]">
        <div className="flex flex-row justify-between">
          <div className="dark:text-white text-black text-sm font-semibold basis-1/2">
            Total Questions: <span>{totalQuestions} </span>
          </div>
          <div className="text-sm border font-bold dark:border-white/[0.8] border-black/[0.8] rounded-full  text-black dark:text-white px-2 py-0.5">
            {completedQuestions == 0
              ? "Start Now"
              : totalQuestions > completedQuestions
              ? "Solve Now"
              : "Done"}
          </div>
        </div>

        <EvervaultCard text={heading} />

        <p className="dark:text-white text-black mt-4 text-sm font-semibold">
          Completed Questions: {completedQuestions}
        </p>
      </div>
    </Link>
  );
};

export default TopicCard;
