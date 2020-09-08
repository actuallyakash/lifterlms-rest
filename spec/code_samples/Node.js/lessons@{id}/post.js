const llmsAPI = require( "llms-api-node" );
const llms = new llmsAPI( {
  "url": "https://example.tld",
  "consumerKey": "ck_XXXXXXXXXXXXXXXXXXXXXX",
  "consumerSecret": "cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
} );

const postData = {
  "title": "Getting Started with LifterLMS",
  "content": "<!-- wp:heading -->\\n<h2>Lorem ipsum dolor sit amet.</h2>\\n<!-- /wp:heading -->\\n\\n<!-- wp:paragraph -->\\n<p>Expectoque quid ad id, quod quaerebam, respondeas. Nec enim, omnes avaritias si aeque avaritias esse dixerimus, sequetur ut etiam aequas esse dicamus.</p>\\n<!-- /wp:paragraph -->",
  "excerpt": "Expectoque quid ad id, quod quaerebam, respondeas. Nec enim, omnes avaritias si aeque avaritias esse dixerimus, sequetur ut etiam aequas esse dicamus.",
  "date_created": "2019-05-20 17:22:05",
  "date_created_gmt": "2019-05-20 13:22:05",
  "menu_order": 0,
  "slug": "getting-started-with-lifterlms",
  "status": "publish",
  "password": "p4$sW0rd",
  "featured_media": 987,
  "comment_status": "open",
  "ping_status": "open",
  "permalink": "https://example.com/lesson/getting-started-with-lifterlms",
  "post_type": "lesson",
  "audio_embed": "https://open.spotify.com/track/trackid",
  "video_embed": "https://www.youtube.com/watch?v=videoid",
  "prerequisite": 321,
  "public": false,
  "parent_id": 987,
  "points": 1,
  "order": 1,
  "drip_method": "none",
  "drip_days": 1,
  "drip_date": "2019-12-12 23:23:59",
  "quiz": {
    "enabled": true,
    "id": 432,
    "progression": "complete"
  },
  "assignment": {
    "enabled": true,
    "id": 876,
    "progression": "complete"
  }
};

llms.post( '/lessons/%7Bid%7D', postData, function( err, data, res ) {
  if ( err ) {
    throw new Error( 'Error!' );
  }
  console.log( data );
} );