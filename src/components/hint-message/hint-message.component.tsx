import { cx } from '@emotion/css';

type HintMessageProps = {
  children: React.ReactNode;
  variant?: 'default' | 'error';
};

const HintMessage = ({ children, variant = 'default' }: HintMessageProps) => {
  return (
    <span
      className={cx(
        variant === 'error' && 'text-error-500',
        variant === 'default' && 'text-neutral-300',
        'px-4 text-xs leading-4',
      )}
    >
      {children}
    </span>
  );
};

export default HintMessage;
