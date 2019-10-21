import { api,} from  '../api';
import Router from "../../router";

export default {
    namespaced: true,
    state: {
        user :null,
        profile: null
    },
    getters: {
        username(){
            return localStorage.getItem("userName") || null
        }
    },
    mutations: {
        setUser(state, payload){
            state.user = payload;
        }
    },
    actions: {
        registerUser: async function ({ commit } ,{username, email, password}){
            try{    
                const response = await api.post("/users", {
                    user: {
                        username,
                        email,
                        password
                    }
                });
                if(response.data.user){
                   // setToken(response.data.user.token);
                    commit("setUser", response.data.user);
                    Router.push("/login");
                }
            }
            catch(exception){
                console.error(exception);
                throw exception;
            }
        },
        getUser: async function({ commit }){
            const user = await api.get("/user");
            commit("setUser", user);
        },
        loginUser: async function({ commit } , {email, password}){
            try{    
                const response = await api.post("/users/login", {
                    user: {
                        email,
                        password
                    }
                });
                if(response.data.user){
                    //setToken(response.data.user.token);
                    localStorage.setItem("userName",response.data.user.username);
                    localStorage.setItem("jwtToken",response.data.user.token);
                    commit("setUser", response.data.user);
                    Router.push("/");
                }
            }
            catch(e){
                console.error(e);
                throw e;
            }
        }
    }
}