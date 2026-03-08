const Jimp = require('jimp');
const path = require('path');

const images = [
    {
        in: 'C:\\Users\\Arjit\\.gemini\\antigravity\\brain\\928e5c48-f4b6-4953-a81c-e72e7bd6576f\\avatar_walk_left_magenta_1772919333182.png',
        out: path.join(__dirname, 'public', 'avatar_walk_left.png')
    },
    {
        in: 'C:\\Users\\Arjit\\.gemini\\antigravity\\brain\\928e5c48-f4b6-4953-a81c-e72e7bd6576f\\avatar_point_right_magenta_1772919349352.png',
        out: path.join(__dirname, 'public', 'avatar_point_right.png')
    },
    {
        in: 'C:\\Users\\Arjit\\.gemini\\antigravity\\brain\\928e5c48-f4b6-4953-a81c-e72e7bd6576f\\avatar_gesture_magenta_1772919364225.png',
        out: path.join(__dirname, 'public', 'avatar_gesture.png')
    },
    {
        in: 'C:\\Users\\Arjit\\.gemini\\antigravity\\brain\\928e5c48-f4b6-4953-a81c-e72e7bd6576f\\avatar_jump_magenta_1772919389330.png',
        out: path.join(__dirname, 'public', 'avatar_jump.png')
    },
    {
        in: 'C:\\Users\\Arjit\\.gemini\\antigravity\\brain\\928e5c48-f4b6-4953-a81c-e72e7bd6576f\\avatar_lookup_magenta_1772919404797.png',
        out: path.join(__dirname, 'public', 'avatar_lookup.png')
    },
    {
        in: 'C:\\Users\\Arjit\\.gemini\\antigravity\\brain\\928e5c48-f4b6-4953-a81c-e72e7bd6576f\\avatar_wave_magenta_1772919421446.png',
        out: path.join(__dirname, 'public', 'avatar_wave.png')
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

                if (r > 120 && g < 150 && b > 120) {
                    if (r > g * 1.5 && b > g * 1.5) {
                        this.bitmap.data[idx + 3] = 0; // Transparent
                    }
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
