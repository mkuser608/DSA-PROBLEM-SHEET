import Localbase from "localbase";
import QuestionData, { Topic, version } from "@/app/data/450DSA";

let db = new Localbase("db");
db.config.debug = false;

const localVersion = localStorage.getItem("450version");

export function insertData(callback: () => void) {
  QuestionData.forEach((topic, index) => {
    const key = topic.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase();
    db.collection("450dsaArchive").add(topic, key);
  });
  getData(callback);
}

export function getData(): Promise<Topic[]> {
  return db
    .collection("450dsaArchive")
    .get<Topic[]>()
    .then((data) => {
      if (data && data.length > 0) {
        return data;
      } else {
        // If no data found, insert and then retrieve again
        return new Promise((resolve, reject) => {
          insertData(() => {
            getData().then(resolve).catch(reject);
          });
        });
      }
    });
}

export function getTopicData(key: string, callback: (document: any) => void) {
  db.collection("450dsaArchive")
    .doc(key)
    .get()
    .then((document) => {
      callback(document);
    });
}

export function updateDBData(key: string, updateData: any) {
  db.collection("450dsaArchive").doc(key).update(updateData);
}

export function resetDBData(callback: (response: any) => void) {
  db.collection("450dsaArchive")
    .delete()
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      console.error("There was an error:", error);
    });
}

export function exportDBData(callback: (data: any[]) => void) {
  db.collection("450dsaArchive")
    .get()
    .then((data) => {
      callback(data);
    });
}

export function importDBData(data: Topic[], callback: (data: Top[]) => void) {
  resetDBData((response) => {
    data.forEach((topic, index) => {
      const key = topic.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase();
      db.collection("450dsaArchive").add(topic, key);
    });
    getData((data) => {
      callback(data);
    });
  });
}

interface FilterCriteria {
  topicName?: string;
  done?: boolean;
  bookmark?: boolean;
}

export async function getFilteredData(
  filters: FilterCriteria
): Promise<Topic[]> {
  const allTopics: Topic[] = await db
    .collection("450dsaArchive")
    .get<Topic[]>();
  return allTopics.filter((topic) => {
    return (
      (!filters.topicName ||
        convertStringToUrl(topic.topicName).includes(filters.topicName)) &&
      topic.questions.some(
        (question) =>
          (filters.done === undefined || question.Done === filters.done) &&
          (filters.bookmark === undefined ||
            question.Bookmark === filters.bookmark)
      )
    );
  });
}

const convertStringToUrl = (input: string): string => {
  let lowerCaseString = input.toLowerCase();
  let replacedString = lowerCaseString.replace(/&/g, "and");
  replacedString = replacedString.replace(/\s+/g, "-");
  return replacedString;
};
