const express = require("express");
const db = require("./db.js");
const cors = require("cors");
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static("images"));
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
// Route to get all posts
app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM client_requests", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});
// Route to get one post

app.get("/api/getFromId/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM client_requests WHERE id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});
app.get("/api/getImageFromId/:id", (req, res) => {
    const id = req.params.id;
    db.query(
      "SELECT name FROM images WHERE id = ?",
      id,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  });
// Route for creating the post
app.post("/api/create", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const request = req.body.request;
  console.log(id, name, request);
  db.query(
    "INSERT INTO client_requests (id, name, request) VALUES (?,?,?)",
    [id, name, request],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

// Route to delete a post
app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM client_requests WHERE id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/api/update", async (req, res) => {
  try {
    const query = {description: req.body.description};
    await Product.findByIdAndUpdate(req.body.description);
    const messageResponse = {
      message: "Message"+ req.body._id + "updated correctly",
    };
    req.send(JSON.stringify(messageResponse));
  }
  catch(err) {
    console.log("Error whilst updating :" + req.body._id);
  }
}); 
