import BestHotels from "@/components/best-hotels/BestHotels";
import Hero from "@/components/hero/Hero";
import PopularLocations from "@/components/popular-locations/PopularLocations";
import sea3 from '../../public/assets/sea3.jpg'
import hotel_image from '../../public/assets/hr_10.jpg'
import room2 from '../../public/assets/room2.jpeg'
export default function Home() {
  return (
    <>
      <Hero
      image={room2}
      mainHeader="Are you ready for an adventure?"
      secondaryHeader = "Browse through popular locations"
      />
      <PopularLocations />
      <Hero
            image={hotel_image}
            mainHeader="Get the best offer for your hotel"
            secondaryHeader = "Pick your desired place."
      />
      <BestHotels />
    </>
  );
}
