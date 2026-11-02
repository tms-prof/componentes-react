import usestate from "react";
import Acordeon from "./Acordeon";

export default function Sobre() {
    return (
            <main>
              <Acordeon pergunta="O que é React?" resposta="React é uma biblioteca JavaScript para construir interfaces de usuário." />
              <Acordeon pergunta="Qual é a capital do Brasil?" resposta="A capital do Brasil é Brasília."  />
            </main>
    );

}