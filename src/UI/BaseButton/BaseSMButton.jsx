import { BaseSMButtonStyled } from './BaseButton.styled';

const BaseSMButton = ({
  label,
  onClick,
  animate,
  maxWidth = '200px',
  minWidth = '64px',
  scrolling,
  type,
  icon,
  dark,
  sx,
}) => {
  return (
    <BaseSMButtonStyled
      dark={dark ? 1 : 0}
      type={type}
      scrolling={scrolling ? 1 : 0}
      animate={animate ? 1 : 0}
      sx={{
        maxWidth: maxWidth,
        minWidth: minWidth,
        ...sx,
      }}
      onClick={onClick}
      disableRipple
    >
      {animate && (
        <svg className="svg-rect">
          <rect x="0" y="0" fill="none" width="100%" height="100%" rx="5" />
        </svg>
      )}
      <span>
        {icon} {label}
      </span>
    </BaseSMButtonStyled>
  );
};

export default BaseSMButton;
