import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import UserItemsList from "../../components/ui/UserItemsList";
import api from "../../service/api";

function Adoptions() {
  const [fetchedAdoptions, setFetchedAdoptions] = useState([]);
  const history = useHistory();

  const allAdoptions = () => {
    api
      .getCustomerAdoptions()
      .then((response) => {
        console.log(response);
        setFetchedAdoptions(response.data);
      })
      .catch((error) => {
        console.log(error);
        history.push("/");
      });
  };

  console.log(fetchedAdoptions);

  useEffect(() => {
    allAdoptions();
  }, [history]);

  return (
    <UserLayout>
      <UserItemsList items={fetchedAdoptions} />
    </UserLayout>
  );
}

export default Adoptions;
