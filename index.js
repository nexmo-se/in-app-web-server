
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.post("/answer", (req, res) => { 
  const { to } = req.body;

  if(to === process.env.NEXMO_NUMBER){
    res.status(200).json([]);
  }else{
    const payload = [{
      action: "connect", timeout: "30", from: process.env.NEXMO_NUMBER, 
      endpoint: [{ type: "phone", number: `${to}` }]
    }]
    res.status(200).json(payload);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
