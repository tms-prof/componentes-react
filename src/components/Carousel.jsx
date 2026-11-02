import { useRef } from "react"; // Mudamos para useRef para controlar o scroll nativo

export default function Carousel({ imagens, cols }) {
  const trackRef = useRef(null);

  const moveIndex = (direction) => {
    if (!trackRef.current) return;

    // Pega a largura visível do carrossel na tela
    const trackWidth = trackRef.current.clientWidth;
    
    // Define a direção do pulo (avança o tamanho total visível ou volta)
    const scrollAmount = direction === "next" ? trackWidth : -trackWidth;

    // Faz o scroll horizontal nativo acontecer de forma suave
    trackRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const gridStyle = {
    "--cols-mobile": cols?.mobile || 1,
    "--cols-tablet": cols?.tablet || 2,
    "--cols-desktop": cols?.desktop || 4,
  };

  return (
    <div className="carousel">
      <button className="carousel-button carousel-button-prev" onClick={() => moveIndex("prev")}>‹</button>
      
      {/* O track recebe a ref diretamente e gerencia o overflow */}
      <div className="carousel-track" style={gridStyle} ref={trackRef}>
        {imagens.map((imagem, index) => (
          <div key={index} className="carousel-item">
            <img src={imagem.src} alt={imagem.alt} />
          </div>
        ))}
      </div>
      
      <button className="carousel-button carousel-button-next" onClick={() => moveIndex("next")}>›</button>
    </div>
  );
}
