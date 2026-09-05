/* eslint-disable no-unused-vars */
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';

import { BaseButton, BaseInput, BaseReveal, BaseTextarea } from '../../../UI';
import {
  ButtonWrapper,
  ContactForm,
  SuccessWrapper,
} from '../components/contact/Contact.styled';

// import useMediaBreakpoints from '../../../hooks/useMediaBreakpoints';
// import useValidation from '../../../hooks/hooks/useValidation';
// import useHome from '../../../store/slices/home/useHome';
import useMediaBreakpoints from '../../../hooks/useMediaBreakpoints';
import useValidation from '../../../hooks/useValidation';
import useHome from '../../../store/slices/home/useHome';

const ContactModule = () => {
  const { mobileBreakpoint } = useMediaBreakpoints();
  const { contactUs } = useHome();
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  const { errors, validate } = useValidation({
    name: null,
    email: null,
    phone_number: null,
    message: null,
  });

  const { control, getValues, reset } = useForm({
    defaultValues: {
      name: null,
      email: null,
      phone_number: null,
      message: null,
    },
  });

  const handleSubmit = () => {
    const formValues = { ...getValues() };
    const { ...validateFields } = formValues;
    if (validate(validateFields)) {
      setLoader(true);
      const payload = {
        ...validateFields,
      };

      contactUs(payload).then(() => {
        setSuccess(true);
        setLoader(false);
        reset({
          name: '',
          email: '',
          phone_number: '',
          message: '',
        });
        setTimeout(() => setSuccess(false), 5000);
      });
    }
  };

  return (
    <ContactForm>
      {success && (
        <BaseReveal width="100%">
          <SuccessWrapper>
            <div>Thank you for the request!</div>
            <div>We will reply as soon as possible</div>
          </SuccessWrapper>
        </BaseReveal>
      )}
      <BaseReveal width="100%">
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
      </BaseReveal>

      <BaseReveal width="100%">
        <Controller
          name="email"
          control={control}
          render={({ field: { value, onChange } }) => (
            <BaseInput
              label="Email *"
              name="email"
              value={value}
              onChange={onChange}
              error={Boolean(errors?.email)}
              helperText={errors?.email}
            />
          )}
        />
      </BaseReveal>

      <BaseReveal width="100%">
        <Controller
          name="phone_number"
          control={control}
          render={({ field: { value, onChange } }) => (
            <BaseInput
              label="Phone *"
              name="phone_number"
              value={value}
              onChange={onChange}
              error={Boolean(errors?.phone_number)}
              helperText={errors?.phone_number}
            />
          )}
        />
      </BaseReveal>

      <BaseReveal width="100%">
        <Controller
          name="message"
          control={control}
          render={({ field: { value, onChange } }) => (
            <BaseTextarea
              label="Message *"
              name="message"
              value={value}
              onChange={onChange}
              error={Boolean(errors?.message)}
              helperText={errors?.message}
            />
          )}
        />
      </BaseReveal>

      <BaseReveal width="100%">
        <ButtonWrapper>
          <BaseButton
            loader={loader}
            label="Send Message"
            animate
            scrolling
            maxWidth={mobileBreakpoint ? '100%' : '200px'}
            onClick={handleSubmit}
          />
        </ButtonWrapper>
      </BaseReveal>
    </ContactForm>
  );
};

export default ContactModule;
