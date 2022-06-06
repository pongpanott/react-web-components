import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<p>home page</p>} />
			<Route path="/test" element={<p>test route</p>} />
		</Routes>
	);
};

export default AppRouter;
