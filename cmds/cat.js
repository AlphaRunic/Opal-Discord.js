const querystring = require('querystring');
const r2 = require('r2');
const CAT_API_KEY = process.env.CAT_API;
const CAT_API_URL   = "https://api.thecatapi.com/";
async function loadImage(sub_id)
{
  // you need an API key to get access to all the iamges, or see the requests you've made in the stats for your account
  var headers = {
      'X-API-KEY': CAT_API_KEY,
  }
  var query_params = {
    'has_breeds':true, // we only want images with at least one breed data object - name, temperament etc
    'mime_types':'jpg,png', // we only want static images as Discord doesn't like gifs
    'size':'small',   // get the small images as the size is prefect for Discord's 390x256 limit
    'sub_id': sub_id, // pass the message senders username so you can see how many images each user has asked for in the stats
    'limit' : 1       // only need one
  }
  // convert this obejc to query string 
  let queryString = querystring.stringify(query_params);

  try {
    // construct the API Get request url
    let _url = CAT_API_URL + `v1/images/search?${queryString}`;
    // make the request passing the url, and headers object which contains the API_KEY
    var response = await r2.get(_url , {headers} ).json
  } catch (e) {
      console.log(e)
  }
  return response;

}
module.exports = {
	name:  'cat',
	category: 'Fun',
	desc: 'Returns a random cat image.',
	aliases: ['kitty'],
	run: async (client,message,args,opal,Discord) => {
			var images = await loadImage(message.author.username);

			// get the Image, and first Breed from the returned object.
			var image = images[0];
			var breed = image.breeds[0];

			//console.log('message processed','showing',breed)
			// use the *** to make text bold, and * to make italic
			message.channel.send( new Discord.MessageEmbed().setTitle("**"+breed.name + "**").setDescription("*"+breed.temperament+"*").setImage(image.url).setColor('RANDOM'));
	}
}