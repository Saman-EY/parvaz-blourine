"use client";

import { ICourse, ITour } from "@/types/tourSingle";
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface SomeDataContextType {
  currentCourse: ICourse | null;
  setCurrentCourse: Dispatch<SetStateAction<ICourse | null>>;
  tour: ITour | null;
  setTour: Dispatch<SetStateAction<ITour | null>>;
}

const MyDataContext = createContext<SomeDataContextType | undefined>(undefined);

export function MyDataProvider({ children }: { children: ReactNode }) {
  const [currentCourse, setCurrentCourse] = useState<ICourse | null>(null);
  const [tour, setTour] = useState<ITour | null>(null);

  return (
    <MyDataContext.Provider value={{ currentCourse, setCurrentCourse, tour, setTour }}>
      {children}
    </MyDataContext.Provider>
  );
}

export const useMyDataCxt = () => {
  const context = useContext(MyDataContext);
  if (!context) {
    throw new Error("useMyDataCxt must be used within a MyDataProvider");
  }
  return context;
};
