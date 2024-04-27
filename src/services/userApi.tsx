import api from "../utils/api";


const userApi = {
    async loginApi(userName:any, password:any) {
        const res= await api.post("/login", {
            "userName": userName,
            "password": password
        });

        return res.data
    }
};


export{userApi}