import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Pertanyaan yang sering ditanyakan</SectionTitle>
      <Accordion title="Apa bahan utama tote bag yang kalian jual?">
        Kami menggunakan bahan berkualitas seperti katun, kanvas, dan bahan ramah lingkungan yang tahan lama dan nyaman digunakan sehari-hari.
      </Accordion>
      <Accordion title="Apakah tote bag ini cocok untuk penggunaan sehari-hari?">
        Ya, tote bag kami dirancang untuk tahan lama dan nyaman dipakai, cocok untuk belanja, kuliah, kerja, atau jalan-jalan.
      </Accordion>
      <Accordion title="Apakah tote bag bisa dicuci?">
        Tentu! Tote bag kami bisa dicuci dengan tangan atau mesin cuci pada suhu rendah agar warna dan bentuk tetap awet.
      </Accordion>
      <Accordion title="Apakah kalian menerima custom desain untuk tote bag?">
        Ya, kami menyediakan layanan custom desain sesuai permintaan pelanggan. Silakan hubungi customer service kami untuk informasi lebih lanjut.
      </Accordion>
      <Accordion title="Berapa lama waktu pengiriman pesanan?">
        Waktu pengiriman biasanya 3-7 hari kerja tergantung lokasi dan metode pengiriman yang dipilih.
      </Accordion>
      <Accordion title="Apakah ada garansi jika tote bag rusak saat diterima?">
        Kami memberikan garansi penggantian jika produk rusak saat pengiriman. Harap segera hubungi kami dengan foto bukti kerusakan.
      </Accordion>
      <Accordion title="Bagaimana cara melakukan pembayaran?">
        Kami menerima pembayaran melalui transfer bank, e-wallet, dan pembayaran online lainnya yang kami sediakan di website.
      </Accordion>
      <Accordion title="Apakah ada diskon untuk pembelian dalam jumlah besar?">
        Ya, kami menyediakan harga khusus dan diskon menarik untuk pembelian grosir atau dalam jumlah banyak.
      </Accordion>
      <Accordion title="Apakah produk kalian ramah lingkungan?">
        Kami berkomitmen menggunakan bahan yang ramah lingkungan dan proses produksi yang bertanggung jawab terhadap lingkungan.
      </Accordion>
      <Accordion title="Bagaimana cara menghubungi customer service?">
        Anda bisa menghubungi kami melalui email, telepon, atau live chat di website resmi kami.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
