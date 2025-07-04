import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const sections = [
    {
      imageUrl: "/catalog-01.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      overTitle: "sit amet gogo",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
          voluptate quo deleniti animi laboriosam.{" "}
          <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Soluta repellendus quia quos obcaecati nihil. Laudantium non accusantium, voluptate eum nesciunt
          at suscipit quis est soluta?
        </p>
      ),
    },
    {
      imageUrl: "/catalog-02.jpg",
      title: "Tote Bag Merdeka Belajar - Simpel, Kuat, Fungsional.",
      overTitle: "",
      reversed: true,
      content: (
        <>
          <p>
            Tote bag eksklusif bertema Merdeka Belajar dari BGP ini hadir dengan desain minimalis namun kuat untuk aktivitas harianmu. 
            Cocok untuk mahasiswa, guru, dan siapa pun yang mendukung semangat pendidikan di Indonesia.
          </p>
          <ul>
            <li>Bahan canvas tebal anti sobek</li>
            <li>Muat laptop, buku, dan alat tulis</li>
            <li>Nyaman dibawa dan tahan lama</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          {sections.map((section, index) => (
            <BasicSection
              key={index}
              imageUrl={section.imageUrl}
              title={section.title}
              overTitle={section.overTitle}
              reversed={section.reversed}
            >
              {section.content}
            </BasicSection>
          ))}
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          {/* <Features /> */}
          <Testimonials />
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 0rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
