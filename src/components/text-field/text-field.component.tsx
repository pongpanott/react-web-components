import { cx } from '@emotion/css';
import HintMessage from '../hint-message/hint-message.component';
import Label from '../label/label.component';
import { useViewModel } from './text-field.viewmodel';

type TextFieldProps = {
  name: string;
  type?: 'text' | 'email' | 'password' | 'search';
  label?: string;
  placeholder?: string;
  hint?: string;
  variant?: 'outlined' | 'filled';
};

const TextField = ({
  name,
  type = 'text',
  label,
  placeholder = 'placeholder',
  hint,
  variant = 'outlined',
}: TextFieldProps) => {
  const { input, errorMessage, isShowError } = useViewModel({
    name,
    type,
  });

  return (
    <div>
      {label && <Label>{label}</Label>}
      <input
        placeholder={placeholder}
        className={cx(
          variant === 'filled' && 'bg-neutral-50 focus:bg-primary-50',

          isShowError && '!border-error-500',
          variant === 'filled' && isShowError && 'bg-error-50',

          'h-[42px] rounded border border-neutral-500 px-4 focus:border-primary-500 focus:outline-none',
        )}
        {...input}
      />

      <div>
        {isShowError && errorMessage ? (
          <HintMessage variant={isShowError && 'error'}>
            {errorMessage}
          </HintMessage>
        ) : (
          <HintMessage>{hint}</HintMessage>
        )}
      </div>
    </div>
  );
};

export default TextField;
