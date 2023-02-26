const DOMPARSER = new DOMParser().parseFromString.bind(new DOMParser());
var ALL_LISTINGS = [];
var RELEVANT_LISTINGS = [];
var CURRENT_PAGE = 0;

function display_listings(items) {
  items.forEach((item) => {
  var listing_entry = document.createElement('div');
  listing_entry.innerHTML = '';
  if(item['image']) {
    listing_entry.innerHTML += '<div class="listing-bg" style="background-image:url('+item['image']+') !important;"></div>';
  } else {
    listing_entry.innerHTML += '<div class="listing-bg no-image"></div>';
  }
  listing_entry.innerHTML += '<div class="listing-title"><a href="'+item['link']+'">'+item['title']+'</a></div>';
  listing_entry.innerHTML += '<div class="listing-toggle-description"><button class="toggle-description" onclick="toggle_description(\''+item['guid']+'\')">More info <span>&#11167;</span></button></div>';
  listing_entry.innerHTML += '<div class="listing-description '+item['guid']+'">'+item['description']+'</div>';
  listing_entry.innerHTML += '<div class="listing-link"><a href="'+item['link']+'"><button><span>&#128489;</span>Contact Seller</button></a></div>';
  listing_entry.setAttribute('data-timestamp', item['timestamp']);
  listing_entry.className = 'single_listing listing_'+item['category'];
  document.getElementById('listings_body').appendChild(listing_entry);
  var divList = $('.single_listing');
  divList.sort(function(a, b){
    return $(b).data('timestamp')-$(a).data('timestamp')
  });
  $('#listings_body').html(divList);
  });
}

function toggle_description(listing_id) {
  $('.listing-description.'+listing_id).toggle();
}

let fetch_listings = new Promise(function(return_listings) {
  /*
  #nostrmarket feed
  var u = 'https://rss.nostr.band/feeds/ff85/1fd07514e0473b3da6bc4a151827e1d1776a9040e856006594e3fadd2f2dff85.xml';
  #bitcoin feed
  var u = 'https://rss.nostr.band/feeds/aa61/f9fa179ffe41d677b2269c77f0f6d23d2f2335dfc0f99ee321155f0a0277aa61.xml';
  */
  var u = 'https://rss.nostr.band/feeds/8daf/a103e197f6be612923332019a0fcbfa5db7112507e2e2391a882ee3a54878daf.xml';
  var t = Math.floor(Date.now() / 1000);
  var url_api = 'https://allorigins.bitejo.com/raw?url='+encodeURIComponent(u)+'&t='+t;
  var url = new URL(url_api);
  var listings = [];
  fetch(url).then((res) => {
    res.text().then((xml_text) => {
      var doc = DOMPARSER(xml_text, 'text/xml');
      var x2js = new X2JS();
      var json_text = x2js.xml2json(doc);
      json_text['rss']['channel']['item'].forEach((item) => {
        var clean_description = item['description'].replace(/<[^>]*>?/gm, '').replace(/[\u00A0-\u9999<>\&]/gim, function(i) { return '&#'+i.charCodeAt(0)+';'; });
        var description_lowercase = clean_description.toLowerCase();
        var category = 'none';
        if(description_lowercase.includes('#selling')) {
          var category = 'selling';
        } else if(description_lowercase.includes('#buying')) {
          var category = 'buying';
        } else if(description_lowercase.includes('#job')) {
          var category = 'trade';
        } else if(description_lowercase.includes('#service')) {
          var category = 'service';
        }
        var title = clean_description.slice(0, 60)+'…';
        var description = clean_description.replace(/(?:\r\n|\r|\n)/g, '<br>');
        var timestamp = (new Date(item['pubDate']).getTime()/1000);
        var link = item['link'].replace(/[\u00A0-\u9999<>\&]/gim, function(i) { return '&#'+i.charCodeAt(0)+';'; });
        var guid = item['link'].replace('https://nostr.band/','');
        var img = item['description'].match(/(https?:\/\/([a-z0-9\/\._-])+\.(?:jpe?g|gif|png|webp))/i);
        if((!img) || (img[0] === undefined)) {
          var img_link = false;
        } else {
          var img_link = img[0];
        }
        var listing_details = {'guid': guid, 'title': title, 'description': description, 'timestamp': timestamp, 'link': link, 'category': category, 'image': img_link};
        listings.push(listing_details);
      });
      return_listings(listings);
    });
  });
});

function paginate_listings() {
  var per_page = 18;
  var start = per_page * CURRENT_PAGE;
  return RELEVANT_LISTINGS.slice(start, start + per_page);
}

function filter_listings() {
  var search_term = $('#search_term').val().toLowerCase();
  var search_category = $('#search_category').val();
  var valid_categories = ['buying','selling','job','service'];
  if(search_term) {
    RELEVANT_LISTINGS = ALL_LISTINGS.filter(function(item) { return item.description.toLowerCase().includes(search_term); });
  } else {
    RELEVANT_LISTINGS = ALL_LISTINGS;
  }
  if(valid_categories.includes(search_category)) {
    RELEVANT_LISTINGS = RELEVANT_LISTINGS.filter(function(item) { return item.category == search_category; });
  }
  CURRENT_PAGE = 0;
  $('#listings_body').html('');
  display_listings(paginate_listings());
}

$("#search").submit(function(e) {
  e.preventDefault();
});

document.body.onload = function(){
  var win = $(window);
  fetch_listings.then((fetched_listings) => {
    ALL_LISTINGS = fetched_listings;
    RELEVANT_LISTINGS = fetched_listings;
    display_listings(paginate_listings());
  });
  win.scroll(function() {
    if ($(document).height() - win.height() == win.scrollTop()) {
      CURRENT_PAGE++;
      display_listings(paginate_listings());
    }
  });
}