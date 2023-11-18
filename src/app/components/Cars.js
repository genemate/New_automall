//components
import Brands from "./Brands";
import CarSlider from "./CarSlider";
import Sort from "./Sort";
import MultiFilters from "./MultiFilters";

export default function Cars() {
  return (
    <section className="h-screen flex items-center" id="cars">
      <div className="container mx-auto">
        {/* <MultiFilters /> */}
        <Sort />
        <CarSlider />
      </div>
    </section>
  );
}
