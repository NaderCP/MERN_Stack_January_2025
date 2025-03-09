import express from "express"
// we can create a function to return a random / fake "Product"
import {faker} from "@faker-js/faker";


const app = express();

const port = 80;
app.listen(port, ()=>console.log('listening on port :'+ port))


const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: faker.phone.number({ style: 'national' }),
        lastname: faker.person.lastName(),
        firstname: faker.person.firstName(),
        id: faker.number.int({ min: 10000000, max: 99999999 })
    };
    return newUser;
};
    
const newFakeUser = createUser();

/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

const createCompany = () => {
    const newCompany = {
        id: faker.number.int({ min: 10000000, max: 99999999 }),
        name: faker.company.name(),
        adress: {
            street: faker.location.street(),
            city: faker.location.city() ,
            state:faker.location.state(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country() 
        }
        
    };
    return newCompany;
};
    
const newFakeCompany = createCompany();



app.get("/api/users/new",(req,res)=>{
    res.json(newFakeUser);
})

app.get("/api/companies/new",(req,res)=>{
    res.json(newFakeCompany);
})

app.get("/api/user/company",(req,res)=>{
    const combinedData = [
        { type: "user", data: newFakeUser },
        { type: "company", data: newFakeCompany }
    ];
    
    res.json(combinedData);
})





