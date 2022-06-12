import Label from '../label/label.component';
import { useViewModel } from './text-field.viewmodel';

type TextFieldProps = {
  name: string;
  type?: 'text' | 'email' | 'password' | 'search';
  label?: string;
  placeholder?: string;
};

const TextField = ({
  name,
  type = 'text',
  label,
  placeholder = 'placeholder',
}: TextFieldProps) => {
  const { input, errorMessage, isShowError } = useViewModel({
    name,
    type,
  });

  return (
    <div>
      {label && <Label>{label}</Label>}
      <input placeholder={placeholder} {...input} />
      {isShowError && errorMessage}
    </div>
  );
};

export default TextField;
