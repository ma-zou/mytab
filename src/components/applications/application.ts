import { Application as ApplicationType } from '../../settings'

export default class Application extends HTMLButtonElement 
{
	root: HTMLElement
	applicationData: ApplicationType
    
	constructor( applicationData: ApplicationType ) 
	{
		super()

		this.root = this.getRootNode() as HTMLElement
		this.applicationData = applicationData

		this.root.innerText = applicationData.name
		this.root.addEventListener( 'click', this.openApplication.bind( this ) )
	}

	private openApplication() 
	{
		window.open( this.applicationData.url )
	}
}

customElements.define( 'mt-application', Application, { extends: 'button' } )