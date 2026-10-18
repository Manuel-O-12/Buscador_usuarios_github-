// Tipos para la respuesta de la API de GitHub

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
  location: string | null;
  company: string | null;
}
