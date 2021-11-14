import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CustomersList from "../../components/admin-components/dashboard/CustomersList";
import PieChart from "../../components/admin-components/dashboard/PieChart";
import TotalCard from "../../components/admin-components/dashboard/TotalCard";
import AdminLayout from "../../components/layout/admin-layout/AdminLayout";
import api from "../../service/api";

const treesNumbersData = {
  title: "Total",
  total: "198",
  subtitle: "Trees",
  body: "Total number of trees adopted",
};
const treesEarningsData = {
  title: "Total",
  total: "500",
  subtitle: "USD",
  body: "Total earnings of trees adopted",
};
const VegetablesNumbersData = {
  title: "Total",
  total: "95",
  subtitle: "Boxes",
  body: "Total number of boxes ordered",
};
const VegetablesEarningsData = {
  title: "Total",
  total: "245",
  subtitle: "USD",
  body: "Total earnings of boxes ordered",
};

const treesChartData = {
  chartData: [
    ["Trees", "Adoptions"],
    ["Plum", 23],
    ["Kiwi", 15],
    ["Pomegranate", 50],
    ["Olive", 35],
    ["Orange", 45],
    ["lemon", 35],
  ],
  title: "My trees adoptions",
};

const vegetablesChartData = {
  chartData: [
    ["Vegetables", "Boxes"],
    ["Broccoli", 25],
    ["Radish", 45],
    ["Carrots", 13],
    ["Eggplants", 7],
    ["Cabbage", 17],
    ["Lettuce", 18],
  ],
  title: "My vegetables adoptions",
};

function Dashboard() {
  const [fetchedCustomers, setFetchedCustomers] = useState([]);
  const history = useHistory();

  const allCustomers = () => {
    api
      .getCustomers()
      .then((response) => {
        console.log(response);
        setFetchedCustomers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(fetchedCustomers);
  };

  useEffect(() => {
    allCustomers();
  }, [history]);

  return (
    <AdminLayout>
      <Grid container spacing={3}>
        <Grid item container xs={12} md={6} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Trees Statistics</Typography>
          </Grid>
          <TotalCard data={treesNumbersData} />
          <TotalCard data={treesEarningsData} />
          <PieChart data={treesChartData} />
        </Grid>

        <Grid item container xs={12} md={6} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Vegetables Statistics</Typography>
          </Grid>
          <TotalCard data={VegetablesNumbersData} />
          <TotalCard data={VegetablesEarningsData} />
          <PieChart data={vegetablesChartData} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5">Customers</Typography>
          <CustomersList customers={fetchedCustomers} />
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

export default Dashboard;
