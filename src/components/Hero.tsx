import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero relative w-full h-[70vh] min-h-[500px] max-h-[700px]" role="banner">
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/hero/main-hero-mobile.jpg" />
        <source media="(min-width: 769px)" srcSet="/images/hero/main-hero-desktop.jpg" />
        <Image
          src="/images/hero/main-hero-desktop.jpg"
          alt="jihotv 메인 비주얼"
          fill
          className="object-cover grayscale"
          priority
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  );
};

export default Hero;
