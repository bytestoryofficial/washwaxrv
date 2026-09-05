import { TextTransition } from 'components';
import ReasonRoot, {
  ReasonCircle,
  ReasonItem,
  ReasonItems,
  ReasonItemSubtitle,
  ReasonItemTitle,
  ReasonTitle,
} from './Reason.styled';
import { BaseContainer, BaseReveal } from 'UI';

import reviewsIcon from 'assets/reviews.png';
import qualityIcon from 'assets/quality.png';
import serviceIcon from 'assets/service.png';
import salesIcon from 'assets/sales.png';
import timeIcon from 'assets/time.png';
import expIcon from 'assets/exp.png';

const baseRevealStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'center',
};

const Reason = () => {
  return (
    <ReasonRoot>
      <BaseContainer>
        <TextTransition delay={0.5} initialY={20}>
          <ReasonTitle>Reasons to Choose Us</ReasonTitle>
        </TextTransition>

        <ReasonItems>
          <ReasonItem>
            <BaseReveal sx={baseRevealStyles}>
              <ReasonCircle>
                <img src={expIcon} style={{ marginLeft: '-8px' }} />
              </ReasonCircle>

              <ReasonItemTitle>Experienced Staff</ReasonItemTitle>
              <ReasonItemSubtitle>
                Qualified professionals to serve you
              </ReasonItemSubtitle>
            </BaseReveal>
          </ReasonItem>

          <ReasonItem>
            <BaseReveal sx={baseRevealStyles}>
              <ReasonCircle>
                <img src={serviceIcon} style={{ width: 70, height: 70 }} />
              </ReasonCircle>
              <ReasonItemTitle>Wide Range of Services</ReasonItemTitle>
              <ReasonItemSubtitle>
                Comprehensive offerings for all your needs
              </ReasonItemSubtitle>
            </BaseReveal>
          </ReasonItem>

          <ReasonItem>
            <BaseReveal sx={baseRevealStyles}>
              <ReasonCircle>
                <img src={salesIcon} />
              </ReasonCircle>
              <ReasonItemTitle>Affordable Prices</ReasonItemTitle>
              <ReasonItemSubtitle>
                Competitive rates for top-notch service
              </ReasonItemSubtitle>
            </BaseReveal>
          </ReasonItem>

          <ReasonItem>
            <BaseReveal sx={baseRevealStyles}>
              <ReasonCircle>
                <img src={reviewsIcon} />
              </ReasonCircle>
              <ReasonItemTitle>Excellent Reviews</ReasonItemTitle>
              <ReasonItemSubtitle>
                Highly rated by our satisfied customers
              </ReasonItemSubtitle>
            </BaseReveal>
          </ReasonItem>

          <ReasonItem>
            <BaseReveal sx={baseRevealStyles}>
              <ReasonCircle>
                <img src={qualityIcon} />
              </ReasonCircle>
              <ReasonItemTitle>Quality Service</ReasonItemTitle>
              <ReasonItemSubtitle>
                Ensuring your motor home is in top condition
              </ReasonItemSubtitle>
            </BaseReveal>
          </ReasonItem>

          <ReasonItem>
            <BaseReveal sx={baseRevealStyles}>
              <ReasonCircle>
                <img
                  src={timeIcon}
                  style={{ width: '55px', height: '55px', marginTop: '-5px' }}
                />
              </ReasonCircle>
              <ReasonItemTitle>Fast Service</ReasonItemTitle>
              <ReasonItemSubtitle>
                Efficient and prompt task completion
              </ReasonItemSubtitle>
            </BaseReveal>
          </ReasonItem>
        </ReasonItems>
      </BaseContainer>
    </ReasonRoot>
  );
};

export default Reason;
