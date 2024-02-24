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

  
