export type ImagesDataType = {
  id: string;
  alt_description: string;
  description?: string;
  likes?: number;
  urls: { [keys: string]: string };
  user: { [keys: string]: string };
};

export type ResponseData = {
  results: ImagesDataType[];
  total_pages: number;
  total: number;
};
