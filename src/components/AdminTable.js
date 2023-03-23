import React from "react";
import ButtonDesign from "./ButtonDesign";
//Le tableau de l'Administrateur a été crée avec Bootstrap:
import Table from "react-bootstrap/Table";

//Normalement le design du tableau est fait auto avec la ligne 47
import "./AdminTable.css";
import { json } from "react-router-dom";

//Ici vous allez trouver le tableau demandé par l'Admin, elle va pouvoir
//modifier ou supprimer des articles selon ses ventes
//ATTENTION: le tableau est fait, il faut faire les appels de la BdD

function AdminTable() {
  const [data, setData] = React.useState([]);
  const [category, setCategory] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [picture, setPicture] = React.useState("");
  const [dimension, setDimension] = React.useState("");
  const [id, setId] = React.useState(null);

  React.useEffect(() => {
    getMeubles();
  }, []);

  // gets all the meubles this function called twice. Once in the beginning and second time when you delete. it may be againg called when put method will be written
  function getMeubles() {
    fetch("http://127.0.0.1:8000/get_all_card_meuble")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setData(res);
        setCategory(res[0].category);
        setDescription(res[0].description);
        setPicture(res[0].picture);
        setPrice(res[0].price);
        setTitle(res[0].title);
        setId(res[0].id);
      })

      .catch((error) => console.log(error));
  }

  // Deletes the selected meuble
  function deleteMeuble(id) {
    alert(`Are you sure you wanna delete meuble with id ${id}`);
    fetch(`http://127.0.0.1:8000/delete_meuble/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getMeubles();
      });
    });
  }

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