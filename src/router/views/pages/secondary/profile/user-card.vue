<script>
import axios from 'axios'

export default {
  mounted() {
    const user = localStorage.getItem('auth.currentUser')
    const userJSon = JSON.parse(user)
    const user2 = userJSon.id

    axios.get(`api/users/${user2}`).then((resposta) => {
      const user = resposta.data
      this.user = user
      console.log(user)
    })
  },
  data() {
    return {
      user: [],
    }
  },
}
</script>
<template>
  <div class="card">
    <div class="card-body">
      <div class="text-center mt-3">
        <img :src="`${user.avatar.url}`" alt class="avatar-lg rounded-circle" />
        <h5 class="mt-2 mb-0"></h5>
        <h6 class="text-muted font-weight-normal mt-2 mb-0">{{user.fullname}}</h6>
        <h6 class="text-muted font-weight-normal mt-1 mb-4">{{user.email}}</h6>
        <h6 class="text-muted font-weight-normal mt-1 mb-4 pro-user-desc">{{user.role}}</h6>

        <div class="progress mb-4" style="height: 14px;">
          <div
            class="progress-bar bg-warning"
            role="progressbar"
            style="width: 60%;"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span class="font-size-12 font-weight-bold">
              Seu Perfil está
              <span class="font-size-11">60%</span> completo
            </span>
          </div>
        </div>

      </div>

      <!-- profile  -->
      <div class="mt-5 pt-2 border-top">
        <h4 class="mb-3 font-size-15">Sobre Mim</h4>
        <p class="text-muted mb-4">{{ user.about }}</p>
      </div>
      <div class="mt-3 pt-2 border-top">
        <h4 class="mb-3 font-size-15">Informações de Contato</h4>
        <div class="table-responsive">
          <table class="table table-borderless mb-0 text-muted">
            <tbody>
              <tr>
                <th scope="row">Email</th>
                <td>{{user.email}}</td>
              </tr>
              <tr>
                <th scope="row">Telefone</th>
                <td>(123) 123 1234</td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td>
                  1975 Boring Lane, San Francisco, California, United States -
                  94108
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mt-3 pt-2 border-top">
        <h4 class="mb-3 font-size-15">Skills</h4>
        <label class="badge badge-soft-primary">UI design</label>
        <label class="badge badge-soft-primary ml-1">UX</label>
        <label class="badge badge-soft-primary ml-1">Sketch</label>
        <label class="badge badge-soft-primary ml-1">Photoshop</label>
        <label class="badge badge-soft-primary ml-1">Frontend</label>
      </div>
    </div>
  </div>
  <!-- end card -->
</template>
