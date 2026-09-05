import RootBaseInput, { RootFormControl, RootLabel } from './BaseInput.styled';

const BaseInput = ({
  label,
  type,
  name,
  onChange,
  value,
  error,
  helperText,
  ...props
}) => {
  return (
    <RootFormControl fullWidth error={error}>
      <RootLabel>{label}</RootLabel>
      <RootBaseInput
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        error={error}
        helperText={helperText}
        {...props}
      />
    </RootFormControl>
  );
};

export default BaseInput;
