const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "public", "images");
const tempFolder = path.join(__dirname, ".image-temp");

if (!fs.existsSync(tempFolder)) {
  fs.mkdirSync(tempFolder);
}

const files = fs.readdirSync(folder).filter(file =>
  /\.(jpg|jpeg|png)$/i.test(file)
);

async function compress() {
  for (const file of files) {
    const input = path.join(folder, file);
    const temp = path.join(tempFolder, file);

    try {
      const before = fs.statSync(input).size;

      const image = sharp(input).rotate();

      if (/\.(jpg|jpeg)$/i.test(file)) {
        await image
          .resize({
            width: 2400,
            height: 2400,
            fit: "inside",
            withoutEnlargement: true
          })
          .jpeg({
            quality: 82,
            mozjpeg: true
          })
          .toFile(temp);
      } else {
        await image
          .resize({
            width: 2400,
            height: 2400,
            fit: "inside",
            withoutEnlargement: true
          })
          .png({
            compressionLevel: 9,
            palette: true
          })
          .toFile(temp);
      }

      const after = fs.statSync(temp).size;

      if (after < before) {
        fs.copyFileSync(temp, input);

        console.log(
          `${file}: ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB`
        );
      } else {
        console.log(
          `${file}: kept original (${(before / 1024 / 1024).toFixed(2)} MB)`
        );
      }

      fs.unlinkSync(temp);
    } catch (error) {
      console.log(`FAILED: ${file} - ${error.message}`);

      if (fs.existsSync(temp)) {
        fs.unlinkSync(temp);
      }
    }
  }

  fs.rmSync(tempFolder, { recursive: true, force: true });

  console.log("\nCompression complete.");
}

compress();