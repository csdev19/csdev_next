import React from 'react';
import Progress from '../../atoms/Progress/Progress';
import styles from './ProgressImg.module.css';

type ProgressImgProps = {
  radius: number;
  stroke: number;
  image: string;
  color: string;
  percent: number;
  onClick: any;
}

const ProgressImg = ({
  radius, stroke, image, color, percent, onClick,
}: ProgressImgProps) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      // Do whatever when esc is pressed
      onClick();
    }
  };
  return (
    <div
      className={styles['progress-container']}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <Progress
        radius={radius}
        stroke={stroke}
        color={color}
        percent={percent}
      />
      <img src={image} alt="" className={styles['progress-image']} />
      <text style={{ color }} className={styles['progress-percent']}>{ `${percent}%` }</text>
    </div>
  );
};

export default ProgressImg;