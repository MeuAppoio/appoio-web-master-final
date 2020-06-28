import axios from 'axios';

export default {

    show() {
        const user = localStorage.getItem('auth.currentUser')
        const userJSon = JSON.parse(user)
        const user2 = userJSon.id
        axios.get(`api/users/${user2}`).then((resposta) => {
          const user = resposta.data
          this.user = user
        })
        return user
      },
    // show:(user) => {
    // return axios.get(`api/users/${user}`, user)
    // },

    salvar:()=>{
        return ola
    }
}
