"use client";

import { Ideas } from "@/types/idea";
import { createContext, useState, useContext } from "react";

const ideasContext = createContext<
  | { ideas: Ideas; setIdeas: React.Dispatch<React.SetStateAction<Ideas>> }
  | undefined
>(undefined);

export const IdeasProvider = ({ children }: { children: React.ReactNode }) => {
  const [ideas, setIdeas] = useState<Ideas>({
    projects: [],
  });

  return (
    <ideasContext.Provider value={{ ideas, setIdeas }}>
      {children}
    </ideasContext.Provider>
  );
};

export const useIdeas = () => {
  const context = useContext(ideasContext);
  if (!context) {
    throw new Error("useIdeas must be used within a IdeasProvider");
  }
  return context;
};
