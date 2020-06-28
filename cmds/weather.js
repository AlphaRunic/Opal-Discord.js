const Discord = require('discord.js');
module.exports = {
    name: 'weather',
		category: 'Fun',
    desc: 'Returns the weather for a location.',
    run: async(client, message, args) => {
      try {
        const request = require('request');
				const key = process.env.WEATHER_API;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${args.join(' ')}&units=imperial&appid=${key}`;

        // Performs a request to OpenWeatherMap to retrieve weather info
        request(url, (err, response, body) => {

          const weather = JSON.parse(body);

          if(weather.main === undefined) {
              message.reply('I am unable to fetch the weather');
          }
          else {
            const weatherText =
            { embed:
              {
                color: "RANDOM",
                title: `Weather for ${weather.name}`,
                fields: [

                    {
                    name: ':white_sun_rain_cloud:  Conditions',
                    value: ` ${weather.weather[0].description}`,
                    },

                    // The current temperature
                    {
                    name: ':thermometer: Temperature',
                    value: `${weather.main.temp} °F `,
                    },

                    // The current humidity
                    {
                    name: ':droplet: Humidity',
                    value: `${weather.main.humidity} % `,
                    },

                    // The current number of clouds
                    {
                    name: ':cloud: Clouds',
                    value: `${weather.clouds.all} %`,
                    },

                    // The current wind speed
                    {
                    name: ':dash: Wind Speed',
                    value: ` ${weather.wind.speed} mph`,
                    },
                ],
                timestamp: new Date(),
                footer: {
                  text: 'Current Forecast',
                },
              },
            };

						const temp = weatherText.embed
						let embed = new Discord.MessageEmbed()
							.setTitle(temp.title)
							.setColor(temp.color)
							.addFields(temp.fields)
							.setFooter(temp.footer.text + ` at ${temp.timestamp}`);

              message.channel.send(embed);
          }
        });
      }

      // Error catching for any problems
      catch (error) {
        console.log(error);
        message.reply('I am unable to fetch the weather');
      }
    },
};