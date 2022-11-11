export type User = {
    name : string
}

export type Application = {
    name    : string
    url     : URL
}

export type MyTabSettings = {
    backgroundId    : number
    user            : User
    applications?   : Array<Application>
}

export class Settings 
{
	static get( key?: string ) : MyTabSettings | string | number | boolean | Application | User
	{

        
		const settingsString = localStorage.getItem( 'myTabSettings' )
		let settings: MyTabSettings

		if ( !settingsString ) 
		{
			settings = {
				backgroundId: 1,
				user: {
					name: 'Annonymus',
				}
			}
		}
		else 
		{
			settings = JSON.parse( settingsString ) as MyTabSettings
		}


		if( key ) 
		{
			return this.getByPath( key, settings )
		}
        
		return settings
	}

	static set( path: string, value: string | number | boolean ) 
	{
		const settings = this.get() as MyTabSettings

		const newSettings = this.setByPath( path, value, settings )

		localStorage.setItem( 'myTabSettings', JSON.stringify( newSettings ) )
	}

	private static getByPath( path: string, settings: MyTabSettings ) : string | number | boolean 
	{
		const properties: Array<string> = Array.isArray( path ) ? path : path.split( '.' )

		return properties.reduce( ( prev : Array<string>, curr : any ) => prev?.[curr], settings )
	}

	private static setByPath( path: string, value: string | number | boolean, settings: MyTabSettings ) 
	{
		const properties = path.split( '.' )
		let tmpObj = settings

		for ( let i = 0; i <= properties.length - 1; i++ ) 
		{
			tmpObj = tmpObj[properties[i]] = i !== properties.length - 1 ? {} : value
		}
		return settings
	}
}