"use client";
import React from "react";
import TopicCard from "../Cards/Topic-Card";
import data from "../../data/450DSA";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const TopicCardBentGrid = () => {
  const topics = data;

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
