import ContactRoot, {
  ContactInner,
  ContactText,
  ContactTextInfo,
  ContactTextTitle,
} from './Contact.styled';
import { BaseContainer, BaseReveal } from 'UI';

import ContactModule from 'pages/HomePage/modules/ContactModule';

const Contact = () => {
  return (
    <ContactRoot>
      <BaseContainer>
        <ContactInner>
          <ContactText>
            <BaseReveal>
              <ContactTextTitle>Contact Us</ContactTextTitle>
            </BaseReveal>
            <BaseReveal>
              <ContactTextInfo>
                Have a question or need assistance? Reach out to us
              </ContactTextInfo>
            </BaseReveal>
          </ContactText>

          <ContactModule />
        </ContactInner>
      </BaseContainer>
    </ContactRoot>
  );
};

export default Contact;
