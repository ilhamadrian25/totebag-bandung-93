import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';
import FaqSection from 'views/PricingPage/FaqSection';

export default function FeaturesPage() {
  return (
    <Page title="Tentang" description="">
      <Wrapper>
        <SectionTitle>Totebag Bandung 93</SectionTitle>
        <span>
          Totebag Bandung 93 adalah brand lokal yang mengusung konsep tote bag berkualitas tinggi dengan desain kekinian dan fungsional. Kami berdiri dengan misi menyediakan tas yang stylish, ramah lingkungan, dan tahan lama untuk mendukung gaya hidup aktif dan sadar lingkungan masyarakat modern. Setiap produk Totebag Bandung 93 dibuat dari bahan pilihan seperti kanvas dan katun yang kuat serta ramah lingkungan. Kami percaya bahwa fashion tidak hanya soal penampilan, tapi juga keberlanjutan. Oleh karena itu, kami mengedepankan proses produksi yang bertanggung jawab dan ramah alam. Berlokasi di kota Bandung, kami menggabungkan sentuhan seni lokal dengan tren desain global untuk menghadirkan tote bag yang unik dan personal. Totebag Bandung 93 cocok untuk kamu yang ingin tampil gaya sambil berkontribusi pada pelestarian lingkungan.
        </span>
        {/* <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid> */}
        <FaqSection />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
