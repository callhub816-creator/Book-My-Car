export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML string for rich text
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  keywords: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MetaData {
  title: string;
  description: string;
}
