import './About.css'
import AboutButton from './AboutButton'

function About() {
	return (
		<div className="about">
			<AboutButton
				id="mcpedl"
				primary="MCPEDL"
				secondary="NguyenDuck2004"
				backgroundColor="rgb(0, 164, 45)"
				href="https://mcpedl.com/user/samuellipoff"
			/>
			<AboutButton
				id="discord"
				primary="Discord"
				secondary="NguyenDuck"
				backgroundColor="rgb(64, 78, 237)"
			/>
			<AboutButton
				id="github"
				primary="Github"
				secondary="NguyenDuck"
				backgroundColor="rgb(1, 4, 9)"
				href="https://github.com/NguyenDuck"
			/>
			<AboutButton
				id="youtube"
				primary="YouTube"
				secondary="NguyenDuck2k4"
				backgroundColor="red"
				href="https://youtube.com/@NguyenDuck2k4"
			/>
		</div>
	)
}

export default About
