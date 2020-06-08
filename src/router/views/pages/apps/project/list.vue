<script>
import appConfig from '@src/app.config'
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
			users:[],
			page: 1,
    		perPage: 9,
    		pages: [],
		}
	},
	mounted() {
		this.listar()
	},

	methods:{
		setPages () {
			let numberOfPages = Math.ceil(this.users.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (users) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  users.slice(from, to);
		},
		 created () {
			this.listar();
		},
		watch: {
			users () {
			this.setPages();
			}
  		},
		listar(){
			axios.get('api/users/').then((resposta) => {
			const json = resposta.data
			const user = JSON.stringify(json)
			this.users = user
			console.log(user)
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
				<h4 class="mb-1 mt-0">Projects</h4>
			</div>
			<div class="col-md-9 col-xl-6 text-md-right">
				<div class="mt-4 mt-md-0">
					<button type="button" class="btn btn-danger mr-4 mb-3 mb-sm-0">
						<i class="uil-plus mr-1"></i> Create Project
					</button>
					<div class="btn-group mb-3 mb-sm-0">
						<button type="button" class="btn btn-primary">All</button>
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

		<div class="row">
			<div
				v-for=" professional in users "
				:key="professional.id"
				class="col-md-12 col-md-pull-8"
			>
			<section class="search-result-item">
				<a class="image-link" href="#"><img class="image" src="https://bootdey.com/img/Content/avatar/avatar1.png">
				</a>
				<div class="search-result-item-body">
					<div class="row">
						<div class="col-sm-9">
							<h4 class="search-result-item-heading"><a href="#"></a></h4>
							<p class="info">New York, NY 20188</p>
							<p class="header"></p>
							<p class="description">Not just usual Metro. But something bigger. Not just usual widgets, but real widgets. Not just yet another admin template, but next generation admin template.</p>
						</div>
						<div class="col-sm-3 text-align-center">
							<p class="value3 mt-sm">$9, 700</p>
							<p class="fs-mini text-muted">PER WEEK</p><a class="btn btn-primary btn-info btn-sm" href="#">Learn More</a>
						</div>
					</div>
				</div>
        </section><br/>
					<!-- end card -->
			</div>
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
