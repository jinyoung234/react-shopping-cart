import CheckIcon from '@assets/check.svg';
import NoneCheckIcon from '@assets/noneCheck.svg';

import * as Styled from './Checkbox.styled';

<<<<<<< HEAD
interface CheckBoxProps {
  checked: boolean;
}

const CheckBox: React.FC<React.InputHTMLAttributes<HTMLInputElement> & CheckBoxProps> = ({ checked, ...props }) => {
=======
interface CheckboxProps {
  checked: boolean;
}

const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement> & CheckboxProps> = ({ checked, ...props }) => {
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
  return (
    <Styled.CheckboxWrapper $checked={checked}>
      <Styled.Checkbox type="checkbox" checked={checked} {...props} />
      <Styled.CheckboxImage src={checked ? CheckIcon : NoneCheckIcon} />
    </Styled.CheckboxWrapper>
  );
};

<<<<<<< HEAD
export default CheckBox;
=======
export default Checkbox;
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
