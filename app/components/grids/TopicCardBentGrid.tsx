"use client";
import React from "react";
import TopicCard from "../Cards/Topic-Card";
import { dataSchema } from "../../utils/ValidationData";
import data from "../../data/450DSA";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

interface Question {
  Topic: string;
  Problem: string;
  Done: boolean;
  Bookmark: boolean;
  Notes?: string;
  URLs: string[];
}

interface Topic {
  topicName: string;
  position: number;
  started: boolean;
  doneQuestions: number;
  questions: Question[];
}

async function getData(): Promise<Topic[]> {
  const validationResult = dataSchema.safeParse(data);

  if (!validationResult.success) {
    console.error("Validation failed:", validationResult.error.errors);
    throw new Error("Data validation failed");
  }

  return validationResult.data;
}

const TopicCardBentGrid = async () => {
  const topics = await getData();

  return (
    <div>
      <BentoGrid className="max-w-6xl mx-auto ">
        {topics.map((topic, i) => (
          <BentoGridItem
            key={topic.topicName}
            title={topic.topicName}
            header={topic.topicName}
            className=""
            card={
              <TopicCard
                heading={topic.topicName}
                totalQuestions={topic.questions.length}
                completedQuestions={topic.doneQuestions}
                linkUrl={"topic/" + topic.topicName}
              />
            }
          />
        ))}
      </BentoGrid>
    </div>
  );
};
export default TopicCardBentGrid;
