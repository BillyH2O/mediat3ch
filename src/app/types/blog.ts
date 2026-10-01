export type ArticleFormat = 'Actualité' | 'Interview' | 'Tutoriel' | 'Analyse';

export type ArticleTheme = 'IA' | 'Réalité Virtuelle' | 'Sécurité' | 'Quantique' | 'Jeux-vidéo' | 'Science';

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  format: ArticleFormat;
  theme: ArticleTheme;
  publishDate: string;
  readTime: number;
  author: string;
}

export interface BlogFilters {
  formats: ArticleFormat[];
  themes: ArticleTheme[];
}

export const ARTICLE_FORMATS: ArticleFormat[] = ['Actualité', 'Interview', 'Tutoriel', 'Analyse'];

export const ARTICLE_THEMES: ArticleTheme[] = ['IA', 'Réalité Virtuelle', 'Sécurité', 'Quantique', 'Jeux-vidéo', 'Science']; 