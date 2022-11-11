import Form from '../form/form'
import formJSON from './form.json'

export default class SettingsView extends HTMLElement 
{
	root: HTMLElement
    
	constructor() 
	{
		super()

		this.root = this.getRootNode() as HTMLElement

		this.root.appendChild( new Form( true, formJSON ) )
	}
}

customElements.define( 'mt-settings', SettingsView )