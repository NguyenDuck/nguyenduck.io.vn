import * as CSS from 'csstype'
import TextAnimation from '../TextAnimation/TextAnimation'

interface AboutButtonParam {
	id: string
	primary: string
	secondary: string
	backgroundColor: CSS.Property.BackgroundColor
	href?: string
	color?: CSS.Property.Color
}

function AboutButton({
	id,
	primary,
	secondary,
	backgroundColor,
	href,
	color = 'white',
}: AboutButtonParam) {
	return (
		<button
			id={`${id}-btn`}
			type="button"
			style={{
				backgroundColor: backgroundColor,
				color: color,
			}}
			onClick={() => {
				if (href) window.open(href, '_blank')
			}}
		>
			<TextAnimation primary={primary} secondary={secondary} />
		</button>
	)
}

export default AboutButton
