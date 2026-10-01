"use client";

import React from 'react';
import { BlogFilters, ARTICLE_FORMATS, ARTICLE_THEMES, ArticleFormat, ArticleTheme } from '../types/blog';

interface BlogFiltersSidebarProps {
  filters: BlogFilters;
  onFiltersChange: (filters: BlogFilters) => void;
}

export function BlogFiltersSidebar({ filters, onFiltersChange }: BlogFiltersSidebarProps) {
  const toggleFormat = (format: ArticleFormat) => {
    const newFormats = filters.formats.includes(format)
      ? filters.formats.filter(f => f !== format)
      : [...filters.formats, format];
    
    onFiltersChange({
      ...filters,
      formats: newFormats
    });
  };

  const toggleTheme = (theme: ArticleTheme) => {
    const newThemes = filters.themes.includes(theme)
      ? filters.themes.filter(t => t !== theme)
      : [...filters.themes, theme];
    
    onFiltersChange({
      ...filters,
      themes: newThemes
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      formats: [],
      themes: []
    });
  };

  return (
    <div className="fixed left-[90px] top-[60px] w-[280px] h-[calc(100vh-60px)] border-r border-t border-white/25 backdrop-blur-sm overflow-y-auto z-40">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filtres</h2>
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Effacer tout
          </button>
        </div>

        {/* Formats Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <img src="/icon1.png" alt="Format icon" className="w-5 h-5" />
            <h3 className="font-medium text-gray-900 dark:text-white">Formats</h3>
          </div>
          <div className="space-y-3">
            {ARTICLE_FORMATS.map((format) => (
              <div key={format} className="flex items-center gap-3 ml-8">
                <img src="/icon2.png" alt="Item icon" className="w-4 h-4" />
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.formats.includes(format)}
                    onChange={() => toggleFormat(format)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{format}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Themes Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/icon1.png" alt="Theme icon" className="w-5 h-5" />
            <h3 className="font-medium text-gray-900 dark:text-white">Thèmes</h3>
          </div>
          <div className="space-y-3">
            {ARTICLE_THEMES.map((theme) => (
              <div key={theme} className="flex items-center gap-3 ml-8">
                <img src="/icon2.png" alt="Item icon" className="w-4 h-4" />
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.themes.includes(theme)}
                    onChange={() => toggleTheme(theme)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{theme}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 