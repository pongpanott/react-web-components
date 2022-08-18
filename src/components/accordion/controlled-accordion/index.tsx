import { css, cx } from "@emotion/css";
import { ReactComponent as ChevronDownIcon } from "../../../assets/icons/chevron-down.svg";

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
		<div onClick={onClick}>
			<div className={cx(titleClassName, "p-4 flex justify-between gap-x-2")}>
				{title} <ChevronDownIcon className={cx(expand && "rotate-180")} />
			</div>
			<div
				className={cx(
					css`
						height: 0;
						overflow: hidden;
						transition: height 0.5s cubic-bezier(0.23, 1, 0.32, 1);
					`,
					expand &&
						css`
							height: ${maxHeight}px;
							max-height: ${maxHeight}px;
						`
				)}
			>
				{children}
			</div>
		</div>
	);
};

export default ControlledAccordion;
