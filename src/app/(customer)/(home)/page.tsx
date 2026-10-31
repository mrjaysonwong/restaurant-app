import { HeroHeader } from './_components/HeroHeader';
import { FeaturedMenu } from './_components/FeaturedMenu';
import { OurCraft } from './_components/OurCraft';
import { OurLocation } from './_components/OurLocation';
import { AboutUs } from './_components/AboutUs';


export default async function Home() {
  return (
    <>
      <HeroHeader />
      <FeaturedMenu />
      <OurCraft />
      <AboutUs />
      <OurLocation />

      {/* {Array.from({ length: 20 }).map((_, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
      ))} */}
    </>
  );
}
