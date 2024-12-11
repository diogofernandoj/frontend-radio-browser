import { Button } from "./_components/ui/button";

const HomePage = async () => {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden p-8">
      <div className="h-full w-full space-y-8 overflow-auto rounded-lg bg-card p-8">
        <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-muted">
              Radio Browser
            </span>
            <h2 className="text-xl font-semibold text-white">Favorites</h2>
          </div>
          <div>
            <Button>Search here...</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
