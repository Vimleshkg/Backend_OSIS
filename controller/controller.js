const fooddata = require('../model/model');


// get method for radius

const getByRadius = (req, res) => {
   
        const { latitude, longitude, radius } = req.body;

        fooddata.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: radius
                }
            }
        }).then((data)=>{
            const newResData= data.map((dt, ind)=>{
             return {
                    "Name of restaurant" : dt.name,
                    "Description of restaurant":  dt.description,
                    "Restaurant" : [dt.location.coordinates[0],dt.location.coordinates[1]],
                    "Average Rating of the restaurant" : dt.averageRating,
                    "No. of Ratings": dt.numberOfRatings
                }
            });
            
            res.status(200).json(newResData)
           
        })
        .catch( (error)=> {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
       });
   };

  


   //get method for minimum distance , maximum distance range

const getByRadiusRange = (req, res) => {
   
    const { latitude, longitude, minimumDistance, maximumDistance} = req.body;

    fooddata.find({
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [longitude, latitude]
                },
                $minDistance: minimumDistance,
                $maxDistance: maximumDistance
            }  
        }
    }).then((data)=>{
        const newResData= data.map((dt, ind)=>{
         return {
                "Name of restaurant" : dt.name,
                "Description of restaurant":  dt.description,
                "Restaurant" : [dt.location.coordinates[0],dt.location.coordinates[1]],
                "Average Rating of the restaurant" : dt.averageRating,
                "No. of Ratings": dt.numberOfRatings
            } 
        });
        
        res.status(200).json(newResData)
       
    })
    .catch( (error)=> {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
   });
};



module.exports = {getByRadius,getByRadiusRange};
