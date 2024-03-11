import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Home, Work, Projects, Skills, Contact } from "./pages";
import { Routes, Route } from 'react-router-dom';

function App() {
	

  return (
		<div className="h-[100vh] flex flex-col">
			<Nav />
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/career" element={<Work/>} />
				<Route path="/projects" element={<Projects/>} />
				<Route path="/skills" element={<Skills/>} />
				<Route path="/contact" element={<Contact/>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
