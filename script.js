document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('ver-imoveis')

  botao.addEventListener('click', function () {
    botao.style.backgroundColor = 'blue' // escolha a cor desejada

    document.getElementById('imoveis').scrollIntoView({ behavior: 'smooth' })
  })
})

/* Exibindo imóveis dinamicamente */
const exibicaoImoveis = document.getElementById('exibicao-imoveis');

const residencias = [
  {
    title: "Apartamento Luxuoso no Centro da Cidade",
    description: "Um apartamento moderno com 3 quartos, 2 banheiros, cozinha equipada e varanda com vista panorâmica.",
    price: "R$ 850.000",
    imageUrl: "https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Casa Aconchegante em Bairro Tranquilo",
    description: "Casa com 4 quartos, 3 banheiros, jardim espaçoso e garagem para 2 carros.",
    price: "R$ 1.200.000",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0"
  },
  {
    title: "Casa Aconchegante em Bairro Tranquilo",
    description: "Casa com 4 quartos, 3 banheiros, jardim espaçoso e garagem para 2 carros.",
    price: "R$ 1.200.000",
    imageUrl: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Casa Aconchegante em Bairro Tranquilo",
    description: "Casa com 4 quartos, 3 banheiros, jardim espaçoso e garagem para 2 carros.",
    price: "R$ 1.200.000",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]


residencias.forEach((imovel) =>  {
    const div = document.createElement('div')
    div.className = 'imovel-card p-4 bg-white rounded-lg shadow-md m-4 w-full py-12 mx-auto border-1 border-black/20 hover:shadow hover:shadow-blue-500'

    div.innerHTML = `
        <img src="${imovel.imageUrl}" alt="${imovel.title}" class="w-full h-48 object-cover rounded-t-lg">
        <h2 class="text-xl font-bold mt-2">${imovel.title}</h2>
        <p class="text-gray-700 mt-1">${imovel.description}</p>
        <p class="text-green-600 font-semibold mt-2">${imovel.price}</p>
    `
    exibicaoImoveis.appendChild(div)
})