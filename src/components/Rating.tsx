import { FC, memo } from 'react';
import { MdStarHalf, MdStarOutline, MdStar } from 'react-icons/md';
import { createArray } from '../utils/helpers';

type RatingProps = {
  color?: string;
  stars: number;
};

const Rating: FC<RatingProps> = ({ color, stars }) => {
  const fullStarsNumber = Math.trunc(stars);
  const halfStarsNumber = stars - fullStarsNumber > 0 ? 1 : 0;
  const outlineStarsNumber = 5 - Math.ceil(stars);
  const mainColor = color ? color : 'gold';
  let starKey = 0;
  return (
    <div className="flex">
      {createArray(fullStarsNumber).map((star) => (
        <MdStar key={starKey++} color={mainColor}></MdStar>
      ))}
      {createArray(halfStarsNumber).map((star) => (
        <MdStarHalf key={starKey++} color={mainColor}></MdStarHalf>
      ))}
      {createArray(outlineStarsNumber).map((star) => (
        <MdStarOutline key={starKey++} color={mainColor}></MdStarOutline>
      ))}
    </div>
  );
};

export default memo(Rating);
