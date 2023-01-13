import { ExplorerImage } from ".";
import { ReactNode } from "react";
import { Feature } from "./index";

export type ExploreProps = {
  item: ExplorerImage;
  index: number;
  active: string;
  handleClick: (val: string) => void;
};

export type TypingProps = {
  title: string;
  textStyles?: string;
};

export type TitleProps = {
  children: ReactNode;
  textStyles?: string;
};

export type StartStepsProps = {
  number: number;
  content: string;
};

export type NewFeaturesProps = {
  data: Feature;
};

export type InsightProps = {
  data: Feature;
  index: number;
};
