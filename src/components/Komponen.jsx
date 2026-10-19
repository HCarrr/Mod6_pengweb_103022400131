
function card({
    nama, harga, kategori = 'Makanan'
}){
    return (
        <div className="card">
            <h3>{props.nama}</h3>
            <p>{props.harga}</p>
            <p>{props.kategori}</p>
        </div>  
    );
}
export default card;