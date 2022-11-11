import { Settings, Application as ApplicationType } from '../../settings'
import Application from './application'

export default class ApplicationList extends HTMLUListElement 
{
	applications: Array<ApplicationType> | false
	root: HTMLUListElement

	constructor( applications: Array<ApplicationType> ) 
	{
		super()

		this.root = this.getRootNode() as HTMLUListElement
		this.applications = applications

		console.log( applications )

		this.applications.forEach( ( applicationData: ApplicationType ) => 
		{
			const listItem = document.createElement( 'li' )
			listItem.appendChild( new Application( applicationData ) )
		} )

	}
}

customElements.define( 'mt-application-list', ApplicationList, { extends: 'ul' } )