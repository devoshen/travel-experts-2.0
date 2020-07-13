// this JS loops the destination images and description in the index.html destination section

// Variable where we will store our img tags
let imgTemplate = ''; 

// Flex container for images
const gallery = document.querySelector('.jsDest'); 
    
console.log(gallery);
     
    
// define function that outputs image (with link) and description (with link in new tab)
function task(i) {
    setTimeout (function() {
        imgTemplate = `<div><a href="gallery.html"><img src="images/${imgInfoArray[i].fileName}" alt="${imgInfoArray[i].altText}"></a><a href="${imgInfoArray[i].linkURL}" target="blank"><p>${imgInfoArray[i].description}</p></a></div>`;
        // Add HTML img string to gallery container
        gallery.innerHTML = imgTemplate;    
    }, 4000 * i);
}

// Run through array of objects
for (let i = 0; i < imgInfoArray.length; i++) {
    task(i);
};


