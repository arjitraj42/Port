const Jimp = require('jimp');

async function removeBackground() {
    try {
        console.log('Loading image...');
        const image = await Jimp.read('src/assets/cyber_avatar.png');

        console.log('Processing pixels to remove black background...');
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            // Check if the pixel is close to black
            if (red < 25 && green < 25 && blue < 25) {
                // Set alpha to 0 (transparent)
                this.bitmap.data[idx + 3] = 0;
            } else {
                // Apply a slight feathering/anti-aliasing curve for edge pixels
                if (red < 40 && green < 40 && blue < 40) {
                    this.bitmap.data[idx + 3] = Math.max(0, this.bitmap.data[idx + 3] - 150);
                }
            }
        });

        console.log('Saving processed image...');
        await image.writeAsync('src/assets/cyber_avatar_transparent.png');
        console.log('Done!');
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

removeBackground();
