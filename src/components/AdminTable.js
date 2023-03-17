import React from "react";

//Le tableau de l'Administrateur a été crée avec Bootstrap:
import Table from 'react-bootstrap/Table';

//Normalement le design du tableau est fait auto avec la ligne 47
import "./AdminTable.css";

//Ici vous allez trouver le tableau demandé par l'Admin, elle va pouvoir
//modifier ou supprimer des articles selon ses ventes
//ATTENTION: le tableau est fait, il faut faire les appels de la BdD

class AdminTable extends React.Component{

    constructor(props){
        super(props);

        //Ici c'est pour faire l'appel de l'API
        this.state = {
            product: [
                {'id':1, 
                'title': 'Table', 
                'description':'Round Coffee Table. 40cm high.', 
                'price':'99€', 
                'color':'Light-Brown', 
                'material':'wood', 
                'picture': 'img src="../assets/brown-table.jpg"',
                'options': 'Modify Delete'
                },

                {'id':2, 
                'title': 'Chair', 
                'description':'Nice chair. 50cm high.', 
                'price':'40€', 
                'color':'Black', 
                'material':'metal', 
                'picture': 'img src="../assets/black-chair.jpg"',
                'options': 'Modify Delete'
                },
            ]
        }
    }

    render(){
        return (
            //Ici c'est la création du tableau et son style//
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Color</th>
                    <th>Material</th>
                    <th>Picture</th>
                    <th>Options</th>
                </tr>
            </thead>

            <tbody>            
                {/* Ici ce sont les appels 'props' */}
                {
                    this.state.AdminTable.map((AdminTable) => 
                        <tr>
                            <td> {AdminTable.id} </td>
                            <td> {AdminTable.title} </td>
                            <td> {AdminTable.description} </td>
                            <td> {AdminTable.price} </td>
                            <td> {AdminTable.color} </td>
                            <td> {AdminTable.material} </td>
                            <td> {AdminTable.picture} </td>
                            <td> {AdminTable.options} </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
        )
    }
}

export default AdminTable;
