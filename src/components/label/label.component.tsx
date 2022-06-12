import { cx } from '@emotion/css';

type LabelProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

const Label = ({ children, size = 'small' }: LabelProps) => {
  return (
    <label
      className={cx(
        size === 'small' && 'text-[11px] leading-[6px]',
        size === 'medium' && 'text-xs leading-4',
        size === 'large' && 'text-sm leading-5',

        'font-medium',
      )}
    >
      {children}
    </label>
  );
};

export default Label;
