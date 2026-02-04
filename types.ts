import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface Project {
  title: string;
  category: string;
  image: string;
  cols: number; // For Bento grid spanning
}