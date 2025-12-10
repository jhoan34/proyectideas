"use server";

import OpenAI from "openai";
import { Ideas } from "@/types/idea";
import { ResponseData } from "./generator";
import generateIdeasSchema from "@/schemas/openai.json";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_PRIME,
  baseURL: process.env.OPENAI_BASE_URL, // OpenRouter
});

export const generateIdeas = async (data: ResponseData): Promise<Ideas> => {
  const { type, difficulty, theme, additionalInfo } = data;

  // Modelos recomendados en OpenRouter (free)
  const models = [
    "mistralai/devstral-2512:free",
    "amazon/nova-2-lite-v1:free"      // A veces FREE
  ];

  const systemMessage =
    "you will generate 8 ideas for a project based on the following criteria: project type, difficulty, and theme...";

  for (const model of models) {
    try {
      console.log("Trying model:", model);

      const response = await openai.chat.completions.create({
        model,
        messages: [
          { role: "system", content: systemMessage },
          { role: "user", content: `I want to generate ideas for a ${type} project` },
          { role: "user", content: `The project should be of ${difficulty} difficulty` },
          { role: "user", content: `The project should be based on the theme of ${theme}.` },
          { role: "user", content: `Additional information: ${additionalInfo}` },
        ],
        response_format: {
          type: "json_schema",
          json_schema: generateIdeasSchema,
        },
      });

      const content = response.choices[0].message?.content;

      if (content) {
        return JSON.parse(content);
      }
    } catch (error: unknown) {
      const errore = error as { response: { status: number } };
      const status = errore?.response?.status;

      if (status === 429) {
        console.warn(`Modelo ${model} agotó cuota. Probando siguiente...`);
        continue; // intenta el siguiente modelo
      }

      console.error("Error real:", error);
      throw new Error("OpenRouter API error");
    }
  }

  throw new Error("No models available – all free models exceeded quota.");
};
