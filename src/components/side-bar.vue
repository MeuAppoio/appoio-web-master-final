<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { authComputed } from '@state/helpers'
import Appmenu from './app-menu'
import axios from 'axios'

export default {
    components: { VuePerfectScrollbar, Appmenu },
	props: {
		isCondensed: {
			type: Boolean,
			default: false,
		},
		theme: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		width: { type: String, required: true },
		
	},
	data() {
		return {
		user: [],
		settings: {
					minScrollbarLength: 60,
				},
		}
	},
	computed: {
		...authComputed,
	},
	watch: {
		theme: function(newVal, oldVal) {
			if (newVal !== oldVal) {
				switch (newVal) {
					case 'dark':
						document.body.classList.add('left-side-menu-dark')
						document.body.classList.remove('left-side-menu-condensed')
						document.body.classList.remove('boxed-layout')
						break
					default:
						document.body.classList.remove('left-side-menu-dark')
						break
				}
			}
		},
		type: function(newVal, oldVal) {
			if (newVal !== oldVal) {
				switch (newVal) {
					case 'condensed':
						document.body.classList.add('left-side-menu-condensed')
						document.body.classList.remove('left-side-menu-dark')
						document.body.classList.remove('boxed-layout')
						break
					default:
						document.body.classList.remove('left-side-menu-condensed')
						break
				}
			}
		},
		width: function(newVal, oldVal) {
			if (newVal !== oldVal) {
				switch (newVal) {
					case 'boxed':
						document.body.classList.add('left-side-menu-condensed')
						document.body.classList.remove('left-side-menu-dark')
						document.body.classList.add('boxed-layout')
						break
					default:
						document.body.classList.remove('left-side-menu-condensed')
						document.body.classList.remove('boxed-layout')
						break
				}
			}
		},
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
}
</script>
<template>
	<!-- ========== Left Sidebar Start ========== -->
	<div class="left-side-menu">
		<div class="media user-profile mt-2 mb-2">
			<img
				:src="`${user.avatar.url}`"
				class="avatar-sm rounded-circle mr-2"
				alt="Meu Appoio"
			/>
			<img
				:src="`${user.avatar.url}`"
				class="avatar-xs rounded-circle mr-2"
				alt="Meu Appoio"
			/>

			<div class="media-body">
				<h6 class="pro-user-name mt-0 mb-0">{{ user.fullname }}</h6>
				<span class="pro-user-desc">{{ user.role }}</span>
			</div>
			<b-dropdown variant="black" class="align-self-center" toggle-class="p-0">
				<template v-slot:button-content>
					<feather type="chevron-down" class="align-middle"></feather>
				</template>

				<b-dropdown-item href="/pages/profile" class="notify-item">
					<feather
						type="user"
						class="icon-dual icon-xs mr-2 align-middle"
					></feather>
					<span>Minha Conta</span>
				</b-dropdown-item>

				<b-dropdown-item href="javascript:void(0);" class="notify-item">
					<feather
						type="settings"
						class="icon-dual icon-xs mr-2 align-middle"
					></feather>
					<span>Configurações</span>
				</b-dropdown-item>

				<b-dropdown-item href="javascript:void(0);" class="notify-item">
					<feather
						type="help-circle"
						class="icon-dual icon-xs mr-2 align-middle"
					></feather>
					<span>Support</span>
				</b-dropdown-item>

				<b-dropdown-item href="javascript: void(0);" class="notify-item">
					<feather
						type="lock"
						class="icon-dual icon-xs mr-2 align-middle"
					></feather>
					<span>Bloquear Tela</span>
				</b-dropdown-item>

				<b-dropdown-divider></b-dropdown-divider>

				<b-dropdown-item href="/logout" class="notify-item">
					<feather
						type="log-out"
						class="icon-dual icon-xs mr-2 align-middle"
					></feather>
					<span>Sair</span>
				</b-dropdown-item>
			</b-dropdown>
		</div>

		<div class="sidebar-content">
			<VuePerfectScrollbar
				v-if="!isCondensed"
				v-once
				class="slimscroll-menu"
				:settings="settings"
			>
				<div id="sidebar-menu">
					<Appmenu />
				</div>
			</VuePerfectScrollbar>
			<div v-else id="sidebar-menu">
				<Appmenu />
			</div>
		</div>
		<!-- Sidebar -left -->
	</div>
	<!-- Left Sidebar End -->
</template>

<style lang="scss">
.slimscroll-menu {
	height: 100%;
}
.ps > .ps__scrollbar-y-rail {
	width: 8px !important;
	background-color: transparent !important;
}
.ps > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:active > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y {
	width: 6px !important;
}
</style>
