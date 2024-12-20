
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import SearchPage from './Components/SearchPage';
import MovieDetails from './Components/MovieDetails';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="container w-screen">
          <h1 className="text-3xl font-bold text-center bg-black text-white w-screen p-3">Film Finder</h1>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </Router>
      
    </QueryClientProvider>
  );
}

export default App;

