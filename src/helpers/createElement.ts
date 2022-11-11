

export function createElement( elementNode: string, attributeList: Array<Array<string>> ) : HTMLElement
{
	const element = document.createElement( elementNode )

	for( const attribute of attributeList ) 
	{
		element.setAttribute( attribute[0], attribute[1] )
	}

	return element
}