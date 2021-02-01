import React from "react";

interface ITextCounter {
  length?: number;
  maxLength?: number;
}

export const TextCounter = ({ length = 0, maxLength = 0 }: ITextCounter) => {
  const color =
    length === 0
      ? "text-counter-muted"
      : length >= maxLength
      ? "text-counter-danger"
      : "";
  return (
    <span className={`text-counter ${color}`}>{`${length}/${maxLength}`}</span>
  );
};

export default TextCounter;
