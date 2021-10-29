import * as React from "react";
import AddItemButton from "../../components/ui/AddItemButton";
import ItemList from "../../components/ui/ItemList";
import AdminLayout from "../../components/layout/admin-layout/AdminLayout";

function Vegetables() {
  const DUMMY_DATA = [
    {
      id: "1",
      name: "Cucumbers",
      image:
        "https://cdn.plantssparkjoy.com/wp-content/uploads/2021/09/02071046/growing-cucumbers-with-plants-spark-joy.jpeg",
      price: "$12",
      description:
        "These Cucumbers are raised outdoors and fed organic fertilizers only",
      quantity: "50kg",
    },
    {
      id: "2",
      name: "Tomatoes",
      image:
        "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
      price: "$15",
      description:
        "National tomatoes outdoor drown on 1500m elevation with minimum pesticides",
      quantity: "41kg",
    },
    {
      id: "3",
      name: "Potatoes",
      image:
        "https://www.vanmeuwen.com/static-images/master/static-images/how-to-grow-potatoes/how-to-plant-grow-potatoes.jpg",
      price: "$10",
      description: "Medium sized potatoes, with no additional fertilizers",
      quantity: "90kg",
    },
    {
      id: "4",
      name: "Onions",
      image:
        "https://jainsusa.com/wp-content/uploads/2015/02/5tips_to_grow_great_onions.jpg",
      price: "$12",
      description: "Round reddish onions that are fertilizer fed",
      quantity: "70",
    },
  ];

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
      <ItemList items={DUMMY_DATA} />
      <AddItemButton data={formData} />
    </AdminLayout>
  );
}

export default Vegetables;
