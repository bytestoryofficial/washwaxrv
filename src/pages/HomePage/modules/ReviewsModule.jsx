import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';

import {
  ReviewButtons,
  ReviewModuleWrapper,
  ReviewRate,
  SuccessWrapper,
} from '../components/reviews/Reviews.styled';
import { BaseButton, BaseInput, BaseTextarea } from 'UI';

import useMediaBreakpoints from 'hooks/useMediaBreakpoints';
import useValidation from 'hooks/useValidation';
import useHome from 'store/slices/home/useHome';
import toast from 'react-hot-toast';

const ReviewsModule = ({ onClose, currentPage }) => {
  const { createReview, getReviews } = useHome();
  const { mobileBreakpoint } = useMediaBreakpoints();
  const [rate, setRate] = useState(0);
  const [rateError, setRateError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  const { errors, validate } = useValidation({
    name: null,
    description: null,
  });

  const { control, getValues } = useForm();

  const handleSubmit = () => {
    const formValues = { ...getValues() };
    const { ...validateFields } = formValues;

    if (rate === 0) setRateError(true);
    if (validate(validateFields) && rate > 0) {
      setLoader(true);
      const payload = {
        ...validateFields,
        stars: rate,
      };

      createReview(payload).then((response) => {
        if (response?.error) {
          toast.error('Ensure rate value is greater than or equal to 1');
          return;
        }
        setSuccess(true);
        setLoader(false);
        getReviews({ params: { page: currentPage, page_size: 4 } });

        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 5000);
      });
    }
  };

  const handleRate = (num) => () => {
    if (num === rate) setRate(0);
    else setRate(num);
  };

  return (
    <ReviewModuleWrapper>
      {success && (
        <SuccessWrapper>
          <div>Thank you for your feedback!</div>
        </SuccessWrapper>
      )}

      <ReviewRate>
        {rate >= 1 ? (
          <StarOutlinedIcon
            onClick={handleRate(1)}
            sx={{ color: '#d4810f !important' }}
          />
        ) : (
          <StarOutlineIcon
            onClick={handleRate(1)}
            sx={{ color: rateError && '#d32f2f !important' }}
          />
        )}

        {rate >= 2 ? (
          <StarOutlinedIcon
            onClick={handleRate(2)}
            sx={{ color: '#d4810f !important' }}
          />
        ) : (
          <StarOutlineIcon
            onClick={handleRate(2)}
            sx={{ color: rateError && '#d32f2f !important' }}
          />
        )}

        {rate >= 3 ? (
          <StarOutlinedIcon
            onClick={handleRate(3)}
            sx={{ color: '#d4810f !important' }}
          />
        ) : (
          <StarOutlineIcon
            onClick={handleRate(3)}
            sx={{ color: rateError && '#d32f2f !important' }}
          />
        )}

        {rate >= 4 ? (
          <StarOutlinedIcon
            onClick={handleRate(4)}
            sx={{ color: '#d4810f !important' }}
          />
        ) : (
          <StarOutlineIcon
            onClick={handleRate(4)}
            sx={{ color: rateError && '#d32f2f !important' }}
          />
        )}

        {rate >= 5 ? (
          <StarOutlinedIcon
            onClick={handleRate(5)}
            sx={{ color: '#d4810f !important' }}
          />
        ) : (
          <StarOutlineIcon
            onClick={handleRate(5)}
            sx={{ color: rateError && '#d32f2f !important' }}
          />
        )}
      </ReviewRate>

      <Controller
        name="name"
        control={control}
        render={({ field: { value, onChange } }) => (
          <BaseInput
            label="Name *"
            name="name"
            value={value}
            onChange={onChange}
            error={Boolean(errors?.name)}
            helperText={errors?.name}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field: { value, onChange } }) => (
          <BaseTextarea
            label="Message *"
            name="description"
            value={value}
            onChange={onChange}
            error={Boolean(errors?.description)}
            helperText={errors?.description}
          />
        )}
      />

      <ReviewButtons>
        <BaseButton
          loader={loader}
          label="Send Review"
          animate
          scrolling
          maxWidth={mobileBreakpoint ? '100%' : '200px'}
          onClick={handleSubmit}
          minWidth="150px"
        />

        <BaseButton
          label="Cancel"
          animate
          scrolling
          maxWidth={mobileBreakpoint ? '100%' : '200px'}
          onClick={onClose}
          minWidth="150px"
        />
      </ReviewButtons>
    </ReviewModuleWrapper>
  );
};

export default ReviewsModule;
