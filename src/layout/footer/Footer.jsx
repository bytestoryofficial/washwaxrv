import FooterRoot, { FooterCopyright, FooterInner } from './Footer.styled';
import { BaseContainer } from 'UI';

const Footer = () => {
  return (
    <FooterRoot>
      <BaseContainer>
        <FooterInner>
          <FooterCopyright>
            <div>Wash Wax RV ©2022-2024</div>
            <div>All rights reserved</div>
          </FooterCopyright>
        </FooterInner>
      </BaseContainer>
    </FooterRoot>
  );
};

export default Footer;
