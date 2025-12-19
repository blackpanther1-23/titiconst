import React from 'react';

// Service interface with React.ReactNode for the icon property
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Collaborator {
  name: string;
  logoUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}