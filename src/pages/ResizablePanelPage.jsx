import ResizablePanel from "../components/ResizablePanel";

const ResizablePanelPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Resizable Panel</h1>
        <ResizablePanel />
      </div>
    </div>
  );
};

export default ResizablePanelPage;
