import fs from "fs";
import path from "path";

async function addRemoteImage(image: string | string[]) {
  try {
    const images = Array.isArray(image) ? image : [image];
    const p = path.resolve(process.cwd(), "remoteOptimizedImages.js");

    let existingData: string[] = [];

    // Check if file exists and read existing data
    if (fs.existsSync(p)) {
      try {
        const fileContent = fs.readFileSync(p, "utf-8");
        // Handle empty file case
        if (fileContent.trim() === "") {
          fs.writeFileSync(p, "module.exports = []");
        } else {
          // Parse existing data safely
          const match = fileContent.match(/module\.exports\s*=\s*(\[.*\])/);
          if (match) {
            existingData = JSON.parse(match[1]);
          }
        }
      } catch (err) {
        console.warn("Error reading existing file, creating new one:", err);
        fs.writeFileSync(p, "module.exports = []");
      }
    } else {
      // Create new file if it doesn't exist
      fs.writeFileSync(p, "module.exports = []");
    }

    // Filter and combine data
    const newData = [...existingData, ...images].filter(
      (item, index, self) =>
        item !== "" && item !== null && item !== undefined && self.indexOf(item) === index // Remove duplicates
    );

    // Write the updated data
    fs.writeFileSync(p, `module.exports = ${JSON.stringify(newData, null, 2)}`);

    return newData;
  } catch (e) {
    console.error("Error adding remote image:", e);
    process.exit(1);
  }
}

export default addRemoteImage;
