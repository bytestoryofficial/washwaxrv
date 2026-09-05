/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/material';
import { useEffect } from 'react';

import ServiceRoot, {
  ServiceContainer,
  ServiceInner,
  ServiceItem,
  ServiceItemText,
  ServiceItemTitle,
  ServiceTitle,
} from './Service.styled';
import { BaseContainer, BaseLine, BaseReveal } from 'UI';

import useHome from 'store/slices/home/useHome';

const ServicePriceItem = ({ title, price }) => {
  return (
    <div>
      <BaseContainer>
        <BaseReveal width="100%">
          <ServiceItem>
            <ServiceItemText>{title}</ServiceItemText>
            <ServiceItemText>{price}</ServiceItemText>
          </ServiceItem>
        </BaseReveal>
      </BaseContainer>
      <BaseReveal width="100%">
        <BaseLine />
      </BaseReveal>
    </div>
  );
};

const Service = () => {
  const { getServices, services } = useHome();

  useEffect(() => {
    getServices();
  }, []);

  return (
    <ServiceRoot id="services">
      <BaseContainer>
        <BaseReveal width="100%">
          <ServiceTitle>Our Services</ServiceTitle>
        </BaseReveal>
      </BaseContainer>

      {services.map((service) => (
        <ServiceInner key={service?.title}>
          <BaseContainer>
            <BaseReveal width="100%">
              <Box
                justifyContent="space-between"
                display="flex"
                alignItems="center"
                width="100%"
              >
                <ServiceItemTitle>{service?.title}</ServiceItemTitle>
                <ServiceItemTitle sx={{ paddingRight: '15px' }}>
                  {service?.price}
                </ServiceItemTitle>
              </Box>
            </BaseReveal>
          </BaseContainer>

          <BaseContainer>
            <ServiceContainer>
              <BaseReveal width="100%">
                <BaseLine />
              </BaseReveal>

              {service.services.map((item, index) => (
                <ServicePriceItem
                  title={item?.title}
                  key={item?.title + index}
                  price={item?.price}
                />
              ))}
            </ServiceContainer>
          </BaseContainer>
        </ServiceInner>
      ))}
    </ServiceRoot>
  );
};

export default Service;
