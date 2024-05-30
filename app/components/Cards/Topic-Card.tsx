"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
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
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {heading}
          </CardItem>

          <CardItem
            translateZ="100"
            className="w-full mt-4 bg-slate-400 rounded-3xl min-h-72"
          >
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm pt-6 dark:text-neutral-300"
            >
              Total Questions: {totalQuestions}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm dark:text-neutral-300"
            >
              Completed Questions: {completedQuestions}
            </CardItem>
          </CardItem>
        </CardBody>
      </CardContainer>
    </Link>
  );
};

export default TopicCard;
