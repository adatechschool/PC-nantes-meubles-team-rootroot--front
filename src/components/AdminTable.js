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
    fetch("http://127.0.0.1:8000/get_all_meuble")
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

  // selecting the meuble
  function selectMeuble(id) {
    alert(id);
    console.warn("function select is called", data[id - 1]);
    let item = data[id - 1];
    setId(item.id);
    setCategory(item.category);
    setTitle(item.title);
    setDescription(item.description);
    setPrice(item.price);
    setPicture(item.picture);
  }

  // update meuble
  function updateMeuble() {
    let item = { id, category, title, description, price, picture };
    console.log(item);
    fetch(
      `http://127.0.0.1:8000/put_meuble/${item.id}/category=${item.category}/title=${item.title}/description=${description}/price=${price}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).then((result) => {
      console.log(result);
      result.json().then((resp) => {
        console.warn(resp);
        getMeubles();
      });
    });
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={picture}
          onChange={(e) => {
            setPicture(e.target.value);
          }}
        ></input>
        <button onClick={updateMeuble}>mettre à jour</button>
      </div>

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
          {data &&
            data.map((meuble) => (
              <tr>
                <td> {meuble.id} </td>
                <td> {meuble.category} </td>
                <td> {meuble.title}</td>
                <td> {meuble.description} </td>
                <td> {meuble.price} </td>
                <td> {meuble.color} </td>
                <td> {meuble.material} </td>
                <td> {meuble.picture} </td>
                <td> {meuble.dimension} </td>
                <td>
                  <ButtonDesign
                    //selecting the meuble
                    onClick={() => selectMeuble(meuble.id)}
                    className="boutonadmin"
                    color="secondary"
                    value="modifier"
                  />
                </td>
                <td>
                  <ButtonDesign
                    // adds event listener and on click deletes the meuble accordinng the ID
                    onClick={() => deleteMeuble(meuble.id)}
                    className="boutonadmin"
                    color="secondary"
                    value="supprimer"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminTable;
