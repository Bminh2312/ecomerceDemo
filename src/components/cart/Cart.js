import React, { useContext } from 'react'
import { AppContext } from '../../AppProvider'
import { Button, Container, Table } from 'reactstrap'

export default function Cart() {
    const { cart, updateById, deleteCart} = useContext(AppContext)
    return (
        <div>
            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">
                                        {item.id}
                                    </th>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        <Button onClick={()=>updateById(item.id,0)}>-</Button>
                                        <span>{item.quantity}</span>
                                        <Button onClick={()=>updateById(item.id,1)}>+</Button>
                                    </td>
                                    <td>
                                        <Button className='btn btn-danger' onClick={()=>deleteCart(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
