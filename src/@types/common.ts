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

export type ActorDetail = {
  id: string;
  image: string;
  name: string;
  asCharacter: string;
}

type Makers = {
  id: string;
  name: string;
  description: string;
}

export interface MovieCastType {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string | number;
  directors: {
    job: string
    items: Makers[]
  };
  writers: {
      job: string;
      items: Makers[]
  };
  actors: ActorDetail[]
}

export interface TrailerType {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string | number;
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  thumbnailUrl: string;
  uploadDate: string;
  link: string;
  linkEmbed: string;
  errorMessage: string;
}

export interface TrailerTypeYT {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  videoId: string;
  videoUrl: string;
  errorMessage: string;
}

export type SingleSearchType = {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}

export interface SearchResultType {
  searchType: string;
  expression: string;
  results: SingleSearchType[];
  errorMessage: string;
}

