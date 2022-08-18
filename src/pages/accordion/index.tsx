import { useState } from "react";
import ControlledAccordion from "../../components/accordion/controlled-accordion";

const AccordionPage = () => {
	const [expand, setExpand] = useState<number | null>(null);

	const toggleExpand = (index: number) => {
		if (index === expand) {
			setExpand(null);
		} else {
			setExpand(index);
		}
	};

	return (
		<div>
			<ControlledAccordion
				title="Accordion 1"
				expand={expand === 0}
				onClick={() => toggleExpand(0)}
				maxHeight={152}
			>
				<div className="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
					maximus nulla. Sed malesuada tincidunt enim, a consectetur ipsum
					dapibus eget. Suspendisse cursus tempus scelerisque. Proin condimentum
					porttitor sodales. Nullam molestie posuere sem, id auctor magna
					tincidunt volutpat. Nunc ut.
				</div>
			</ControlledAccordion>
			<ControlledAccordion
				title="Accordion 2"
				expand={expand === 1}
				onClick={() => toggleExpand(1)}
				maxHeight={152}
			>
				<div className="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
					faucibus porttitor bibendum. Maecenas euismod quam nulla, eu faucibus
					mi maximus ac. Ut commodo erat massa, sit amet tempus nisl egestas et.
					Ut ultricies velit at massa molestie, nec hendrerit nisi.
				</div>
			</ControlledAccordion>
			<ControlledAccordion
				title="Accordion 3"
				expand={expand === 2}
				onClick={() => toggleExpand(2)}
				maxHeight={152}
			>
				<div className="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					nec posuere mauris, eget vestibulum dolor. Praesent lacinia ligula ac
					egestas fermentum. Duis quam mi, ultricies in ex sit amet, imperdiet
					euismod diam. Aenean id orci sed risus aliquet pharetra. Orci.
				</div>
			</ControlledAccordion>
		</div>
	);
};

export default AccordionPage;
