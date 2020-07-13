    // Variable where we will store our img tags
    let imgTemplate = ''; 

    // Flex container for images
    const gallery = document.querySelector('.gallery'); 
    
    console.log(gallery);
  
    // Using "forEach" to create Image + AltText + Pic Description with external link (opens in new tab)

    imgInfoArray.forEach(function(item){
      console.log(item);
      imgTemplate += `<div><img src="images/${item.fileName}" alt="${item.altText}"><a href="${item.linkURL}" target="blank"><p>${item.description}</p></a></div>`;
    });

    // Add HTML img string to gallery container
    gallery.innerHTML = imgTemplate;




    // Old code below (can be deleted)

    // Using "for loop" to create Image + AltText
    // for (let i = 0; i < imgInfoArray.length; i++) {
    //     imgTemplate += `<img src="images/${imgInfoArray[i].fileName}" alt="${imgInfoArray[i].altText}">`;
    // }


    // Using "forEach" to create Image + AltText
    // imgInfoArray.forEach(function(item){
    //   console.log(item);
    //   imgTemplate += `<img src="images/${item.fileName}" alt="${item.altText}">`;
    // });



    