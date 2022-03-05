import { useRef } from 'react';

import ScrollToTop from './ScrollToTop';
import { MdArrowDropDownCircle } from 'react-icons/md';

function App() {
	const aboutSection = useRef(null);
	const servcesSection = useRef(null);
	const contactSection = useRef(null);

	const scrollDown = (ref) => {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: 'smooth',
		});
	};

	const scrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	};

	return (
		<div className="App">
			{/* Ensure to import the scroll-to-top component to the App.js file */}
			<ScrollToTop />
			<div className="section section1">
				<div className="link btn" onClick={scrollToBottom}>
					Scroll to bottom <MdArrowDropDownCircle />
				</div>
				<ul className="nav-links">
					<li className="link" onClick={() => scrollDown(aboutSection)}>
						About Us
					</li>
					<li className="link" onClick={() => scrollDown(servcesSection)}>
						Services
					</li>
					<li className="link" onClick={() => scrollDown(contactSection)}>
						Contact
					</li>
				</ul>
			</div>
			<div className="section section2" ref={aboutSection}>
				<h2>About Us</h2>
			</div>
			<div className="section section3" ref={servcesSection}>
				<h2>Services</h2>
			</div>
			<div className="section section4" ref={contactSection}>
				<h2>Contact</h2>
			</div>
			<div className="section section5"></div>
		</div>
	);
}

export default App;
