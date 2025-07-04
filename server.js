const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Dummy data
const data = [
  { DBObjectName: "Contacts",PrimaryKey:"ContactID", Name: "Contact Info", Count: 1 },
  { DBObjectName: "Branches",PrimaryKey:"BranchesID", Name: "Branch Offices", Count: 23 },
  { DBObjectName: "Industries",PrimaryKey:"IndustryID",Name: "Industry Types", Count: 7 },
  { DBObjectName: "Solutions", PrimaryKey:"SolutuinID",Name: "Solution Categories", Count: 5 },
  { DBObjectName: "Products", PrimaryKey:"ProductID", Name: "Product Listings", Count: 10 },
  { DBObjectName: "Services", PrimaryKey:"ServiceID", Name: "Service Offerings", Count: 3 }
];

const data2 = [
  { DBObjectName: "Contacts",PrimaryKey:"ContactID", Name: "Contact Info", Count: 3 },
  { DBObjectName: "Branches",PrimaryKey:"ContactID", Name: "Branch Offices", Count: 23 },
  { DBObjectName: "Industries",PrimaryKey:"ContactID", Name: "Industry Types", Count: 6 },
  { DBObjectName: "Solutions",PrimaryKey:"ContactID", Name: "Solution Categories", Count: 5 },
  { DBObjectName: "Products",PrimaryKey:"ContactID", Name: "Product Listings", Count: 10 },
  { DBObjectName: "Services",PrimaryKey:"ContactID", Name: "Service Offerings", Count: 2 }
];

// Route based on ID
app.get('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);

  let response = {
    ResponseCode: 0,
    Result: {},
    Message: 'Ok'
  };

  if (id === 1) {
    response.Result = {
      data: data
    };
  } else if (id === 2) {
    response.Result = {
      data: data2
    };
  } else if (id === 0) {
    response.Result = {
      data: []
    };
  } else {
    response.ResponseCode = 1;
    response.Message = 'Invalid ID only 1 and 2 are valid';
    response.Result = {};
  }

  res.json(response);
});

app.get('/', (req, res) => {
  res.send("API running. Try /data/1 or /data/2.");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
