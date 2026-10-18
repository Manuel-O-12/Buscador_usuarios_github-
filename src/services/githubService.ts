// Servicio para consumir la API pública de GitHub

import type { GitHubUser } from '../types/github';

const BASE_URL = 'https://api.github.com';

export async function getUserByUsername(username: string): Promise<GitHubUser> {
  const response = await fetch(`${BASE_URL}/users/${username}`);

  if (response.status === 404) {
    throw new Error(`El usuario "${username}" no fue encontrado en GitHub.`);
  }

  if (!response.ok) {
    throw new Error(`Error al consultar la API: ${response.status} ${response.statusText}`);
  }

  const data: GitHubUser = await response.json();
  return data;
}
