import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { useEffect } from 'react'

function App() {
  // Carregamento de dados direto via codigo
  //const item1 = { 
  //  name: 'Rick Sanchez',
  //  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  //}

  //const item2 = {
  //  name: 'Morty Smith',
  //  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  //}

  //const item3 = {
  //  name: 'Summer Smith',
  //  image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  //}

  //const item4 = {
  //  name: 'Beth Smith',
  //  image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  //}

  //const itens = [item1, item2, item3, item4]

    const [itens, setItens] = useState([])

  // Carregamento de dados via API (Backend)
  async function carregarDadosApi() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/'

  // Preparar a requisição
    const response = await fetch(apiUrl)

  // console.log(response)

  const body = await response.json()

  //console.log(body)

    // Extrair a propriedade results do body
    // Essa propriedade contém a lista de itens
    const results = body.results

    console.log(results)
    // Atualiza o estado "itens" com os resultados da API
    setItens(results)
    // Todo: Desafio p/ volta do intervalo:
    // Enviar os "results" para o JSX, exibindo
    // um card para cada item da API
    useEffect(function () {
    // Depois disso, vamos subir o site na nuvem.
    carregarDadosApi()
    } [])

  return (
    <>
    <div className="cards">
      {/* <Card item={item1} />
      <Card item={item2} />
      <Card item={item3} /> */}
      {itens.map((item, i) => <Card item={item} key={i} />)}
    </div>
    </>
  )
}

export default App
