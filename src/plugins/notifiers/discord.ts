import request from 'request'

export const discord = (config) => {
  const discord = {
    pushMessage(title, message) {
      const postData = {
        username: config.username != '' ? config.username : 'Magic8bot',
        avatar_url:
          config.avatar_url != ''
            ? config.avatar_url
            : 'https://camo.githubusercontent.com/db46d81f1352cee31f9baea72dc4396a15ad1d3e/68747470733a2f2f7261776769742e636f6d2f6361726c6f7338662f7a656e626f742f6d61737465722f6173736574732f7a656e626f745f7371756172652e706e67',
        embeds: [
          {
            color: config.color != undefined ? config.color : 15258703,
            fields: [
              {
                name: title,
                value: message,
              },
            ],
          },
        ],
      }

      function callback(error) {
        if (error) {
          console.log('Error happened: ' + error)
        }
      }

      const options = {
        method: 'POST',
        url: 'https://discordapp.com/api/webhooks/' + config.id + '/' + config.token,
        json: postData,
      }

      request(options, callback)
    },
  }
  return discord
}
