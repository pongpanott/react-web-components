import { css, cx } from '@emotion/css';
import { ReactComponent as ChevronDownIcon } from '../../../assets/icons/chevron-down.svg';

type ControlledAccordionProps = {
  children: React.ReactNode;
  title: string;
  titleClassName?: string;
  expand: boolean;
  onClick: () => void;
  maxHeight: number;
};

const ControlledAccordion = ({
  children,
  title,
  titleClassName,
  expand,
  onClick,
  maxHeight,
}: ControlledAccordionProps) => {
  return (
    <div>
      <div
        onClick={onClick}
        className={'cursor-pointer border-l-4 border-primary-800 bg-primary-50'}
      >
        <div className={cx(titleClassName, 'flex justify-between gap-x-2 p-4')}>
          {title} <ChevronDownIcon className={cx(expand && 'rotate-180')} />
        </div>
      </div>
      <div
        className={cx(
          'bg-neutral-50',
          css`
            height: 0;
            overflow: hidden;
            transition: height 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          `,
          expand &&
            css`
              height: ${maxHeight}px;
              max-height: ${maxHeight}px;
            `,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ControlledAccordion;
