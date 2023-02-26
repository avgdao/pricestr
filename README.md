# Nostr Market

![Thumbnail](https://i.ibb.co/t4w8gwz/thumb.jpg)

Simple webpage that fetches and displays Nostr posts with the hashtag #nostrmarket.

Currently uses Nostr.band's RSS (feeds_rss.js) or API (feeds_api.js) to fetch posts.

- RSS: https://rss.nostr.band/feeds/ff85/1fd07514e0473b3da6bc4a151827e1d1776a9040e856006594e3fadd2f2dff85.xml
- API: https://nostr.realsearch.cc/nostr?method=search&q=%23nostrmarket%20-filter%3Aspam&p=0

Preview it here: https://nostr.bitejo.com

To install, just download the zip and extract it to your web host.

## Publish a listing

Write a post with the hashtag #nostrmarket and one of these tags #selling #buying #service #job using your regular Nostr client and your listing will display on the webpage.

## Order a listing

Click on the listing to message the seller with your regular Nostr client.

Nostr Market does not process payments. Contact the seller to pay them directly with Bitcoin.

## Possible improvements

- Make a UI that is more similar to Ebay, Etsy, etc.
- Add regex to scrape price, location, etc.
- Add a product form for easier formatting and search, e.g.:
  - Type: Selling
  - Title: Thinkpad T480
  - Description: Refurbished Lenovo Thinkpad T480 in excellent condition.
  - Photo: https://imgur.com/thinkpad.jpg
  - Price: 0.015 BTC
  - Location: United States (worldwide shipping)
- Use a CLI client to fetch #nostrmarket posts (to reduce API load)
- Cache posts (for speed and reduced API load)
- Convert photos to thumbnails on the backend or via an API (to use less mobile data)

## A more complex system...

- A more complex system could use different post types:
  - Instead of a profile, you have a store
  - Instead of posts, you have products
  - Instead of comments, you have reviews
  - Instead of private messages, you have orders
- Payments could be implemented via Zaps
- Implementation of a Lightning Escrow
  - Possibly with a marketplace of mediators, like Bitrated.com
- Autofulfill for digital products
  - Example: Receive a download link for an e-book or a gift card code, as soon as your Zap is detected
- Client ideas
  - An ecommerce frontend like WooCommerce for online stores
  - A simple classifieds frontend like Craigslist for one-time sales
  - Possibly a Gofundme/Kickstarter frontend where donations are Zaps
  
I probably won't start to work on this anytime soon, so feel free to take this concept and build something with it.

## Credits

- Global search: https://nostr.band
- NIP-19 hex to note conversion: https://github.com/slowli/bech32-buffer
- XML to JSON conversion: https://github.com/abdolence/x2js

## License

This code is in the public domain. Feel free to use it for your own projects.