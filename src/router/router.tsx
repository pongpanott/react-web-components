import { Routes, Route } from "react-router-dom";
import TextFieldPage from '../pages/text-field/text-field.page';
import AccordionPage from "../pages/accordion";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<div>home</div>} />
			<Route path="/text-field" element={<TextFieldPage />} />
			<Route path="/accordion" element={<AccordionPage />} />
			<Route path="/test" element={<p>test route</p>} />
		</Routes>
	);
};

export default AppRouter;
