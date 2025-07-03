const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Dummy data
const data = [
  { dbName: "Contacts", name: "Contact Info", count: 1 },
  { dbName: "Branches", name: "Branch Offices", count: 23 },
  { dbName: "Industries", name: "Industry Types", count: 7 },
  { dbName: "Solutions", name: "Solution Categories", count: 5 },
  { dbName: "Products", name: "Product Listings", count: 10 },
  { dbName: "Services", name: "Service Offerings", count: 3 }
];

const data2 = [
  { dbName: "Contacts", name: "Contact Info", count: 3 },
  { dbName: "Branches", name: "Branch Offices", count: 23 },
  { dbName: "Industries", name: "Industry Types", count: 6 },
  { dbName: "Solutions", name: "Solution Categories", count: 5 },
  { dbName: "Products", name: "Product Listings", count: 10 },
  { dbName: "Services", name: "Service Offerings", count: 2 }
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
  } else if (id === 1) {
    response.Result = {
      data: data2
    };
  } else if (id === 0) {
    response.Result = {
      data: []
    };
  } else {
    response.ResponseCode = 1;
    response.Message = 'Invalid ID';
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
