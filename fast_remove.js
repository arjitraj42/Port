const jimp = require('jimp');

async function removeBackground() {
    console.log("Reading avatar...");
    const image = await jimp.read('src/assets/avatar.png');
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const data = image.bitmap.data;

    const bgR = data[0], bgG = data[1], bgB = data[2];
    const tolerance = 50;

    function isBg(idx) {
        const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = data[idx + 3];
        if (a === 0) return true;
        // White/light grey detection
        return (r > 200 && g > 200 && b > 200) ||
            (Math.abs(r - bgR) < tolerance && Math.abs(g - bgG) < tolerance && Math.abs(b - bgB) < tolerance);
    }

    const visited = new Uint8Array(width * height);
    const queue = [];
    let head = 0;

    // Seed edges
    for (let x = 0; x < width; x++) {
        queue.push({ x, y: 0 });
        queue.push({ x, y: height - 1 });
    }
    for (let y = 0; y < height; y++) {
        queue.push({ x: 0, y });
        queue.push({ x: width - 1, y });
    }

    console.log("Flooding...");
    while (head < queue.length) {
        let { x, y } = queue[head++];
        let pixelIndex = y * width + x;

        if (visited[pixelIndex]) continue;
        visited[pixelIndex] = 1;

        let dataIndex = pixelIndex * 4;

        if (isBg(dataIndex)) {
            data[dataIndex + 3] = 0; // Set Alpha to 0

            if (x + 1 < width && !visited[y * width + (x + 1)]) queue.push({ x: x + 1, y });
            if (x - 1 >= 0 && !visited[y * width + (x - 1)]) queue.push({ x: x - 1, y });
            if (y + 1 < height && !visited[(y + 1) * width + x]) queue.push({ x, y: y + 1 });
            if (y - 1 >= 0 && !visited[(y - 1) * width + x]) queue.push({ x, y: y - 1 });
        }
    }

    // Simple Anti-aliasing pass
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            let idx = (y * width + x) * 4;
            if (data[idx + 3] > 0 && data[idx] > 180 && data[idx + 1] > 180 && data[idx + 2] > 180) {
                if (data[((y) * width + (x + 1)) * 4 + 3] === 0 ||
                    data[((y) * width + (x - 1)) * 4 + 3] === 0 ||
                    data[((y + 1) * width + x) * 4 + 3] === 0 ||
                    data[((y - 1) * width + x) * 4 + 3] === 0) {
                    data[idx + 3] = 60; // Soft edge
                }
            }
        }
    }

    await image.writeAsync('src/assets/avatar_removed_bg.png');
    console.log("Saved transparent avatar as avatar_removed_bg.png");
}

removeBackground().catch(console.error);
