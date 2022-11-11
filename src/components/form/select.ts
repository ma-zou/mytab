export default class Select extends HTMLSelectElement 
{
	constructor() 
	{
		super()
	}
}

customElements.define( 'mt-select', Select )