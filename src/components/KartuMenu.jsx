
function card({
    nama, harga, kategori = 'Makanan',
    tambah,
    jumlah,
    kurang,
    onTambah,
    onHapus,
    onKurang
}){
    const[catatan, setCatatan] = useState('');
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
            {jumlah > 5 && (
                <span className="badge">Pesanan Banyak</span>
            )}
            <label>Catatam Pesanan{''}
                <input 
                    value={catatan} 
                    onChange={(e) => setCatatan(e.target.value)} 
                />
            </label>
            {catatan!== '' && (
                <p>Catatan: {catatan}</p>
            )}
            <button onClick={onHapus}>Hapus Pesanan</button>
        </div>  
    );
}
export default card;

