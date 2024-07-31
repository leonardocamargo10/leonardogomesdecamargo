const nomes = ["Bruna", "Angelica", "Maria Eduarda", "José", "Amanda", "Lucas", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)