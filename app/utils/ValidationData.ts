import { z } from "zod";

// Define the Zod schema for a single question
const questionSchema = z.object({
  Topic: z.string(),
  Problem: z.string(),
  Done: z.boolean(),
  Bookmark: z.boolean(),
  Notes: z.string().optional(),
  URLs: z.array(z.string().url()),
});

// Define the Zod schema for an array of questions
const questionsSchema = z.array(questionSchema);

// Define the Zod schema for a topic
const topicSchema = z.object({
  topicName: z.string(),
  position: z.number(),
  started: z.boolean(),
  doneQuestions: z.number(),
  questions: questionsSchema,
});

// Define the Zod schema for the entire data structure
export const dataSchema = z.array(topicSchema);
