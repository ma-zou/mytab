import dummyFeed from './feed.json'
import FeedItem from './feedItem'

export default class FeedList extends HTMLUListElement 
{
	feed: { title: string; source: string; image: string; link: string }[]
	root: HTMLElement

	constructor() 
	{
		super()

		this.root = this.getRootNode() as HTMLElement
		this.root.className = 'mytab__feedList'
		this.feed = this.getFeed()

		this.feed.forEach( article => 
		{
			const listItem = document.createElement( 'li' )
			listItem.appendChild( new FeedItem( article ) )
			this.root.appendChild( listItem )
		} )
	}

	private getFeed() 
	{
		return dummyFeed
	}
}

customElements.define( 'mt-feed-list', FeedList, { extends: 'ul' } )