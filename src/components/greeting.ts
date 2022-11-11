import { Settings } from '../settings'

export default class Greeting extends HTMLHeadingElement 
{
	root        : HTMLHeadingElement
	messages    : Array<string>
	currentHour : number

	constructor() 
	{
		super()
        
		this.root = this.getRootNode() as HTMLHeadingElement

		this.messages = [
			'Good morning',
			'Good day',
			'Good evening',
			'Still working',
			'How do we got here'
		]

		this.currentHour = new Date().getHours()

		this.root.className = 'greeting'
		this.root.innerText = this.greetingMessage( this.currentHour )
		this.root.addEventListener( 'click', () => 
		{
			Settings.set( 'user.name', 'Malte' ) 
		} )
	}

	public greetingMessage( hour : number ) 
	{
		let index = 4
		if( this.inBetween( hour, 5, 11 ) ) index = 0
		if( this.inBetween( hour, 11, 19 ) ) index = 1
		if( this.inBetween( hour, 19, 24 ) ) index = 2
		if( this.inBetween( hour, 0, 5 ) ) index = 3

		return `${this.messages[index]}, ${Settings.get( 'user.name' )}.`
	}

	private inBetween( number : number, min : number, max : number ) 
	{
		return ( number > min && number < max )
	}
}

customElements.define( 'mt-greeting', Greeting, { extends: 'h1' } )