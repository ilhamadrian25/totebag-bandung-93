import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';
import ScrollableCatalog from 'views/HomePage/ScrollableCatalog';
import { getAllPosts } from 'utils/postsFetcher';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}


export default function PricingPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page title="Katalog" description="Katalog produk kami.">
      <Wrapper>
        {/* <PricingTablesSection /> */}
        <ScrollableCatalog posts={[]} />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
