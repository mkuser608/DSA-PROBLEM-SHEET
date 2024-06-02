import { Topic } from "@/app/data/450DSA";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const page = ({ params: { slug } }: Props) => {
  return <div>page {slug}</div>;
};

export default page;
