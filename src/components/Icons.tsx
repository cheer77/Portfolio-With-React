import React from 'react';
import iconsSprite from '../images/icons/icon-sprite.svg';

type IconsPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  count?: number;
};

export const Icons = (props: IconsPropsType) => {
  return (
    <svg
      width={props.width || '14'}
      height={props.height || '14'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.viewBox || '0 0 14 14'}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};
