import { generateComponents } from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react/hooks";

import type { FileRouter } from "@/app/api/uploadthing/core";

export const { UploadButton, UploadDropzone, Uploader } = generateComponents<FileRouter>();

export const { useUploadThing, uploadFiles } = generateReactHelpers<FileRouter>();
