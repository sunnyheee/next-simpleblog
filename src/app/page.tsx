import CarouselPosts from "./_components/CarouselPosts";
import FeaturePosts from "./_components/FeaturePosts";
import Hero from "./_components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturePosts />
      <CarouselPosts />
    </>
  );
}
