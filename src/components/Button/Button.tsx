import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Button variant style */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /** Button size */
  size?: "small" | "medium" | "large";
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Button type */
  type?: "button" | "submit" | "reset";
  /** Optional click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Optional test id for testing */
  testId?: string;
  /** Optional className for custom styling */
  className?: string;
}

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case "primary":
      return `
        background-color: #007bff;
        color: white;
        border: 1px solid #007bff;
        &:hover:not(:disabled) {
          background-color: #0056b3;
          border-color: #0056b3;
        }
      `;
    case "secondary":
      return `
        background-color: #6c757d;
        color: white;
        border: 1px solid #6c757d;
        &:hover:not(:disabled) {
          background-color: #545b62;
          border-color: #545b62;
        }
      `;
    case "outline":
      return `
        background-color: transparent;
        color: #007bff;
        border: 1px solid #007bff;
        &:hover:not(:disabled) {
          background-color: #007bff;
          color: white;
        }
      `;
    case "ghost":
      return `
        background-color: transparent;
        color: #6c757d;
        border: 1px solid transparent;
        &:hover:not(:disabled) {
          background-color: #f8f9fa;
          color: #495057;
        }
      `;
    default:
      return `
        background-color: #007bff;
        color: white;
        border: 1px solid #007bff;
        &:hover:not(:disabled) {
          background-color: #0056b3;
          border-color: #0056b3;
        }
      `;
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return `
        padding: 6px 12px;
        font-size: 12px;
        border-radius: 4px;
      `;
    case "large":
      return `
        padding: 12px 24px;
        font-size: 16px;
        border-radius: 8px;
      `;
    default: // medium
      return `
        padding: 8px 16px;
        font-size: 14px;
        border-radius: 6px;
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 500;
  line-height: 1.4;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  text-decoration: none;
  border: none;
  outline: none;

  ${(props) => getVariantStyles(props.variant || "primary")}
  ${(props) => getSizeStyles(props.size || "medium")}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  type = "button",
  onClick,
  testId,
  className,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      type={type}
      onClick={onClick}
      data-testid={testId}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
