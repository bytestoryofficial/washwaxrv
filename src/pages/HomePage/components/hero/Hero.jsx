import { HashLink } from 'react-router-hash-link';

import { BaseButton, BaseContainer } from 'UI';
import { TextTransition } from 'components';
import HeroRoot, {
  HeroInner,
  HeroSubtitle,
  HeroTitle,
  Overlay,
} from './Hero.styled';

const Hero = ({ image }) => {
  return (
    <HeroRoot sx={{ backgroundImage: `url(${image})` }} id="home">
      <BaseContainer>
        <HeroInner>
          <TextTransition delay={0.2}>
            <HeroTitle>Welcome to Motor Home Service</HeroTitle>
          </TextTransition>

          <TextTransition delay={0.3}>
            <HeroSubtitle>
              Experience top-notch service for your motor home
            </HeroSubtitle>
          </TextTransition>

          <TextTransition delay={0.4}>
            <HashLink to="/#info" smooth>
              <BaseButton label="Book Now" animate minWidth="150px" />
            </HashLink>
          </TextTransition>
        </HeroInner>
      </BaseContainer>
      <Overlay />
    </HeroRoot>
  );
};

export default Hero;
