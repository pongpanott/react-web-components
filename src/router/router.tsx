import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<div>
						<p className="text-lg text-green-400">home page</p>
					</div>
				}
			/>
			<Route path="/test" element={<p>test route</p>} />
		</Routes>
	);
};

export default AppRouter;
