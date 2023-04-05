import React, { useLayoutEffect, useRef, useState } from "react";

interface TextTrimmerProps {
  textInput: string | undefined;
  linesNumber?: number | undefined;
}

export const TextTrimmer: React.FC<TextTrimmerProps> = ({
  textInput,
  linesNumber = 1,
}) => {
  const textContainerRef = useRef<HTMLDivElement>(null);

  const [text, setText] = useState<string[] | undefined>(textInput?.split(" "));
  const [isTrimmed, setIsTrimmed] = useState(false);

  const extractTextChild = (textContainer: HTMLElement, index: number) => {
    return textContainer.children[index] as HTMLElement;
  };

  useLayoutEffect(() => {
    const textContainer = textContainerRef.current;
    const lineHeight = textContainer?.children[0].clientHeight;

    if (textContainer && text && lineHeight) {
      const rootOffset = textContainer.offsetTop;

      const trimmedText: string[] = [];

      for (let i = 0; i <= text.length - 1; i++) {
        const textChild = extractTextChild(textContainer, i);

        if (
          textChild.offsetTop - rootOffset <=
          lineHeight * (linesNumber - 1)
        ) {
          trimmedText.push(textChild.textContent as string);
        }
      }

      const afterLastTextChild = textContainer.children[trimmedText.length] as
        | HTMLElement
        | undefined;

      if (
        afterLastTextChild &&
        afterLastTextChild.offsetTop - rootOffset >
          lineHeight * (linesNumber - 1)
      ) {
        trimmedText[trimmedText.length - 1] = "...";
      }

      setIsTrimmed(true);
      setText(trimmedText);
    }
  }, []);

  const renderText = (text: string[] | undefined) => {
    return text?.map((t, i) => (
      <span key={i} id={`word-${i}`} className={`inline-block`}>
        {t}{" "}
      </span>
    ));
  };

  const renderTrimmedText = (text: string[] | undefined) => {
    return text?.join(" ");
  };

  return (
    <div ref={textContainerRef} id="text-container" className="w-full">
      {!isTrimmed ? renderText(text) : renderTrimmedText(text)}
    </div>
  );
};
