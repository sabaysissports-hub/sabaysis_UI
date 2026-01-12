declare module "@/components/TextType" {
  import * as React from "react";

  export interface TextTypeProps {
    text: string | string[];
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    typingSpeed?: number;
    initialDelay?: number;
    pauseDuration?: number;
    deletingSpeed?: number;
    loop?: boolean;
    className?: string;
    showCursor?: boolean;
    hideCursorWhileTyping?: boolean;
    cursorCharacter?: string;
    cursorClassName?: string;
    cursorBlinkDuration?: number;
    textColors?: string[];
    variableSpeed?: { min: number; max: number };
    onSentenceComplete?: (sentence: string, index: number) => void;
    startOnVisible?: boolean;
    reverseMode?: boolean;
  }

  const TextType: React.ComponentType<TextTypeProps>;
  export default TextType;
}

