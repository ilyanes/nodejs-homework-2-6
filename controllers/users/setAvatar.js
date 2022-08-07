const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const service = require("../../service/users");

const avatarsDir = path.join(__dirname, "../", "../", "public", "avatars");
// console.log(avatarsDir);

const setAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempPath, originalname } = req.file;
    // console.log(req.file);
    const [extension] = originalname.split(".").reverse();
    const newName = `${_id}.${extension}`;
    const uploadPath = path.join(avatarsDir, newName);
    await fs.rename(tempPath, uploadPath);
    const avatarURL = path.join("avatars", newName);
    Jimp.read(uploadPath, (err, newSize) => {
      if (err) throw err;
      newSize
        .resize(250, 250) // resize
        .quality(60) // set JPEG quality
        // .greyscale() // set greyscale
        .write(uploadPath); // save
    });
    await service.findByIdAvatar(_id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};
module.exports = setAvatar;
