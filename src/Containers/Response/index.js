
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

import { Body, Container, Image, Button, User, H1 } from "./styles"

import CarryBag from "../../assets/pacote.svg"
import Trash from "../../assets/trash.svg"





function Response() {
  const [users, setUsers] = useState([])

  const history = useHistory()



  useEffect(() => {

    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/order")
      setUsers(newUsers)
    }

    fetchUsers()

  }, [])




  async function deleteUser(userId) {

    await axios.delete(`http://localhost:3001/order/${userId}`)

    const newUser = users.filter(user => user.id !== userId)
    setUsers(newUser)
  }


  function goBackPage() {
    history.push("/")
  }

  return (
    <Body>
      <Container>

        <Image alt="logo-hamburguer" src={CarryBag} />

        <H1>Pedidos</H1>


        <ul>
          {users.map((user) => (
            <User key={user.id}>
             <div className="inputResponse">
              <div className="request"><p>{user.pedido}</p></div>

              <div><p>{user.name}</p></div>
              </div>

              <button onClick={() => deleteUser(user.id)}><img alt="lixeira" src={Trash} /></button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>

      </Container>
    </Body>
  )
}


export default Response