"# Backend_OSOS" 
After downloading this file, We have to setup this file-
- run npm install command on terminal (for setup node_modules folder)
- after that start server using nodemon index
- after that open postman and perform api request (get, post etc..)
      POST - http://localhost:8081/login ( in body enter json format data ex- {"username":"xyz", "email":"xyz@gmail.com"}, after that we will get token' )      // for authorization
      GET -  http://localhost:8081/user ( in header at place of key write Authorization and on value write bearer then space and paste  token )                 // for authentication,  after that below request will be executed properly otherwise we will get error
      GET -  http://localhost:8081/byRadius (in this we have to enter json data in body ex- { "latitude": 17.343242, "longitude": 78.342343, "radius":500} )
      GET -  http://localhost:8081/byRadiusRange (in this we have to enter json data in body ex- { "latitude": 17.343242, "longitude": 78.342343, "minimumDistance":500, "maximumDistance":1000, } )


  #IMAGES

  <img width="960" alt="Screenshot 2024-02-24 231814" src="https://github.com/Vimleshkg/Backend_OSIS/assets/125298546/8e6e8c2c-b13f-4e07-ba1f-18c6de27708f">


<img width="960" alt="Screenshot 2024-02-24 232003" src="https://github.com/Vimleshkg/Backend_OSIS/assets/125298546/8490559e-e950-4b16-a95b-e9af7d559ceb">

<img width="960" alt="Screenshot 2024-02-24 232054" src="https://github.com/Vimleshkg/Backend_OSIS/assets/125298546/187de5a7-9932-4e5c-af21-aec2eae9a9f5">

<img width="960" alt="Screenshot 2024-02-24 232140" src="https://github.com/Vimleshkg/Backend_OSIS/assets/125298546/bab046ac-5356-4129-9b84-71e78d67de49">
