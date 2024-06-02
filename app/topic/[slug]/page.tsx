"use client";
import {
  getAllTopics,
  getFilteredTopics,
} from "@/app/controller/DSADataController";
import { Topic } from "@/app/data/450DSA";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    slug: string;
  };
}

const page = ({ params: { slug } }: Props) => {
  const [topic, setTopic] = useState<Topic>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTopics = await getFilteredTopics({ topicName: slug });
        setTopic(fetchedTopics[0]);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      page
      {topic?.questions.map((question) => {
        return <div>{question.Problem}</div>;
      })}
    </div>
  );
};

export default page;
