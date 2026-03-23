import "./App.css";
import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import HomePage from "./pages/HomePage";

const SignUp = lazy(() => import("./pages/SignUp"));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</Suspense>
	);
}

export default App;
