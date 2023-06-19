import { ReactNode } from "react";

export interface ScreenSizeContextType {
  screenSize: string;
}

export interface ChildProp {
  children: ReactNode;
}

export interface App {
  id: number;
  title: string;
  subtitle: string;
  imgurl: string;
  alt: string;
  repo: string;
  demo: string;
  icons: string[];
}

export interface IconLinkTypes {
  linkurl: string;
  icontype: string;
}
