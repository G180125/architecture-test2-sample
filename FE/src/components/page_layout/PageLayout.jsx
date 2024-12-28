const PageLayout = ({ navbar, mainBody }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {navbar}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {mainBody}
      </main>
    </div>
  );
};
export default PageLayout;
