// Button.js
import styled, { css } from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ opacity }) => opacity || 1};
  outline: none;
  border: none;
  font-family: "Open Sauce Two";

  ${({ size }) =>
    size === "xs" &&
    css`
      padding: 4px 6px;
      gap: 4px;
      width: 85px;
      height: 24px;
      border-radius: 6px;
      font-size: 11px;
      line-height: 16px;
      font-weight: 600;
    `}

  ${({ size }) =>
    size === "sm" &&
    css`
      width: 100px;
      height: 32px;
      padding: 8px;
      gap: 6px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
    `}
  
  ${({ size }) =>
    size === "md" &&
    css`
      width: 120px;
      height: 40px;
      padding: 12px 8px;
      gap: 8px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 13px;
      line-height: 24px;
    `}

  ${({ size }) =>
    size === "lg" &&
    css`
      width: 138px;
      height: 48px;
      padding: 16px 12px;
      gap: 8px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
    `}

  ${({ size }) =>
    size === "xl" &&
    css`
      width: 163px;
      height: 56px;
      padding: 16px 16px;
      gap: 12px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    `}

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: #8d7aff;
      color: #fff;
      box-shadow:
        inset 0px 2px 8px -2px rgba(255, 255, 255, 0.56),
        inset 0px 0px 8px -2px rgba(0, 0, 0, 0.24);

      &:hover {
        background: #7b5cfa;
      }

      &:disabled {
        background: #ebecf0;
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: #f4f4f6;
      color: #5b616d;
      border: 1px solid #f4f4f6;

      &:hover {
        background: #ebecf0;
        border: 1px solid #ebecf0;
      }

      &:disabled {
        background: #ebecf0;
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

    ${({ variant }) =>
    variant === "primary-light" &&
    css`
      background: #8d7aff1a;
      color: #6635f2;

      &:hover {
        background: #8d7aff29;
      }

      &:disabled {
        background: #ebecf0;
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === "tertiary" &&
    css`
      background: #ffffff;
      color: #5b616d;
      border: 1px solid #ebecf0;

      &:hover {
        background: #f4f4f6;
        border: 1px solid #ebecf0;
      }

      &:disabled {
        background: #ebecf0;
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === "quaternary" &&
    css`
      background: none;
      color: #5b616d;
      border: none;

      &:hover {
        color: #0a0c11;
        background: #f4f4f6;
      }

      &:disabled {
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
`;

const Success = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ opacity }) => opacity || 1};
  outline: none;
  border: none;
  font-family: "Open Sauce Two";

  ${({ size }) =>
    size === "xs" &&
    css`
      padding: 4px 6px;
      gap: 4px;
      width: 85px;
      height: 24px;
      border-radius: 6px;
      font-size: 11px;
      line-height: 16px;
      font-weight: 600;
    `}

  ${({ size }) =>
    size === "sm" &&
    css`
      width: 100px;
      height: 32px;
      padding: 8px;
      gap: 6px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
    `}
  
  ${({ size }) =>
    size === "md" &&
    css`
      width: 120px;
      height: 40px;
      padding: 12px 8px;
      gap: 8px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 13px;
      line-height: 24px;
    `}

  ${({ size }) =>
    size === "lg" &&
    css`
      width: 138px;
      height: 48px;
      padding: 16px 12px;
      gap: 8px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
    `}

  ${({ size }) =>
    size === "xl" &&
    css`
      width: 163px;
      height: 56px;
      padding: 16px 16px;
      gap: 12px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    `}

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: #50df3a;
      color: #000000;
      box-shadow:
        inset 0px 2px 8px -2px rgba(255, 255, 255, 0.56),
        inset 0px 0px 8px -2px rgba(0, 0, 0, 0.24);

      &:hover {
        background: #35c220;
      }

      &:disabled {
        background: #ebecf0;
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: #f4f4f6;
      color: #2a9919;
      border: 1px solid #f4f4f6;

      &:hover {
        background: #ebecf0;
        border: 1px solid #ebecf0;
      }

      &:disabled {
        background: #ebecf0;
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === "primary-light" &&
    css`
      background: #50df3a1a;
      color: #2a9919;

      &:hover {
        background: #50df3a29;
      }

      &:disabled {
        background: #ebecf0;
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

      ${({ variant }) =>
    variant === "tertiary" &&
    css`
      background: #50df3a1a;
      color: #2a9919;
      border: 1px solid #a9ef9f;

      &:hover {
        background: #50df3a29;
        border: 1px solid #a9ef9f;
      }

      &:disabled {
        background: #ebecf0;
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === "quaternary" &&
    css`
      background: none;
      color: #35c220;
      border: none;

      &:hover {
        color: #2a9919;
        background: #50df3a1a;
      }

      &:disabled {
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
`;

const Warning = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ opacity }) => opacity || 1};
  outline: none;
  border: none;
  font-family: "Open Sauce Two";

  ${({ size }) =>
    size === "xs" &&
    css`
      padding: 4px 6px;
      gap: 4px;
      width: 85px;
      height: 24px;
      border-radius: 6px;
      font-size: 11px;
      line-height: 16px;
      font-weight: 600;
    `}

  ${({ size }) =>
    size === "sm" &&
    css`
      width: 100px;
      height: 32px;
      padding: 8px;
      gap: 6px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
    `}
  
  ${({ size }) =>
    size === "md" &&
    css`
      width: 120px;
      height: 40px;
      padding: 12px 8px;
      gap: 8px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 13px;
      line-height: 24px;
    `}

  ${({ size }) =>
    size === "lg" &&
    css`
      width: 138px;
      height: 48px;
      padding: 16px 12px;
      gap: 8px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
    `}

  ${({ size }) =>
    size === "xl" &&
    css`
      width: 163px;
      height: 56px;
      padding: 16px 16px;
      gap: 12px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    `}

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: #f36363;
      color: #fff;
      box-shadow:
        inset 0px 2px 8px -2px rgba(255, 255, 255, 0.56),
        inset 0px 0px 8px -2px rgba(0, 0, 0, 0.24);

      &:hover {
        background: #f03d3d;
      }

      &:disabled {
        background: #ebecf0;
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: #f4f4f6;
      color: #e92020;
      border: 1px solid #f4f4f6;

      &:hover {
        background: #ebecf0;
        border: 1px solid #ebecf0;
      }

      &:disabled {
        background: #ebecf0;
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === "primary-light" &&
    css`
      background: #f363631a;
      color: #e92020;

      &:hover {
        background: #f3636329;
      }

      &:disabled {
        background: #ebecf0;
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === "tertiary" &&
    css`
      background: #f363631a;
      color: #e92020;
      border: 1px solid #f9b3b3;

      &:hover {
        background: #f3636329;
        border: 1px solid #f9b3b3;
      }

      &:disabled {
        background: #ebecf0;
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === "quaternary" &&
    css`
      background: none;
      color: #f03d3d;
      border: none;

      &:hover {
        color: ##f03d3d;
        background: #f363631a;
      }

      &:disabled {
        color: #c3c6cc;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
`;

export default function CustomButton({
  children,
  variant = "primary",
  size = "medium",
  opacity = 1,
  disabled = false,
}) {
  return (
    <Button variant={variant} size={size} opacity={opacity} disabled={disabled}>
      {children}
    </Button>
  );
}

export function WarningButton({
  children,
  variant = "primary",
  size = "medium",
  opacity = 1,
  disabled = false,
}) {
  return (
    <Warning
      variant={variant}
      size={size}
      opacity={opacity}
      disabled={disabled}
    >
      {children}
    </Warning>
  );
}

export function SuccessButton({
  children,
  variant = "primary",
  size = "medium",
  opacity = 1,
  disabled = false,
}) {
  return (
    <Success
      variant={variant}
      size={size}
      opacity={opacity}
      disabled={disabled}
    >
      {children}
    </Success>
  );
}
