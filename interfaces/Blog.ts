export interface IBlogFrontMatter {
  id: string;
  title: string;
  date: string;
  description: string;
  heroImage: string;
  photographer: string;
  unsplashAccount: string;
  isPublished: string;
  tags: string[];
}

export interface IBlogPost extends IBlogFrontMatter {
  content: string;
}
