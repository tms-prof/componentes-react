
export default function Galeria({rows, columns, arrayImages}) {  
    return (
            <div className="galeria-grid" style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
                {arrayImages.map((img, index) => (
                    <img key={index} src={img.src} alt={`Imagem ${img.alt}`} />
                ))}
            </div>
          
    );
}