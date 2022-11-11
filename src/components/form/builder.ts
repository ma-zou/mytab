export default class FormBuilder 
{

	// static build( fields: Array<any> ) : Array<HTMLElement>
	// {
	// 	console.log( fields )
	// 	fields.forEach( inputData => 
	// 	{
	// 		console.log( inputData )
	// 	} )

	// 	return []
	// }

	static buildForm( fields: Array<any> ): Array<HTMLElement>
	{

		Object.keys( fields ).forEach( ( fieldsetName: string ) => 
		{
			const fieldset = document.createElement( 'fieldset' )

			console.log( fields[fieldsetName] )


			fields[fieldsetName].forEach( ( field: Record<string, unknown> ) => 
			{
				console.log( field )
			} )
		} )
		return []
	}
}