
function card({
    nama, harga, kategori = 'Makanan',
    tambah,
    jumlah,
    kurang,
    onTambah,
    onHapus,
    onKurang
}){
    return (
        <div className="card">
            <h3>{nama}</h3>
            <p>Kategori : {kategori}</p>
            <LabelHarga nilai={harga} />
            <div className='control'>
                <button onClick={onKurang} disabled={jumlah === 0}>Kurang</button>
                <span>Jumlah : {jumlah}</span>
                <button onClick={onTambah}>+</button>
            </div>
            {jumlah === 0? (
                <p>Belum Dipesan</p>
            ):(<p>Subtotal: RP{(harga * jumlah).toLocaleString('id-ID')}</p>)}
        </div>  
    );
}
export default card;

