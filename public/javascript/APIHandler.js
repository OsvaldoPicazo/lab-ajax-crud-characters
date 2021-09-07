class APIHandler {
  constructor (baseUrl="http://localhost:8000") {
    this.BASE_URL = baseUrl;
    this.api = axios.create ({
      baseURL: this.BASE_URL
  })
  }

  getFullList = () => this.api.get("/characters")
 

  getOneRegister = (id)=> this.api.get(`/characters/${id}`) 
  

  createOneRegister  = (bodyWithCharValues)=>this.api.post("/characters", bodyWithCharValues)
  

  updateOneRegister  = (id)=> this.api.put(`/characters/${id}`)
  

  deleteOneRegister = (id)=> this.api.delete(`/characters/${id}`)
  
}

