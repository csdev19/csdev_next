import React, { FunctionComponent } from 'react';
import { ButtonBaseProps, ButtonProps } from './Button.types';

const ButtonIcon: FunctionComponent<ButtonBaseProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="p-1 bg-cs-pink text-white rounded-full"
    >
      {children}
    </button>
  );
};

const ButtonRaised: FunctionComponent<ButtonBaseProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="py-3 px-7 bg-cs-pink text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  mode = 'raised',
}) => (
  <>
    {
      {
        icon: <ButtonIcon onClick={onClick}>{children}</ButtonIcon>,
        raised: <ButtonRaised onClick={onClick}>{children}</ButtonRaised>,
      }[mode]
    }
  </>
);

export default Button;
