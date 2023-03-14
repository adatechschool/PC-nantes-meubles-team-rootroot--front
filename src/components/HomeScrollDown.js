import './HomeScrollDown.css';
import ScrollArrow from '../assets/scroll_arrow_2.png'

function HomeScrollDown() {
	// state

	// comportement

	// render
	return (
		<header class="home">
			<div class="resp">
				<h2>kalaxy.</h2>
				<h1>Bienvenue</h1>
			</div>
			<button class="arrow" onclick="window.location.href='#products'"><img src={ScrollArrow} alt="Scroll"></img></button>
		</header>
	);
}

export default HomeScrollDown;