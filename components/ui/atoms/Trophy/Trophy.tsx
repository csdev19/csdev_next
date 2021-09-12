import React from 'react';

type TrophyProps = {
  row: number;
  col: number;
}

const Trophy = ({
  row, col,
}: TrophyProps) => (
  <>
    <a href="https://github.com/ryo-ma/github-profile-trophy">
      <img
        className="fullwidth"
        src={`https://github-profile-trophy.vercel.app/?username=cristiandev19&row=${row}&column=${col}`}
        alt="cristiandev19"
      />
    </a>
  </>
);

export default Trophy;