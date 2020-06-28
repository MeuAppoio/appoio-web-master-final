<script>
import appConfig from '@src/app.config'
import { authComputed } from '@state/helpers'
import Layout from '@layouts/main'

import axios from 'axios'


export default {
	
	page: {
		title: 'Projects List',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: { Layout },
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
			providers:[]
		}
	},
	computed: {
		...authComputed,
	},
	mounted() {
		this.listar()
	},

	methods:{
		listar(){
			axios.get('api/providers/').then((resposta) => {
			const user = resposta.data
			this.providers = user
	  })
		},
		salvar(){
			axios.put('api/users',this.users).then(resposta => {
				alert("Salvo")
			})
			
		}
	}
}
</script>

<template>
	<Layout>
		<div class="row page-title align-items-center">
			<div class="col-md-3 col-xl-6">
				<h4 class="mb-1 mt-0">Profissionais</h4>
			</div>
			<div class="col-md-9 col-xl-6 text-md-right">
				<div class="mt-4 mt-md-0">
					
					<div class="btn-group mb-3 mb-sm-0">
						<button type="button" class="btn btn-primary">Todos</button>
					</div>
					<div class="btn-group ml-1">
						<button type="button" class="btn btn-white">Ongoing</button>
						<button type="button" class="btn btn-white">Finished</button>
					</div>
					<div class="btn-group ml-2 d-none d-sm-inline-block">
						<button type="button" class="btn btn-primary btn-sm">
							<i class="uil uil-apps"></i>
						</button>
					</div>
					<div class="btn-group d-none d-sm-inline-block">
						<button type="button" class="btn btn-white btn-sm">
							<i class="uil uil-align-left-justify"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
			<div
				v-for=" provider in providers "
				:key="provider.id"
				class="col-md-12 col-md-pull-8"
			>
			  <div class="row align-items-center">

			<section class="search-result-item">
				<a class="image-link" href="#">
					<img class="image" 
					:src="`${provider.avatar.url}`">
				</a>
				
				<div class="search-result-item-body">
					<div class="row">
						<div class="col-sm-9">
							<h4 class="search-result-item-heading"><a href="#"></a></h4>
							<h3>{{provider.fullname}}</h3>
							<h5>{{provider.role}}</h5>
							<p class="header"></p>
							<p class="description">{{ provider.about }}</p>
						</div>
						<div class="col-sm-3 text-align-center">
							<p class="value3 mt-sm">R$ {{ provider.price_hour }}</p>
							<p class="fs-mini text-muted">{{ provider.session_time }} - min</p><a class="btn btn-primary btn-info btn-sm" href="#"><feather type="camera"></feather></a>
						</div>
					</div>
				</div>
        	</section><br/>
			  </div>
					<!-- end card -->
		
		
		</div>
		<div class="row mb-3 mt-2">
			<div class="col-12">
				<div class="text-center">
					<a href="javascript:void(0);" class="btn btn-white">
						<feather
							type="loader"
							class="icon-dual icon-xs mr-2 align-middle"
						></feather
						>Load more
					</a>
				</div>
			</div>
			<!-- end col-->
		</div>
		<!-- end row -->
	</Layout>
</template>
