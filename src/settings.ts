export type User = {
    name : string
}

export type Application = {
    name    : string
    url     : URL
	icon 	: URL
}

export type MyTabSettings = {
	idle: Record<string, number>
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
				idle: {
					backgroundId: 1,
				},
				user: {
					name: 'Annonymus',
				},
				applications: [
					{
						name: 'Drive',
						url: new URL( 'https://drive.google.com/drive/' ),
						icon: new URL( 'https://lh3.googleusercontent.com/rCwHBRBJV4wFiEIN_Mlboj94_TGJxyJtBh-MBFL4y1aZdO4hb7_Uc_PpXRyAoN7O9m_Zc1wSyp3H1vsnb829QE7t9KyGNJY9A1a3QQ' )
					},
					{
						name: 'Gmail',
						url: new URL( 'https://mail.google.com/mail/u/0/#inbox' ),
						icon: new URL( 'https://lh3.googleusercontent.com/0rpHlrX8IG77awQMuUZpQ0zGWT7HRYtpncsuRnFo6V3c8Lh2hPjXnEuhDDd-OsLz1vua4ld2rlUYFAaBYk-rZCODmi2eJlwUEVsZgg' )
					},
					{
						name: 'Calendar',
						url: new URL( 'https://calendar.google.com/' ),
						icon: new URL( 'https://lh3.googleusercontent.com/K0vgpnn9Vour8ByU3htR3ou5Cx70Me-lW_51VEAIS5dfzXCQ0otXakVuPiQVc0V6qcf9aP_vkVul59airN27m3mttf4zQ1TPv4MVrw' )
					},
					{
						name: 'Keep',
						url: new URL( 'https://keep.google.com/#home' ),
						icon: new URL( 'https://lh3.googleusercontent.com/V6C9KmBzAK48_si_jPMSgUrBhdCGL8-z8QMg-WvDqSdVdPXN-FZHrpCHaZaYAYuXCGK-G85sYRIy3PdqfXAS4QlXwQJTyNUPYCpz' )
					}
				]
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