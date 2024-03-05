
{/* <div class="img-container">
    <img id="myImage" src="photo-1531343983535-681659059ec1.avif" alt="Image" type="image/avif" style="height: 400px; width: 400px;">
</div>

<span id="image1">Dominant Color 1</span> */}

    // Get reference to the image element
    const image1 = document.getElementById('image1');


    const image = document.getElementById('myImage');

    // Create a new Color Thief instance
    const colorThief = new ColorThief();

    // Listen for the 'load' event of the image
    image.onload = function() {
        // Use Color Thief to get the dominant color from the image
        const dominantColor = colorThief.getColor(image);

        // Log the RGB values of the dominant color
        console.log('Dominant color:', dominantColor);

        // Set background colors using RGB values
        image1.style.backgroundColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;
    };
