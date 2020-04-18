const axios = require('axios')
var download = require('download-file')
const wallpaper = require('wallpaper')

var dogPicUrl = "";

var options = {
    directory: "./images/dogs/",
    filename: "dog.gif"
}

axios.get('https://dog.ceo/api/breed/dachshund/images/random')
    .then(function (response) {
        // handle success
        console.log(response.data.message);
        dogPicUrl = response.data.message;

        download(dogPicUrl, options, function(err){
            if (err) throw err
            console.log("woof");

        })

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
        // (async () => {
        //     await wallpaper.set('./images/dogs/dog.gif');
         
        //     await wallpaper.get();
        //     //=> '/Users/sindresorhus/unicorn.jpg'
        // })();

    });

    (async () => {
        await wallpaper.set('./images/dogs/dog.gif');
     
        await wallpaper.get();
        //=> '/Users/sindresorhus/unicorn.jpg'
    })();