import React from "react";
import "./button.css";
import {
  Button,
  keyframes
} from '@chakra-ui/react';

interface VibrateButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const animation = keyframes`
  from {
    background: inherit
  }

  to {
    background: lightblue
  }
`;

/**
 * Primary UI component for user interaction
 */
export const VibrateButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: VibrateButtonProps) => {
  const myAmazingAnimation = `${animation} infinte 1s`;
  return (
    <Button
      _hover={{
        animation: myAmazingAnimation,
      }}

    >
      {label}
    </Button>
  );
};
