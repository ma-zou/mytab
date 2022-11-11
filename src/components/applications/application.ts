import { Application as ApplicationType } from '../../settings'

export default class Application extends HTMLElement 
{
	root: HTMLElement
	applicationData: ApplicationType
	image: HTMLImageElement
    
	constructor( applicationData: ApplicationType ) 
	{
		super()

		this.root = this.getRootNode() as HTMLElement
		this.applicationData = applicationData

		this.image = document.createElement( 'img' ) 
		this.image.src = applicationData.icon.href


		this.root.innerText = applicationData.name
		this.root.prepend( this.image )
		this.root.addEventListener( 'click', this.openApplication.bind( this ) )
	}

	private openApplication() 
	{
		window.open( this.applicationData.url, '_blank' )
	}
}

customElements.define( 'mt-application', Application )