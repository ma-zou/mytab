import SettingsView from './settings/settingsView'
import { Settings } from '../settings'
import ApplicationList from './applications/applicationList'

export default class Dashboard extends HTMLElement 
{
	root: HTMLElement
	settingsButton: HTMLButtonElement
	settingsStatus: boolean
	settingsView: SettingsView
    
	constructor() 
	{
		super()

		this.root = this.getRootNode() as HTMLElement

		this.settingsStatus = false
		this.settingsView = new SettingsView()
		this.settingsButton = document.createElement( 'button' )
		this.settingsButton.className = 'mytab__settingsButton'

		this.settingsButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <line x1="5" y1="29" x2="27" y2="29" />
  <path d="M23,9,22,25H8L7,9H23a4,4,0,0,1,4,4h0a4,4,0,0,1-4,4" />
  <polyline points="19 3 19 5 13 5 13 7" />
</svg> Settings`

		// this.settingsButton.addEventListener( 'click', this.toggleSettingsView.bind( this ) )

		this.root.appendChild( this.settingsButton )

		if( Settings.get( 'applications' ) ) 
		{
			const applicationList = new ApplicationList( Settings.get( 'applications' ) )

			this.root.appendChild( applicationList )
		}
	}

	toggleSettingsView() 
	{
		if( this.settingsStatus ) 
		{
			this.root.removeChild( this.settingsView )
			this.settingsStatus = false
		}
		else 
		{
			this.root.appendChild( this.settingsView )
			this.settingsStatus = true

		}
	}
}

customElements.define( 'mt-datshboard', Dashboard )