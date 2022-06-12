import { Routes, Route } from "react-router-dom";
import TextFieldPage from "../pages/text-field/text-field.page";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<TextFieldPage />} />
			<Route path="/test" element={<p>test route</p>} />
		</Routes>
	);
};

export default AppRouter;
