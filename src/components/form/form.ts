import FormBuilder from './builder'

export default class Form extends HTMLFormElement 
{
	constructor( useBuilder = false, formBuilderJSON? : any ) 
	{
		super()

		this.root = this.getRootNode() as HTMLElement

		if( useBuilder ) 
		{
			

			FormBuilder.buildForm( formBuilderJSON ).forEach( formElement => 
			{
				this.root.appendChild( formElement )
			} )
		}   
	}
}

customElements.define( 'mt-form', Form, { extends: 'form' } )