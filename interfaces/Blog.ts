export interface IBlogFrontMatter {
  id: string;
  title: string;
  date: string;
  description: string;
  heroImage: string;
  photographer: string;
  photographerAccount: string;
  photoProvider: string;
  isPublished: string;
  tags: string[];
}

export interface IBlogPost extends IBlogFrontMatter {
  content: string;
}
