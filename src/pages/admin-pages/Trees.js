import * as React from "react";
import AdminLayout from "../../components/layout/admin-layout/AdminLayout";
import ItemList from "../../components/ui/ItemList";
import AddItemButton from "../../components/ui/AddItemButton";

function Trees() {
  const DUMMY_DATA = [
    {
      id: "1",
      name: "Apple trees",
      image:
        "https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/10/apple-tree.jpg",
      price: "$25",
      description:
        "These Apple trees are raised outdoors and fed organic fertilizers only",
      quantity: "24",
    },
    {
      id: "2",
      name: "Cherry trees",
      image:
        "https://gardenerspath.com/wp-content/uploads/2019/07/How-to-Grow-and-Care-for-Fruiting-Cherry-Trees-Cover.jpg",
      price: "$27",
      description:
        "National Cherry trees outdoor drown on 1500m elevation with minimum pesticides",
      quantity: "13",
    },
    {
      id: "3",
      name: "Peach trees",
      image:
        "https://www.garden.eco/wp-content/uploads/2018/06/how-to-grow-a-peach-tree.jpg",
      price: "$25",
      description: "Medium sized potatoes, with no additional fertilizers",
      quantity: "37",
    },
    {
      id: "4",
      name: "Olive trees",
      image: "https://www.trees.com/wp-content/uploads/2019/11/olive-tree.jpg",
      price: "$12",
      description: "Round reddish onions that are fertilizer fed",
      quantity: "70",
    },
  ];

  const formData = {
    title: "ADD TREES",
    nameLabel: "Tree Name",
    namePlaceHolder: "Insert tree name",
    quantityLabel: "Available Quantity",
    quantityPlaceHolder: "Insert number of trees",
    priceLabel: "Price per tree",
    pricePlaceHolder: "Insert price per tree",
    pictureLabel: "Tree Picture",
    descriptionLabel: "Description",
    descriptionPlaceHolder: "Insert a brief description",
    buttonLabel: "ADD TREE"
  }

  return (
    <AdminLayout>
      <ItemList items={DUMMY_DATA} />
      <AddItemButton data={formData} />
    </AdminLayout>
  );
}

export default Trees;
