import multer from "multer";
import path from "path";

const userUploadDirPath = path.join(__dirname, "..", "/public/user-profile");

const userImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, userUploadDirPath);
  },
  filename: (req, file, cb) => {
    const explodedName = file.originalname.split(".");
    const ext = explodedName[explodedName.length - 1];
    cb(null, `${Date.now()}.${ext}`);
  },
});

const userImageUpload = multer({
  storage: userImageStorage,
  limits: {
    fileSize: 15000000, // 15MB in bytes
  },
  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
}).fields([{ name: "image", maxCount: 1 }]);

export { userImageUpload };
