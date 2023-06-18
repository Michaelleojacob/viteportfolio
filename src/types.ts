import { ReactNode } from "react";

export interface ScreenSizeContextType {
  screenSize: string;
}

export interface ChildProp {
  children: ReactNode;
}

export interface AppCardProps {
  title: string;
  imgurl: string;
  repo: string;
  demo: string;
  icons: [];
}
