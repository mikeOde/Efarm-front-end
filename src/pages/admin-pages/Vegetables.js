import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AddItemButton from "../../components/ui/AddItemButton";
import ItemList from "../../components/ui/ItemList";
import AdminLayout from "../../components/layout/admin-layout/AdminLayout";
import api from "../../service/api";

function Vegetables() {
  const history = useHistory();
  const [fetchedVegetables, setFetchedVegetables] = useState([]);
  const allVegetables = () => {
    api
      .getFarmerVegetables()
      .then((response) => {
        console.log(response);
        setFetchedVegetables(response.data);
      })
      .catch((error) => {
        console.log(error);
        history.push("/");
        window.location.reload();
      });
  };
  useEffect(() => {
    allVegetables();
  }, []);
  console.log(fetchedVegetables);

  const formData = {
    title: "ADD VEGETABLES",
    nameLabel: "Vegetable Name",
    namePlaceHolder: "Insert vegetable name",
    quantityLabel: "Box Weight",
    quantityPlaceHolder: "Insert vegetable weight per box",
    priceLabel: "Price per Kg",
    pricePlaceHolder: "Insert price per box",
    pictureLabel: "Vegetable Picture",
    descriptionLabel: "Description",
    descriptionPlaceHolder: "Insert a brief description",
    buttonLabel: "ADD VEGETABLE",
  };

  return (
    <AdminLayout>
      <ItemList items={fetchedVegetables} />
      <AddItemButton data={formData} />
    </AdminLayout>
  );
}

export default Vegetables;
