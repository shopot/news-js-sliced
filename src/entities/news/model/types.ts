export type News = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type NewsDto = {
  status: string;
  totalResults: number;
  articles: News[];
};

export type NewsState = {
  totalResults: number;
  articles: News[];
};
