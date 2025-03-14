import express from 'express'
import tvShows from './models/tvshows.json' with { "type": "json" };
import { readFile, writeFile } from "fs/promises";

const app = express();
const port = 80;
app.use(express.json());

  
  
app.get("/api/shows", (req, res) => {
    res.json( tvShows );
});
app.get("/api/shows/:year", (req, res) => {
    const showsByYear = tvShows.find(show=>show.yearCreated==req.params.year);
    console.log(showsByYear);
    res.json( showsByYear );
});
app.delete("/api/shows/:year", (req, res) => {
    const showId = req.params.year;
    const index = tvShows.findIndex(show=>show.yearCreated==showId);
    const updatedShows =tvShows.splice(index , 1 )
    writeFile('./models/tvshows.json', JSON.stringify(tvShows), (err)=>{
      res.status(200).json({
        status : "success",
        data : updatedShows
        
      })
     })
    res.json( updatedShows );
});

app.patch("/api/shows/:show", (req, res)=>{
    const show = req.params.show;
    const starring = req.body;
    console.log(starring);
    
    const showToUpdate = tvShows.find(elmnt => elmnt.tvShow === show);
    let index = tvShows.indexOf(showToUpdate);
    
     Object.assign(showToUpdate, req.body);
     tvShows[index]= showToUpdate;
     writeFile('./models/tvshows.json', JSON.stringify(tvShows), (err)=>{
      res.status(200).json({
        status : "success",
        data : {
          starring: req.body
        }
      })
     })
    res.json({ message: "TV show updated successfully",  showToUpdate});
})

app.listen(port, ()=>console.log('listening on port :'+ port))