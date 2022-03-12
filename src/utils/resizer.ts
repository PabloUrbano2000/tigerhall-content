type ImageFormat = "png" | "jpg" | "webp" | "gif";

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

const addParam = (resizerParams: string, param: string | number) =>
  param ? `${resizerParams},${param}` : resizerParams;

const addQuality = (resizerParams: string, quality: ResizeProps["quality"]) => {
  if (quality < 0 || quality > 100) {
    throw new Error(
      `Quality must be a value between 1 - 100. You provided ${quality}`
    );
  }
  return resizerParams + addParam(resizerParams, `q${quality}`);
};

const addFormat = (resizerParams: string, format: ResizeProps["format"]) =>
  format ? resizerParams + addParam(resizerParams, format) : resizerParams;

const addSize = (
  resizerParams: string,
  width: ResizeProps["width"],
  height: ResizeProps["height"]
) => {
  const square = width === height;
  const size = square ? width : `${width}x${height}`;
  return resizerParams + addParam(resizerParams, size);
};

const addRotation = (
  resizerParams: string,
  rotation: ResizeProps["rotation"]
) => {
  if (rotation < 0 || rotation > 360) {
    throw new Error(
      `Rotation must be a value between 0 - 360. You provided ${rotation}`
    );
  }
  return rotation
    ? resizerParams + addParam(resizerParams, `r${rotation}`)
    : resizerParams;
};

const addSmartCrop = (
  resizerParams: string,
  smartCrop: ResizeProps["smartCrop"]
) =>
  smartCrop ? resizerParams + addParam(resizerParams, "sc") : resizerParams;

const addFit = (resizerParams: string, fit: ResizeProps["fit"]) =>
  fit ? resizerParams + addParam(resizerParams, "fit") : resizerParams;

const RESIZER_PREFIX = "resize/";
const fallbackImage =
  "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

/** @todo we need to improve the way we concat the params to the URL */
export const resize = ({
  url,
  width = 0,
  height = 0,
  quality = 75,
  format,
  rotation,
  smartCrop,
  fit,
}: ResizeProps) => {
  let resizerParams = addSize(RESIZER_PREFIX, width, height);
  resizerParams = addQuality(resizerParams, quality);
  resizerParams = addFormat(resizerParams, format);
  resizerParams = addRotation(resizerParams, rotation);
  resizerParams = addSmartCrop(resizerParams, smartCrop);
  resizerParams = addFit(resizerParams, fit);

  return url
    ? url.replace(
        /(^https?:\/\/[\.\w-]+tigerhall\.(?:io|com)?\/)/,
        `$1resize/${resizerParams}`
      )
    : fallbackImage;
};
