import Image from 'next/image';

export default function HeroIllustration() {
  return (
    <Image src="/hero.jpg" alt="Hero Illustration" width={500} height={300} />
  );
}
