export default class Clock extends HTMLElement
{
	currentTimeStamp    : number
	timeString          : string
	updateInterval      : number
	root                : HTMLElement

	constructor() 
	{
		super()

		this.root = this.getRootNode() as HTMLElement

		this.currentTimeStamp = new Date().getTime()
		this.timeString = '00:00'

		this.currentTime( this.currentTimeStamp )

		this.updateInterval = setInterval( this.updateIntervalCallback.bind( this ), 1000 )
	}


	/**
     * @description update time variables 
     * @param newTime js unix timestamp (in ms) 
     */
	currentTime ( newTime: number ) 
	{
		this.currentTimeStamp = newTime
		this.timeString = this.timestampToFormattedString( newTime )

		this.root.innerText = this.timeString
	}

	/**
     * @description convert timestamp into formatted string
     * @param timestamp js unix timestamp (in ms)
     * @returns time string formatted HH:mm
     */
	timestampToFormattedString ( timestamp: number ) : string 
	{
		const dtFormat = new Intl.DateTimeFormat( 'de-DE', {
			timeStyle: 'medium'
		} )
		return dtFormat.format( new Date( timestamp ) ).substring( 0, 5 )
	} 

	/**
     * @description wrapping currentTime function to run in interval
     */
	updateIntervalCallback() 
	{
		this.currentTime( new Date().getTime() )
	}
}

customElements.define( 'mt-clock', Clock )