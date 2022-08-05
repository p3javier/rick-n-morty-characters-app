import React, { useState, useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface HideProps {
  children: JSX.Element | JSX.Element[] | string;
  xs?: boolean;
  sm?: boolean;
  md?: boolean | true;
  lg?: boolean;
  xl?: boolean;
  xsUp?: boolean;
  smUp?: boolean;
  mdUp?: boolean;
  lgUp?: boolean;
  xsDown?: boolean;
  smDown?: boolean;
  mdDown?: boolean;
  lgDown?: boolean;
}

//type Size = "xs" | "sm" | "md" | "lg" | "xl";

const Hide = (props: HideProps) => {
  const { children, ...mediaSize } = props;
  const [isVisible, setIsVisible] = useState<boolean>();

  const getQuery: (size: string) => string = (size) => {
    switch (size) {
      case "xl":
        return "(min-width: 1024px)";
      case "lg":
        return "(min-width: 900px) and (max-width: 1024px)";
      case "md":
        return "(min-width: 768px) and (max-width: 900px)";
      case "sm":
        return "(min-width: 420px) and (max-width: 768px)";
      case "xs":
        return "(max-width: 420px)";
      case "lgUp":
        return "(min-width: 900px)";
      case "mdUp":
        return "(min-width: 768px)";
      case "smUp":
        return "(min-width: 420px)";
      case "xsUp":
        return "(min-width: 0px)";
      case "xlDown":
        return "(max-width: 1024px)";
      case "lgDown":
        return "(max-width: 900px)";
      case "mdDown":
        return "(max-width: 768px)";
      case "smDown":
        return "(max-width: 420px)";

      default:
        return "error";
    }
  };

  const getSize: () => string = () => {
    const propString = Object.keys(mediaSize)[0];
    const validValues = [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "xsUp",
      "mdUp",
      "lgUp",
      "smDown",
      "mdDown",
      "lgDown",
      "xlDown",
    ];
    if (validValues.includes(propString)) {
      return propString;
    }
    return "md";
  };
  const matches = useMediaQuery(getQuery(getSize()));
  useEffect(() => {
    setIsVisible(matches);
  }, [matches]);

  return isVisible ? <>{children}</> : null;
};

export default Hide;
