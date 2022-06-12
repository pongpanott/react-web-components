import { cx } from '@emotion/css';

type LabelProps = {
  children: React.ReactNode;
};

const Label = ({ children }: LabelProps) => {
  return <label className={cx('block leading-5')}>{children}</label>;
};

export default Label;
