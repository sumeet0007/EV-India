const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser")
const PORT = 8080;

app.use(cors())
app.use(bodyParser())
// Replace the body-parser middleware with express.json() and express.urlencoded()
app.use(express.json()); // For parsing JSON request bodies
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded request bodies

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log("Db connected");
}

const dealerSchema = new mongoose.Schema({
    Name : String,
    mobile : Number,
    email : String,
    Address : String,
    logoImg : String,
    bannerImg : String
  });

const brandSchema = new mongoose.Schema({
     title : String,
     Address : String,
     logoImg : String,
     bannerImg : String,
     googleMapUrl : String,
     email : String,
     mobile : Number
  });

const dealerVehiclesSchema = new mongoose.Schema({
  dealerId : String,
  brandId : String,
  vehicleId : String
})

const Dealers = mongoose.model('Dealer', dealerSchema);
const Brands = mongoose.model('Brands', brandSchema);
const DealerVehicles = mongoose.model('DealerVehicle', dealerVehiclesSchema);

//add dealers, brands etc...

app.post("/api/addDealers", async(req, res)=>{
  let dealer = new Dealers();
  dealer.Name = req.body.Name
  dealer.mobile = req.body.mobile
  dealer.email = req.body.email
  dealer.Address = req.body.Address
  dealer.logoImg = req.body.logoImg
  dealer.bannerImg = req.body.bannerImg

  const uploadDealer = await dealer.save();
  console.log(uploadDealer);

  res.json(uploadDealer)

})

app.post("/api/addBrands", async(req, res)=>{

  try{
    let brand = new Brands();
    brand.title =req.body.Name,
    brand.Address =req.body.Address,
    brand.logoImg =req.body.logoImg,
    brand.bannerImg =req.body.bannerImg,
    brand.googleMapUrl =req.body.googleMapUrl,
    brand.email =req.body.email,
    brand.mobile = req.body.mobile
  
    const uploadBrand = await brand.save();
    console.log(uploadBrand);
  
    res.json(uploadBrand)
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Unable to save data" });
  }


})

app.post("/api/addDealerVehicles", async (req, res) => {
  try {
    const dealerVehicles = new DealerVehicles({
      dealerId: req.body.dealerId,
      brandId: req.body.brandId,
      vehicleId: req.body.vehicleId
    });

    const savedDealerVehicle = await dealerVehicles.save();

    console.log("Saved Dealer Vehicle:", savedDealerVehicle);

    res.json(savedDealerVehicle);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Unable to save data" });
  }
});

app.get("/api/allBrands", async(req, res)=>{
  try {
    const allData = await Brands.find({});
    console.log(allData);
    res.json(allData)
  }catch (error){
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Unable to get data" });
  }
})

app.get('/api/brands/:id', async (req, res) => {
  try {
    const brandId = req.params.id;

    // Use Mongoose's findById() method to find the brand by ID
    const brand = await Brands.findById(brandId);

    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }

    // Return the brand details
    res.json(brand);
  } catch (error) {
    console.error('Error retrieving brand:', error);
    res.status(500).json({ error: 'Unable to retrieve brand details' });
  }
});




app.listen(PORT, ()=>{
    console.log(`server has started on ${PORT}`)
});