"use server";

import OpenAI from "openai";
import { Ideas } from "@/types/idea";
import { ResponseData } from "./generator";
import generateIdeasSchema from "@/schemas/openai.json";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

export const generateIdeas = async (data: ResponseData): Promise<Ideas> => {
  try {
    const systemMessage =
      "you will generate 8 ideas for a project based on the following criteria: project type, diffculty, and theme. Technologies suggested should be based on the project type and difficulty. The suggested technologies will be at least 3. Example technologies are: React, Angular, Python, Java, AWS, Astro, etc";
    const { type, difficulty, theme, additionalInfo } = data;

    const response = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1:free",
      messages: [
        {
          role: "system",
          content: systemMessage,
        },
        {
          role: "user",
          content: `I want to generate ideas for a ${type} project`,
        },
        {
          role: "user",
          content: `The project should be of ${difficulty} difficulty`,
        },
        {
          role: "user",
          content: `The project should be based on the theme of ${theme}.`,
        },
        {
          role: "user",
          content: `Additional information: ${additionalInfo}`,
        },
      ],
      response_format: {
        type: "json_schema",
        json_schema: generateIdeasSchema,
      },
    });

    const content = response.choices[0].message?.content;
    if (!content) {
      throw new Error("Failed to generate ideas");
    }
    const ideas: Ideas = JSON.parse(content);

    return ideas;
  } catch (error) {
    const errorType = error as { status: number };
    if (errorType.status === 429) {
      console.error("Quota excedida. Considera revisar tu plan de OpenAI.");
    } else {
      console.error("Error llamando a OpenAI:", error);
    }
    throw new Error("Failed to generate ideas");
  }
};
