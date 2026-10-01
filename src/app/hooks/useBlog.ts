"use client";

import { useState, useMemo } from 'react';
import { BlogFilters } from '../types/blog';
import { mockArticles } from '../data/mockArticles';

export function useBlog() {
  const [filters, setFilters] = useState<BlogFilters>({
    formats: [],
    themes: []
  });
  
  const [searchQuery, setSearchQuery] = useState('');

  // In the future, this could be replaced with an API call
  const articles = useMemo(() => mockArticles, []);

  // Filter articles based on selected filters and search query
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      // Filter by formats
      const formatMatch = filters.formats.length === 0 || filters.formats.includes(article.format);
      
      // Filter by themes
      const themeMatch = filters.themes.length === 0 || filters.themes.includes(article.theme);
      
      // Filter by search query
      const searchMatch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      return formatMatch && themeMatch && searchMatch;
    });
  }, [articles, filters, searchQuery]);

  const activeFiltersCount = filters.formats.length + filters.themes.length;

  const clearFilters = () => {
    setFilters({ formats: [], themes: [] });
    setSearchQuery('');
  };

  return {
    articles,
    filteredArticles,
    filters,
    setFilters,
    searchQuery,
    setSearchQuery,
    activeFiltersCount,
    clearFilters
  };
} 