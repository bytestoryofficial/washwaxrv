import { FormHelperText } from '@mui/material';
import RootBaseTextarea, {
  RootFormControl,
  RootLabel,
  Suplabel,
} from './BaseTextarea.styled';

const BaseTextarea = ({
  label,
  suplabel,
  name,
  value,
  onChange,
  error,
  minRows = 5,
  helperText,
}) => {
  return (
    <RootFormControl fullWidth error={error}>
      <RootLabel>
        {label} <Suplabel>{suplabel}</Suplabel>
      </RootLabel>
      <RootBaseTextarea
        minRows={minRows}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
      />
      {helperText && <FormHelperText error>{helperText}</FormHelperText>}
    </RootFormControl>
  );
};

export default BaseTextarea;
