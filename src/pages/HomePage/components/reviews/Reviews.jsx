/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import { BaseButton, BaseContainer, BasePagination, BaseReveal } from 'UI';
import { ReviewCard } from 'components';
import ReviewsRoot, {
  ReviewsButton,
  ReviewsTitle,
  ReviewsWrapper,
} from './Reviews.styled';

import ReviewsModule from 'pages/HomePage/modules/ReviewsModule';

import useMediaBreakpoints from 'hooks/useMediaBreakpoints';
import useHome from 'store/slices/home/useHome';

const Reviews = () => {
  const { getReviews, allReviews, reviews } = useHome();
  const [openForm, setOpenForm] = useState(false);
  const { mobileBreakpoint } = useMediaBreakpoints();

  const [currentPage, setCurrentPage] = useState(1);

  const handleOpenForm = () => {
    setOpenForm((prevState) => !prevState);
  };

  const handlePaginate = (_event, newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    getReviews({ params: { page: currentPage, page_size: 4 } });
  }, [currentPage]);

  return (
    <ReviewsRoot id="reviews">
      <BaseContainer>
        <BaseReveal width="100%">
          <ReviewsTitle>Customer Reviews</ReviewsTitle>
        </BaseReveal>

        <BaseReveal width="100%">
          <ReviewsWrapper>
            {allReviews?.map((review, index) => (
              <ReviewCard data={review} key={index} />
            ))}
          </ReviewsWrapper>
        </BaseReveal>

        <BaseReveal width="100%">
          <ReviewsWrapper sx={{ justifyContent: 'center', marginTop: '10px' }}>
            <BasePagination
              totalPages={(reviews?.count / 4).toFixed(0)}
              currentPageNo={currentPage}
              onPaginate={handlePaginate}
            />
          </ReviewsWrapper>
        </BaseReveal>

        {openForm && <ReviewsModule onClose={handleOpenForm} />}

        {!openForm && (
          <BaseReveal width="100%">
            <ReviewsButton>
              <BaseButton
                maxWidth={mobileBreakpoint ? '100%' : '200px'}
                label="Write a Review"
                onClick={handleOpenForm}
                animate
                scrolling
              />
            </ReviewsButton>
          </BaseReveal>
        )}
      </BaseContainer>
    </ReviewsRoot>
  );
};

export default Reviews;
