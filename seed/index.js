const Cafe= require('../models/cafes');
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cafes',{useNewUrlParser: true, useUnifiedTopology:true})
.then(data=>{
    console.log("Mongoose is Connected");
})
.catch(()=>{
    console.log("Error Connecting to Mongoose");
})

const ress=async ()=>
{
    await Cafe.deleteMany({});
    const data= new Cafe(
        {cafename : "Sagar gaire",
    cafeowner : "Rajeev Rai",
    cafeaddress:"Platinum Plaza, Bhopal",
    cafedescription : "A famous food unit in Bhopal. Famous for their sandwiches. Owner started with a cycle selling soup and have food chains all over Bhopal now. This place has to lot to offer. Our order: #veg sandwich 🥪 #veg pizza #cold coffee - we wanted to try Oreo shake but picked up wrong order. But you do try Oreo shake. Food was good with apt portions. Service: Self service But you don’t have to wait libg to get your food. Ambience: Normal Like any other franchise unit. They have sitting space. Try the place and add your comments here. Keep reading and liking.",
cafeimage:"https://files.yappe.in/place/full/sagar-gaire-platinum-plaza-10153.webp"}
  
);
    await data.save();

    console.log(data);

    const data2= new Cafe({cafename : "Sharma",
    cafeowner : "Kirti Padhi",cafeaddress:"Platinum Plaza, Bhopal",
    cafedescription : "If you want to try Chinese and Vegetarian cuisines, get your chance and come to this restaurant. At Sharma & Vishnu, guests may order nicely cooked kulcha, paneer and pasta. It's time to try good ice cream. Degust great cold coffee, lemonade or iced coffee. The cool staff at this place can show how much they like their visitors. The fast service is something these restaurateurs care about. You will definitely appreciate the nice atmosphere. This spot scored 4.1 in the Google rating system.",
    cafeimage:"https://files.yappe.in/place/full/sharma-and-vishnu-fast-food-lalghati-1910157.webp"});
    await data2.save();
    console.log(data2);

}

ress().then(()=>{
    mongoose.connection.close();
})