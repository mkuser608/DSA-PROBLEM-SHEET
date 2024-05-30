import React from "react";
import TopicCard from "./components/Cards/Topic-Card";
import { dataSchema } from "./utils/ValidationData";
import data from "./data/450DSA";

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

const HomePage = async () => {
  const topics = await getData();

  return (
    <div>
      {topics.map((topic) => (
        <div
          key={topic.position}
          style={{
            border: "1px solid #ccc",
            margin: "1em",
            padding: "1em",
            borderRadius: "8px",
          }}
        >
          <TopicCard
            heading={topic.topicName}
            totalQuestions={topic.questions.length}
            completedQuestions={topic.doneQuestions}
            linkUrl={topic.topicName}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
