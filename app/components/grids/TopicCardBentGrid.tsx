"use client";
import React, { useEffect, useState } from "react";
import TopicCard from "../Cards/Topic-Card";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { getAllTopics } from "@/app/controller/DSADataController";
import { Topic } from "@/app/data/450DSA";

const TopicCardBentGrid = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  // Function to convert string to URL-friendly format
  const convertStringToUrl = (input: string): string => {
    let lowerCaseString = input.toLowerCase();
    let replacedString = lowerCaseString.replace(/&/g, "and");
    replacedString = replacedString.replace(/\s+/g, "-");
    return replacedString;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTopics = await getAllTopics();
        console.log(fetchedTopics);
        setTopics(fetchedTopics);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <BentoGrid className="max-w-6xl mx-auto">
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
                linkUrl={"topic/" + convertStringToUrl(topic.topicName)}
              />
            }
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default TopicCardBentGrid;
