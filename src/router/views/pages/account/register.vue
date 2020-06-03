<script>
import Layout from '@layouts/default'
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'

/**
 * Register component
 */
export default {
	page: {
		title: 'Cadastro',
		meta: [{ name: 'description', content: `Register to ${appConfig.title}` }],
	},
	components: { Layout },
	data() {
		return {
			user:{
				fullname: '',
				email: '',
				password: '',
				regError: null,
				tryingToRegister: false,
				isRegisterError: false,
			}

		}
	},
	computed: {},
	methods: {
		...authMethods,
		// Try to register the user in with the email, fullname
		// and password they provided.
		tryToRegisterIn() {
			this.tryingToRegister = true
			// Reset the regError if it existed.
			this.regError = null
			return this.register({
				fullname: this.user.fullname,
				email: this.user.email,
				password: this.user.password,
			})
				.then((token) => {
					this.tryingToRegister = false
					this.isRegisterError = false
					// Redirect to the originally requested page, or to the confirm-account page
					this.$router.push(
						this.$route.query.redirectFrom || { name: 'confirm-account' }
					)
				})
				.catch((error) => {
					this.tryingToRegister = false
					this.regError = error.response ? error.response.data.message : ''
					this.isRegisterError = true
				})
		},
	},
}
</script>

<template>
	<Layout>
		<div class="account-pages my-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-10">
						<div class="card">
							<div class="card-body p-0">
								<div class="row">
									<div class="col-lg-6 p-5">
										<div class="mx-auto mb-5">
											<a href="/">
												<img src="@assets/images/logo.png" alt height="24" />
												<h3 class="d-inline align-middle ml-1 text-logo"
													>Meu Appoio</h3
												>
											</a>
										</div>

										<h6 class="h5 mb-0 mt-4">Crie sua conta</h6>
										<p class="text-muted mt-0 mb-4"
											>Crie uma conta para ter acesso a nossa plataforma</p
										>

										<form @submit.prevent="tryToRegisterIn" class="authentication-form">
											<div class="form-group">
												<label class="form-control-label">Nome</label>
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather type="user" class="icon-dual"></feather>
														</span>
													</div>
													<input
														id="fullname"
														v-model="user.fullname"
														type="text"
														class="form-control"
														placeholder="Informe seu nome"
														required
													/>
												</div>
											</div>

											<div class="form-group">
												<label class="form-control-label">E-mail</label>
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather type="mail" class="icon-dual"></feather>
														</span>
													</div>
													<input
														id="email"
														v-model="user.email"
														type="email"
														class="form-control"
														placeholder="email@exemplo.com.br"
													/>
												</div>
											</div>

											<div class="form-group">
												<label class="form-control-label">Senha</label>
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather type="lock" class="icon-dual"></feather>
														</span>
													</div>
													<input
														id="password"
														v-model="user.password"
														type="password"
														class="form-control"
														placeholder="Informe sua senha"
													/>
												</div>
											</div>

											<div class="form-group mb-4">
												<div class="custom-control custom-checkbox">
													<input
														id="checkbox-signup"
														type="checkbox"
														class="custom-control-input"
														checked
													/>
													<label
														class="custom-control-label"
														for="checkbox-signup"
													>
														Eu aceito os
														<a href="javascript: void(0);"
															>Termos e Condições</a
														>
													</label>
												</div>
											</div>

											<div class="form-group mb-0 text-center">
												<button class="btn btn-primary btn-block" type="submit"
													>Cadastrar</button
												>
											</div>
										</form>
									</div>

									<div class="col-lg-6 d-none d-md-inline-block">

										<div class="auth-page-sidebar">
											<img src="@assets/images/register-banner.jpg" alt width="100%" height="100%" />
											<div class="overlay"></div>
											<div class="auth-user-testimonial">
<!--												<p class="font-size-24 font-weight-bold text-white mb-1"-->
<!--													>I simply love it!</p-->
<!--												>-->
<!--												<p class="lead"-->
<!--													>"It's a elegent templete. I love it very much!"</p-->
<!--												>-->
<!--												<p>- Admin User</p>-->
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- end card-body -->
						</div>
						<!-- end card -->

						<div class="row mt-3">
							<div class="col-12 text-center">
								<p class="text-muted">
									Já possui uma conta?
									<router-link
										tag="a"
										to="/login"
										class="text-primary font-weight-bold ml-1"
										>Entrar</router-link
									>
								</p>
							</div>
							<!-- end col -->
						</div>
						<!-- end row -->
					</div>
					<!-- end col -->
				</div>
				<!-- end row -->
			</div>
			<!-- end container -->
		</div>
	</Layout>
</template>

<style lang="scss" module></style>
