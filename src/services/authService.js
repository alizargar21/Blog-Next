const { default: http } = require("./httpServices");

export  function signupApi (data){
          return http.post("/user/signup" , data).then(({data}) => data.data)
}

export  function signinApi (data){
          return http.post("/user/signin" , data).then(({data}) => data.data)
}