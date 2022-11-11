type Field = {
    name: string
    type: 'text' | 'number' | 'select' | 'repeater'
    label: string
    options?: Array<string> 
    data?: Record<string, unknown>
    fields?: Array<Field>
}

export default class FormBuilder 
{

	static build( fieldset: HTMLFieldSetElement, fields: Array<Field> ) : HTMLFieldSetElement
	{ 

		fields.forEach( inputData => 
		{
			if( inputData.type === 'repeater' ) 
			{
				fieldset = FormBuilder.build( fieldset, inputData.fields )
			}
			else 
			{

				let fieldElement
    
				switch ( inputData.type ) 
				{
				case 'select':
					fieldElement = document.createElement( 'select' )
					fieldElement.name = inputData.name
					inputData.options?.forEach( option => 
					{
						const optionElement = document.createElement( 'option' )
						optionElement.innerText = option
						optionElement.value = option
					} )
					break
				default:
					console.log( inputData )
					fieldElement = document.createElement( 'input' )
					fieldElement.name = inputData.name
					fieldElement.placeholder = inputData.label
					fieldElement.type = inputData.type
    
					break
				}
    
				fieldset.appendChild( fieldElement )
			}

		} )


		return fieldset
	}

	static buildForm( fields: Array<any> ): Array<HTMLElement>
	{
		const fieldsetArray: Array<HTMLFieldSetElement> = []

		Object.keys( fields ).forEach( ( fieldsetName: string ) => 
		{
			const fieldset = document.createElement( 'fieldset' )
			FormBuilder.build( fieldset,  fields[fieldsetName] )

			fieldsetArray.push( fieldset )
		} )
		return fieldsetArray
	}
}