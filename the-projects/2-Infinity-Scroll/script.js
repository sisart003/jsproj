const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

// Unsplash API
const count = 10;
const apiKey = 'ciQaVEOZlFu3dbD5YHFM9_G_EA5b__Iky4cbC62NPF4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Helper function to Set Attributes on DOM Elements
function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}

// Create Elements for Links & Photos, Add to DOM
function displayPhotos(){
    // Run function for each object in PhotosArray
    photosArray.forEach((photo) => {

        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })

        // Create <img> for photo
        const img = document.createElement('img')
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })

        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

//  Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl)
        photosArray = await response.json();
        // console.log(photosArray);
        displayPhotos();
    }catch(error){
        // Catch Error Here
    }
}

// On Load
getPhotos();