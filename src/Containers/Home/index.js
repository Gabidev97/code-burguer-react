
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'

import { Body, Container, Image, H1, InputLabel, Input, Button } from "../Home/styles"

import Hamburguer from "../../assets/hamburger.svg"





function App() {
  const [users, setUsers] = useState([])

  const pedido = useRef()
  const name= useRef()

  const history = useHistory()

  async function addNewUser() {


   const { data: newUser } = await axios.post("http://localhost:3001/order", { pedido: pedido.current.value , name: name.current.value})



   setUsers([...users, newUser])


   history.push("/pedidos")
  }




  return (
    <Body>
      <Container>
        <Image alt="logo-hamburguer" src={Hamburguer} />

        <H1>Faça seu pedido</H1>


        <InputLabel>Pedido</InputLabel>
        <Input ref={pedido} placeholder="PEDIDO" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={name}  placeholder="NOME DO CLIENTE" />

        <Button onClick={addNewUser}>Novo Pedido</Button>

   

      </Container>
    </Body>
  )
}


export default App