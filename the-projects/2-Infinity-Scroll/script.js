// Unsplash API
const count = 10;
const apiKey = 'ciQaVEOZlFu3dbD5YHFM9_G_EA5b__Iky4cbC62NPF4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//  Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl)
        const data = await response.json();
        console.log(data);
    }catch(error){
        // Catch Error Here
    }
}

// On Load
getPhotos();