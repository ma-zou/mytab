import './styles/style.css'

import Idle from './components/idle'
import Dashboard from './components/dashboard'

import { fadeOut } from './helpers/animations'

const app = document.querySelector<HTMLDivElement>( '#app' )

if( !app ) 
{
	throw Error( 'No element found with id #app' )
}

const idle = new Idle()

app.addEventListener( 'mousemove', removeIdle )
app.addEventListener( 'keydown', removeIdle )

app.append( idle )
app.append( new Dashboard() )

function removeIdle() 
{
	app?.removeEventListener( 'mousemove', removeIdle )
	app?.removeEventListener( 'keydown', removeIdle )

	fadeOut( idle , 175, () => 
	{
		app?.removeChild( idle )
	
	} )
}
