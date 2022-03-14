type ImageFormat = "png" | "jpeg" | "webp" | "gif";

interface ResizeProps {
  url: string;
  width?: number;
  height?: number;
  /**
   * Must be a value between 1 - 100.
   * The default is 75
   */
  quality?: number;
  format?: ImageFormat;
  rotation?: number;
  smartCrop?: boolean;
  fit?: boolean;
}

function addParam(resizerParams: string, param: string | number) {
  return param ? `${resizerParams}${param},` : resizerParams;
}

function addQuality(resizerParams: string, quality: ResizeProps["quality"]) {
  if (quality < 0 || quality > 100) {
    throw new Error(
      `Quality must be a value between 1 - 100. You provided ${quality}`
    );
  }
  return addParam(resizerParams, `q${quality}`);
}

function addFormat(resizerParams: string, format: ResizeProps["format"]) {
  return format ? addParam(resizerParams, format) : resizerParams;
}

function addSize(
  resizerParams: string,
  width: ResizeProps["width"],
  height: ResizeProps["height"]
) {
  return addParam(resizerParams, `${width}x${height}`);
}

function addRotation(resizerParams: string, rotation: ResizeProps["rotation"]) {
  if (rotation < 0 || rotation > 360) {
    throw new Error(
      `Rotation must be a value between 0 - 360. You provided ${rotation}`
    );
  }
  return rotation ? addParam(resizerParams, `r${rotation}`) : resizerParams;
}

function addSmartCrop(
  resizerParams: string,
  smartCrop: ResizeProps["smartCrop"]
) {
  return smartCrop ? addParam(resizerParams, "sc") : resizerParams;
}

function addFit(resizerParams: string, fit: ResizeProps["fit"]) {
  return fit ? addParam(resizerParams, "fit") : resizerParams;
}

const RESIZER_PREFIX = "resize/";
export const fallbackImage =
  "https://play-lh.googleusercontent.com/pZhLWxoQ843sV1ssPJBhHBKICAw2em89pZN9-5Io28sQOwzjV5lr-4cKX54kbntT0w";

/** @todo we need to improve the way we concat the params to the URL */
export function resize({
  url,
  width = 0,
  height = 0,
  quality = 75,
  format,
  rotation,
  smartCrop,
  fit,
}: ResizeProps) {
  let resizerParams = addSize(RESIZER_PREFIX, width, height);
  resizerParams = addQuality(resizerParams, quality);
  resizerParams = addFormat(resizerParams, format);
  resizerParams = addRotation(resizerParams, rotation);
  resizerParams = addSmartCrop(resizerParams, smartCrop);
  resizerParams = addFit(resizerParams, fit);

  // removes the trailing comma
  resizerParams = resizerParams.slice(0, -1);

  return url
    ? url.replace(
        /(^https?:\/\/[\.\w-]+tigerhall\.(?:io|com)?\/)/,
        `$1${resizerParams}/`
      )
    : fallbackImage;
}
