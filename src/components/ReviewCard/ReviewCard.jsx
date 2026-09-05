/* eslint-disable no-unused-vars */
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ReviewCardRoot, {
  ReviewContent,
  ReviewContentDesc,
  ReviewDate,
  ReviewWidget,
  ReviewWidgetRate,
  ReviewWidgetUser,
} from './ReviewCard.styled';
import dayjs from 'dayjs';
import React from 'react';

const ReviewCard = ({ data }) => {
  return (
    <ReviewCardRoot>
      <ReviewWidget>
        <ReviewWidgetUser>{data?.name}</ReviewWidgetUser>
        <ReviewWidgetRate>
          {data?.stars >= 1 ? (
            <StarOutlinedIcon sx={{ color: '#d4810f !important' }} />
          ) : (
            <StarOutlineIcon />
          )}
          {data?.stars >= 2 ? (
            <StarOutlinedIcon sx={{ color: '#d4810f !important' }} />
          ) : (
            <StarOutlineIcon />
          )}
          {data?.stars >= 3 ? (
            <StarOutlinedIcon sx={{ color: '#d4810f !important' }} />
          ) : (
            <StarOutlineIcon />
          )}
          {data?.stars >= 4 ? (
            <StarOutlinedIcon sx={{ color: '#d4810f !important' }} />
          ) : (
            <StarOutlineIcon />
          )}
          {data?.stars >= 5 ? (
            <StarOutlinedIcon sx={{ color: '#d4810f !important' }} />
          ) : (
            <StarOutlineIcon />
          )}
        </ReviewWidgetRate>
      </ReviewWidget>

      <ReviewContent>
        <ReviewContentDesc>{data?.description}</ReviewContentDesc>
      </ReviewContent>

      <ReviewDate>{dayjs(data?.created).format('DD MMM, YYYY')}</ReviewDate>
    </ReviewCardRoot>
  );
};

export default ReviewCard;
