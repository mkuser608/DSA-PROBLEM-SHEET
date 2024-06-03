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
        <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gray-100 bg-opacity-20 dark:bg-black dark:bg-opacity-20 dark:border-white/[0.2] dark:border-opacity-20  border-black/[0.1] w-auto sm:w-[16rem] h-auto rounded-xl p-6 border ">
          <CardItem
            translateZ="50"
            className=" font-sans font-bold text-neutral-100 dark:text-neutral-300 mb-2 mt-2"
          >
            {heading}
          </CardItem>

          <CardItem
            translateZ="100"
            className="w-full mt-4 bg-slate-400/30 dark:bg-slate-500/30 backdrop-blur-md rounded-3xl min-h-40 p-4"
          >
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-300 text-sm pt-6 dark:text-neutral-300"
            >
              Total Questions: {totalQuestions}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-300 text-sm pt-6 dark:text-neutral-300"
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
