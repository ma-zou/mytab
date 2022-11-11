import Clock from './clock'
import Greeting from './greeting'
import { Settings } from '../settings'

export default class Idle extends HTMLElement 
{
	root : HTMLElement

	constructor() 
	{
		super()

		this.root = this.getRootNode() as HTMLElement

		this.root.className = 'mytab__idleScreen'

		this.root.appendChild( new Clock() )
		this.root.appendChild( new Greeting() )

		this.root.style.setProperty( '--background-image-id', `url(/images/background${Settings.get( 'idle.backgroundId' )}.avif)` )
	}
}

customElements.define( 'mt-idle', Idle )