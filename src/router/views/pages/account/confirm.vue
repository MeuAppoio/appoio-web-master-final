<script>
import Layout from '@layouts/default'
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'
export default {
  page: {
    title: 'Confirm',
    meta: [
      { name: 'description', content: `Confirm account to ${appConfig.title}` },
    ],
  },
  components: { Layout },
  data() {
    return {}
  },
  computed: {},
  methods: {
    ...authMethods,
  },
}
</script>

<template>
  <Layout>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-pattern">
          <div class="card-body p-4">
            <div class="text-center w-75 m-auto">
              <a href="/"> </a>
            </div>

            <div class="mt-3 text-center">
              <h3>Sua conta foi criada com sucesso</h3>
              <p class="text-muted mt-2">
                Um email de confirmação foi enviado para seu e-mail cadastrado

              </p>

              <router-link
                tag="a"
                to="/login"
                class="btn btn-block btn-primary waves-effect waves-light mt-3"
                >Entrar</router-link
              >
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>

<style lang="scss" module></style>
