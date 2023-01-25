import { ReactNode } from "react";

export type PageType = {
  path: string;
  element: ReactNode;
}


export interface MovieCardProps {
  crew?: string;
  fullTitle?:string;
  id?: string;
  imDbRating?: string;
  imDbRatingCount?: string;
  image?: string;
  rank?: string;
  rankUpDown?: string;
  title?: string;
  year?: string;
  index?: number;
  handleClick?: () => void;
} 