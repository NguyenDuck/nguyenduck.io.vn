import { useState } from 'react'
import './TextAnimation.css'

interface TextAnimationParam {
	primary: string
	secondary: string
}

function TextAnimation({ primary, secondary }: TextAnimationParam) {
	const length = Math.max(primary.length, secondary.length)

	if (length > primary.length) {
		let text = ' '.repeat((length - primary.length) / 2)
		primary = `${text}${primary}${text}`
	} else if (length > secondary.length) {
		let text = ' '.repeat((length - secondary.length) / 2)
		secondary = `${text}${secondary}${text}`
	}

	const [string, toggle] = useState(primary)

	const delayedRandom = (s: string) => {
		const local_string = [
			'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
			'abcdefghijklmnopqrstuvwxyz',
			'0123456789',
			' ',
		].flatMap((v) => v.split(''))
		const interval = setInterval(() => {
			toggle((prevString) => {
				let newString = ''
				for (let i = 0; i < prevString.length; i++) {
					newString += local_string[Math.floor(Math.random() * local_string.length)]
				}
				return newString
			})
		}, 5)

		setTimeout(() => {
			clearInterval(interval)
			toggle(s)
		}, 250)
	}

	return (
		<div
			className="text-animation"
			onMouseEnter={() => delayedRandom(secondary)}
			onMouseLeave={() => delayedRandom(primary)}
		>
			{string}
		</div>
	)
}

export default TextAnimation
