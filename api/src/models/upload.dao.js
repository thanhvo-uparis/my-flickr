import fs from "fs";
import path from "path";

export const findAll = async () => {
  const uploadsPath = path.join(
    process.cwd(),
    "database",
    "uploads.json",
  );

  return JSON.parse(
    await fs.promises.readFile(uploadsPath, "utf-8"),
  );
}

export const findAllByTags = async (tags) => {
  const files = await findAll();

  return files.filter(
    (file) => file.tags.some((tag) => tags.includes(tag)),
  );
}

export const createOne = async (file) => {
  const files = await findAll();
  const uploadsPath = path.join(
    process.cwd(),
    "database",
    "uploads.json",
  );

  await fs.promises.writeFile(
    uploadsPath,
    JSON.stringify([...files, file], null, 2),
  );
}

export const upload = async (file) => {
  const extension = file.name.split(".").pop();
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
  const fileName = `${uniqueSuffix}.${extension}`;
  const filePath = path.join(process.env.UPLOAD_PATH, `${uniqueSuffix}.${extension}`);
  const uploadPath = path.resolve(path.dirname(filePath));

  if (!fs.existsSync(uploadPath)) {
    await fs.promises.mkdir(uploadPath, { recursive: true });
  }

  await fs.promises.writeFile(filePath, file.content, "base64");

  return { name: fileName, path: filePath };
}
