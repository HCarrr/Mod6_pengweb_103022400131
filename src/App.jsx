import { useState } from 'react'
const nama = 'Huda';
const nilai = 31;
const styleJudul = {
  color: '#1F3A5F',
  fontSize: '30px',
  fonwtWeight: 'bold',
}
const jam = 9;

export default function App() {

  return (
    <div>
      <h1 className="judul" style={styleJudul}>
        Kantin {nama}
      </h1>
      <p>{jam < 12 ? 'Selamat Pagi!' : 'Selamat Siang!'}</p>
      <p>Saldo awal kartu kantin: Rp {nilai*1000}</p>
      {/* <button onClick={() => alert('Terima kasih telah membeli makanan di kantin kami!')}>Beli Makanan</button> */}
      <button disabled="disabled">Beli Makanan</button>
    
    </div>
  )
}
