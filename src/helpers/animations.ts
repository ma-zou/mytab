type callbackFunction = () => void
export function fadeOut( element: HTMLElement, duration: number, callback?: callbackFunction ) 
{
	const animation = [
		{ 'opacity': 1 },
		{ 'opacity': 0 }
	]

	const timing = {
		duration: duration,
		iterations: 1
	}

	const animationState = element.animate( animation, timing )

	if( callback ) 
	{
		animationState.addEventListener( 'finish', callback )
	}
}