const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const images = [
    {
        in: 'C:\\Users\\Arjit\\.gemini\\antigravity\\brain\\928e5c48-f4b6-4953-a81c-e72e7bd6576f\\avatar_pointing_1772918113682.png',
        out: path.join(__dirname, 'public', 'avatar_pointing.png')
    },
    {
        in: 'C:\\Users\\Arjit\\.gemini\\antigravity\\brain\\928e5c48-f4b6-4953-a81c-e72e7bd6576f\\avatar_thumbs_up_1772918127284.png',
        out: path.join(__dirname, 'public', 'avatar_thumbs.png')
    }
];

async function processImages() {
    for (const img of images) {
        try {
            console.log(`Processing ${img.in}`);
            const image = await Jimp.read(img.in);

            image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
                const r = this.bitmap.data[idx + 0];
                const g = this.bitmap.data[idx + 1];
                const b = this.bitmap.data[idx + 2];

                if (r < 15 && g < 15 && b < 15) {
                    this.bitmap.data[idx + 3] = 0;
                }
            });

            await image.writeAsync(img.out);
            console.log(`Saved ${img.out}`);
        } catch (error) {
            console.error(`Error processing ${img.in}:`, error);
        }
    }
}

processImages();
