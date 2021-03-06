import React, { VoidFunctionComponent } from 'react';
import HoveredCard from 'atoms/HoveredCard/HoveredCard';
import {
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
  TwitterIcon,
} from '@shared/Icons';

const SocialSection: VoidFunctionComponent = () => {
  const handleClick = (url): void => {
    window.open(url, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
      <HoveredCard onClick={() => handleClick('https://github.com/csdev19')}>
        <div className="flex items-center	flex-col p-10">
          <GithubIcon width={80} height={80} />
        </div>
      </HoveredCard>

      <HoveredCard
        onClick={() =>
          handleClick('https://www.linkedin.com/in/cristian-sotomayor19/')
        }
      >
        <div className="flex items-center	flex-col p-10">
          <LinkedinIcon width={80} height={80} />
        </div>
      </HoveredCard>

      <HoveredCard
        onClick={() =>
          handleClick(
            'https://www.youtube.com/channel/UCbcKdTfx7bE4bim6yynimZw',
          )
        }
      >
        <div className="flex items-center	flex-col p-10">
          <YoutubeIcon width={80} height={80} />
        </div>
      </HoveredCard>

      <HoveredCard onClick={() => handleClick('https://twitter.com/csdev19')}>
        <div className="flex items-center	flex-col p-10">
          <TwitterIcon width={80} height={80} />
        </div>
      </HoveredCard>
    </div>
  );
};

export default SocialSection;
