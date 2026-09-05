/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import FindUsRoot, {
  FindUsChild,
  FindUsCircle,
  FindUsContacts,
  FindUsContactsWrapper,
  FindUsInfoWrapper,
} from './FindUs.styled';
import MapModule from 'pages/HomePage/modules/MapModule';
import { BaseContainer } from 'UI';

import useHome from 'store/slices/home/useHome';

import emailIcon from 'assets/mailIcon.png';
import phoneIcon from 'assets/phoneIcon.png';
import useMediaBreakpoints from 'hooks/useMediaBreakpoints';

const FindUs = () => {
  const { getContactInfo, info } = useHome();
  const { tabletBreakpoint } = useMediaBreakpoints();

  useEffect(() => {
    getContactInfo();
  }, []);

  return (
    <FindUsRoot id="info">
      <FindUsContactsWrapper>
        <BaseContainer>
          <FindUsContacts>
            <FindUsInfoWrapper>
              {!tabletBreakpoint && (
                <img
                  src={phoneIcon}
                  style={{ width: 50, height: 50, opacity: '0.7' }}
                />
              )}
              <FindUsChild>
                <p>Give us a call</p>
                <a href={`tel:${info?.phone_number}`}>{info?.phone_number}</a>
              </FindUsChild>
            </FindUsInfoWrapper>

            <FindUsInfoWrapper>
              {!tabletBreakpoint && (
                <img
                  src={emailIcon}
                  style={{ width: 50, height: 50, opacity: '0.7' }}
                />
              )}
              <FindUsChild>
                <p>Send us an email</p>
                <a href={`mailto:${info?.email}`}>{info?.email}</a>
              </FindUsChild>
            </FindUsInfoWrapper>
          </FindUsContacts>
        </BaseContainer>
      </FindUsContactsWrapper>

      <MapModule coords={info?.car_wash_coordinates} />
    </FindUsRoot>
  );
};

export default FindUs;
