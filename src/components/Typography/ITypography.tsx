import { ReactNode, CSSProperties } from "react";

export interface ITypography extends React.HTMLAttributes<HTMLFontElement> {
  bold?: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  color?: string;
}
