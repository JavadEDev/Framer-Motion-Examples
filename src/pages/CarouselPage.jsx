import CarouselSlider from "../components/CarouselSlider";

const CarouselPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Carousel Slider
        </h1>
        <CarouselSlider />
      </div>
    </div>
  );
};

export default CarouselPage;
