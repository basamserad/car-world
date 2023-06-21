import { CustomFilter, Hero, SearchBar } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Best Car World</h1>
          <p>Explore the world of cars where your dream car is</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container"></div>
        </div>
      </div>
    </main>
  );
}
