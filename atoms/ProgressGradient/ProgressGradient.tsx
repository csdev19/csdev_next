import React, { FunctionComponent, VoidFunctionComponent } from 'react';
import styles from './ProgressGradient.module.css';
import clsx from 'clsx';
import { ProgressGradientProps } from '@atoms/ProgressGradient/ProgressGradient.types';

const ProgressGradient: FunctionComponent<ProgressGradientProps> = ({
  gradient,
}) => {
  return (
    <>
      <div
        className={clsx([
          styles.gradient1,
          'absolute gradient-1 h-4 md:h-1.5 -bottom-4	md:bottom-0 rounded-r-lg',
        ])}
        style={{
          left: 0,
          width: `${gradient}%`,
        }}
      ></div>
    </>
  );
};

export default ProgressGradient;
