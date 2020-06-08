<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import { activities, messageData, projectData, tasks } from './data-profile'

import axios from 'axios'


/**
 * Profile component
 */
export default {
	page: {
		title: 'Meu Perfil',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		Layout,
		PageHeader,
		
	},
	data() {
		return {
			user:{
				fullname:'',
				email:'',
				password_hash:'',
				provider:'',
				created_at:'',
				updated_at:'',
				avatar_id:'',
				about:'',
				telephone:'',
				role:''

			},
			users:[],
			activities: activities,
			messageData: messageData,
			projectData: projectData,
			tasks: tasks,
			title: 'Meu Perfil',
			items: [
				{
					text: 'Meu Appoio',
					href: '/',
				},
				{
					text: 'Páginas',
					href: '/',
				},
				{
					text: 'Perfil',
					active: true,
				},
			],
		}
	},
	mounted() {
    const user = localStorage.getItem('auth.currentUser')
    const userJSon = JSON.parse(user)
    const user2 = userJSon.id
    axios.get(`api/users/${user2}`).then((resposta) => {
      const user = resposta.data
      this.user = user
	})
	},

	methods:{
		salvar(){
			axios.put('api/users',this.user).then(resposta => {
				alert("Salvo")
			})
			
		}
	}
  }
</script>

<template>
	<Layout>
		<PageHeader :title="title" :items="items" />
			<div class="container">
				<div class="row">
				<!-- left column -->
				<div class="col-md-3">
					<div class="text-center">
					<img
							:src="`${user.avatar.url}`"
							class="avatar-sm rounded-circle mr-2"
							alt="Meu Appoio"
						/>
					<h6>Enviar uma nova foto...</h6>
					
					<input type="file" class="form-control">
					</div>
				</div>
				<!-- edit form column -->
				<div class="col-md-9 personal-info">
					<h3>Informações Pessoais</h3>
					<form class="form-horizontal" role="form"  @submit.prevent="salvar">
					<div class="form-group">
						<label class="col-lg-3 control-label">Nome Completo:</label>
						<div class="col-lg-8">
						<input class="form-control" type="text" value="Jane" v-model="user.fullname">
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-3 control-label">E-mail:</label>
						<div class="col-lg-8">
						<input class="form-control" type="text" value="Bishop" v-model="user.email">
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-3 control-label">Função:</label>
						<div class="col-lg-8">
						<input class="form-control" type="text" value="" v-model="user.role">
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-3 control-label">Telefone:</label>
						<div class="col-lg-8">
						<input class="form-control" type="text" value="" v-model="user.telephone">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">Resumo:</label>
						<div class="col-md-8">
						<textarea class="form-control" 
						type="text-area"
						rows="4"
						value="" v-model="user.about"></textarea>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">Senha:</label>
						<div class="col-md-8">
						<input class="form-control" id="oldPassword" type="password" placeholder="Sua Senha">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">Confirmação de Senha:</label>
						<div class="col-md-8">
						<input class="form-control" id="confirmPassword" type="password" placeholder="Confirme a Senha">
						</div>
					</div>
					<div class="form-group  col py-3 px-md-5 bordered">
						<label class="col-md-3 control-label"></label>
						<div class="col-md-8">
						<input type="submit" class="btn btn-primary" value="Salvar">
						<span> </span>
						<input type="reset" class="btn btn-secondary" value="Cancelar">
						</div>
					</div>
					</form>
				</div>
			</div>
		</div>
		<hr>
	</Layout>
</template>
