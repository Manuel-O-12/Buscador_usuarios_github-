import { useState, useCallback } from 'react';
import type { GitHubUser } from './types/github';
import { getUserByUsername } from './services/githubService';
import SearchBar from './components/SearchBar/SearchBar';
import UserCard from './components/UserCard/UserCard';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import './App.css';

type AppStatus = 'idle' | 'loading' | 'success' | 'error';

function App() {
  const [status, setStatus] = useState<AppStatus>('idle');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSearch = useCallback(async (username: string) => {
    // Reinicia el estado antes de cada búsqueda
    setStatus('loading');
    setUser(null);
    setErrorMsg('');

    try {
      const data = await getUserByUsername(username);
      setUser(data);
      setStatus('success');
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : 'Ocurrió un error inesperado. Intenta de nuevo.';
      setErrorMsg(message);
      setStatus('error');
    }
  }, []);

  return (
    <main className="app">
      <header className="app__header">
        <span className="app__logo" aria-hidden="true">🐙</span>
        <h1 className="app__title">GitHub User Finder</h1>
        <p className="app__subtitle">Busca cualquier usuario de GitHub al instante</p>
      </header>

      <section className="app__search" aria-label="Búsqueda de usuario">
        <SearchBar onSearch={handleSearch} isLoading={status === 'loading'} />
      </section>

      <section className="app__result" aria-live="polite">
        {status === 'loading' && <Loader />}
        {status === 'error' && <ErrorMessage message={errorMsg} />}
        {status === 'success' && user && <UserCard user={user} />}
      </section>
    </main>
  );
}

export default App;
