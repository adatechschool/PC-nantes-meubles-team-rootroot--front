import React from "react";
import ButtonDesign from "./ButtonDesign";
//Le tableau de l'Administrateur a été crée avec Bootstrap:
import Table from 'react-bootstrap/Table';

//Normalement le design du tableau est fait auto avec la ligne 47
import "./AdminTable.css";

//Ici vous allez trouver le tableau demandé par l'Admin, elle va pouvoir
//modifier ou supprimer des articles selon ses ventes
//ATTENTION: le tableau est fait, il faut faire les appels de la BdD

function AdminTable() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:8000/get_all_data_meuble")
            .then(response => response.json())
            .then(res => setData(res))
            
            .catch(error => console.log(error));    
      }, []);
      
    return (
            //Ici c'est la création du tableau et son style//
        <Table className="table" striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Color</th>
                    <th>Material</th>
                    <th>Picture</th>
                    <th>Dimension</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                </tr>
            </thead>

            <tbody>            
                {data && data.map(meuble => (
                        <tr >
                            <td> {meuble.id} </td>
                            <td> {meuble.category} </td>
                            <td> {meuble.title}</td>
                            <td> {meuble.description} </td>
                            <td> {meuble.price} </td>
                            <td> {meuble.color} </td>
                            <td> {meuble.material} </td>
                            <td> {meuble.picture} </td>
                            <td> {meuble.dimension} </td>
                            <td><ButtonDesign className="boutonadmin" color='secondary' value='modifier'/></td>
                            <td><ButtonDesign className="boutonadmin" color='secondary' value='supprimer'/></td>
                        </tr>
                
                    ))}
            </tbody>
        </Table>
    )
    
}

export default AdminTable;
