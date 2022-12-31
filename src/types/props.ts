import { ExplorerImage } from '.';
import { ReactNode } from 'react';

export type ExploreProps = {
  item: ExplorerImage;
  index: number;
  active: string;
  handleClick: (val: string) => void;
};

export type TypingProps = {
  title: string;
  textStyles: string;
};

export type TitleProps = {
  children: ReactNode;
  textStyles: string;
};
