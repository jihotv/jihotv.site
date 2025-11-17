import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero relative w-full h-[60vh] min-h-[400px] max-h-[650px]" role="banner">
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/hero/main-hero-mobile.jpg" />
        <source media="(min-width: 769px)" srcSet="/images/hero/main-hero-desktop.jpg" />
        <Image
          src="/images/hero/main-hero-desktop.jpg"
          alt="jihotv 메인 비주얼"
          fill
          className="object-cover"
          priority
        />
      </picture>
      <div className="hero-overlay absolute inset-0 bg-black/20 flex items-center justify-center">
        <h2 className="hero-title text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
          당신의 일상을 특별하게
        </h2>
      </div>
    </section>
  );
};

export default Hero;
