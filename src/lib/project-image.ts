import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";

const uploadsPublicPath = "/uploads/projects";
const uploadsDirectoryPath = path.join(process.cwd(), "public", "uploads", "projects");
const maxImageSize = 5 * 1024 * 1024;
const allowedImageTypes = new Map([
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/webp", ".webp"],
  ["image/gif", ".gif"],
]);

function getProjectImageFile(formData: FormData) {
  const value = formData.get("projectImage");
  if (!(value instanceof File) || value.size === 0) return null;
  return value;
}

export async function saveProjectImageUpload(formData: FormData) {
  const file = getProjectImageFile(formData);
  if (!file) return "";

  const extension = allowedImageTypes.get(file.type);
  if (!extension) {
    throw new Error("Envie uma imagem JPG, PNG, WebP ou GIF.");
  }

  if (file.size > maxImageSize) {
    throw new Error("A imagem deve ter no maximo 5 MB.");
  }

  await fs.mkdir(uploadsDirectoryPath, { recursive: true });

  const fileName = `${randomUUID()}${extension}`;
  const destinationPath = path.join(uploadsDirectoryPath, fileName);
  const buffer = Buffer.from(await file.arrayBuffer());

  await fs.writeFile(destinationPath, buffer);

  return `${uploadsPublicPath}/${fileName}`;
}

export async function removeProjectImageUpload(imageUrl?: string) {
  if (!imageUrl?.startsWith(`${uploadsPublicPath}/`)) return;

  const fileName = path.basename(imageUrl);
  const imagePath = path.join(uploadsDirectoryPath, fileName);

  try {
    await fs.unlink(imagePath);
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code !== "ENOENT") throw error;
  }
}
