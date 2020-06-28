<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'

import StatChart from '@components/widget-stat-chart'
import Overview from '@components/overview'
import Member from '@components/member'
import Task from '@components/task'
import Chat from '@components/chat'

import {
	revenueAreaChart,
	targetsBarChart,
	salesDonutChart,
	ordersData,
} from './data'

/**
 * Dashboard-1 Component
 */
export default {
	page: {
		title: 'Dashboard',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		Layout,
	},
	data() {
		return {
			revenueAreaChart: revenueAreaChart,
			targetsBarChart: targetsBarChart,
			salesDonutChart: salesDonutChart,
			ordersData: ordersData,

			maxHeight: '328px',
			overviewData: [
				{
					class: 'border-bottom py-4',
					icon: 'users',
					value: '121,000',
					title: 'Total Visitors',
				},
				{
					class: 'border-bottom py-4',
					icon: 'image',
					value: '21,000',
					title: 'Total Product Views',
				},
				{
					class: 'py-4',
					icon: 'shopping-bag',
					value: '$21.5',
					title: 'Revenue Per Visitor',
				},
			],
			membersData: [
				{
					image: require('@assets/images/users/avatar-7.jpg'),
					text: 'Senior Sales Guy',
					name: 'Meu Appoio N',
				},
				{
					image: require('@assets/images/users/avatar-9.jpg'),
					text: 'Social Media Campaign',
					name: 'Greeva Y',
				},
				{
					image: require('@assets/images/users/avatar-4.jpg'),
					text: 'Inventory Manager',
					name: 'Nik G',
				},
				{
					image: require('@assets/images/users/avatar-1.jpg'),
					text: 'Sales Persons',
					name: 'Hardik G',
				},
				{
					image: require('@assets/images/users/avatar-2.jpg'),
					text: 'Sales Persons',
					name: 'Stive K',
				},
			],
			tasksData: [
				{
					title: 'Draft the new contract document for sales team',
					text: 'Due on 24 Aug, 2019',
					id: 1,
				},
				{
					title: 'iOS App home page',
					text: 'Due on 23 Aug, 2019',
					id: 2,
				},
				{
					title: 'Write a release note for Meu Appoio',
					text: 'Due on 22 Aug, 2019',
					id: 3,
				},
				{
					title: 'Invite Greeva to a project meuAppoio admin',
					text: 'Due on 21 Aug, 2019',
					id: 4,
				},
				{
					title: 'Enable analytics tracking for main website',
					text: 'Due on 20 Aug, 2019',
					id: 5,
				},
				{
					title: 'Invite user to a project',
					text: 'Due on 28 Aug, 2019',
					id: 6,
				},
				{
					title: 'Write a release note',
					text: 'Due on 14 Aug, 2019',
					id: 7,
				},
			],
			statChart: [
				{
					mainTitle: 'today revenue',
					value: 2100,
					subValue: '10.21%',
					chartColor: '#5369f8',
				},
				{
					mainTitle: 'product sold',
					value: 1065,
					subValue: '5.05%',
					chartColor: '#f77e53',
				},
				{
					mainTitle: 'New customers',
					value: 11,
					subValue: '25.16%',
					chartColor: '#43d39e',
				},
				{
					mainTitle: 'new visitors',
					value: 750,
					subValue: '5.05%',
					chartColor: '#ffbe0b',
				},
			],
			chatMessages: [
				{
					id: 1,
					image: require('@assets/images/users/avatar-9.jpg'),
					name: 'Greeva',
					message: 'Hello!',
					time: '10:00',
				},
				{
					id: 2,
					image: require('@assets/images/users/avatar-7.jpg'),
					name: 'Meu Appoio',
					message: 'Hi, How are you? What about our next meeting?',
					time: '10:01',
				},
				{
					id: 3,
					image: require('@assets/images/users/avatar-9.jpg'),
					name: 'Greeva',
					message: 'Yeah everything is fine',
					time: '10:01',
				},
				{
					id: 4,
					image: require('@assets/images/users/avatar-7.jpg'),
					name: 'Meu Appoio',
					message: 'Awesome! let me know if we can talk in 20 min',
					time: '10:02',
				},
			],
			dateConfig: {
				mode: 'range',
			},
			selectedDate: [new Date().setDate(new Date().getDate() - 7), new Date()],
		}
	},
}
</script>

<template>
	<Layout>
		<div class="row page-title align-items-center">
			<div class="col-sm-4 col-xl-6">
				<h4 class="mb-1 mt-0">Dashboard</h4>
			</div>
		</div>
	</Layout>
</template>
