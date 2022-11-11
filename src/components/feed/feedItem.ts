export default class FeedItem extends HTMLElement 
{
	root: HTMLElement
	constructor( article ) 
	{
		super()

		this.root = this.getRootNode() as HTMLElement
        
		const image = document.createElement( 'img' )
		image.src = article.image
		const imageWrapper = document.createElement( 'div' )
		imageWrapper.appendChild( image )

		const title = document.createElement( 'h2' )
		title.innerText = article.title
        
		const source = document.createElement( 'span' )
		source.innerText = article.source

		this.root.appendChild( imageWrapper )
		this.root.appendChild( title )
		this.root.appendChild( source )
	}
}

customElements.define( 'mt-feed-item', FeedItem )