import BaseButtonStyled, {
  BaseButtonStyledScrolling,
  LoadingButtonStyled,
} from './BaseButton.styled';

const BaseButton = ({
  label,
  onClick,
  animate,
  maxWidth = '200px',
  minWidth = '64px',
  scrolling,
  type,
  loader,
}) => {
  return scrolling ? (
    <>
      {loader ? (
        <LoadingButtonStyled
          loading={loader}
          type={type}
          scrolling={1}
          animate={1}
          sx={{
            maxWidth: maxWidth,
            minWidth: minWidth,
          }}
          onClick={onClick}
          disableRipple
        />
      ) : (
        <BaseButtonStyledScrolling
          type={type}
          scrolling={scrolling ? 1 : 0}
          animate={animate ? 1 : 0}
          sx={{
            maxWidth: maxWidth,
            minWidth: minWidth,
          }}
          onClick={onClick}
          disableRipple
        >
          {animate && (
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" rx="5" />
            </svg>
          )}
          <span>{label}</span>
        </BaseButtonStyledScrolling>
      )}
    </>
  ) : (
    <BaseButtonStyled
      type={type}
      scrolling={scrolling ? 1 : 0}
      animate={animate ? 1 : 0}
      sx={{
        maxWidth: maxWidth,
        minWidth: minWidth,
      }}
      onClick={onClick}
      disableRipple
    >
      {animate && (
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" rx="5" />
        </svg>
      )}
      <span>{label}</span>
    </BaseButtonStyled>
  );
};

export default BaseButton;
