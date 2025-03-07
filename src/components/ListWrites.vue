<script>
import { useDiareStore } from '@/store/diare';

let store

export default {
	data() {
		return {
			data: []
		}
	},
	methods:{
		getNum(ind){

		}
	},
	computed: {
		getRecordDate() {
			let arr = this.data.map(element => {
				return element.data
			});
			console.log(arr)
			return arr
		}
	},
	mounted() {
		store = useDiareStore()
		if (this.data.length < 1) {
			if (store.getData.length < 1) {
				store.setFirstData();
				this.data = [...store.getData];
			} else {
				this.data = [...store.getData];
			}
		}
	}
}

</script>

<template>

	<ol>
		<li v-for="(elem, ind) in data" key="ind">
			<details class="details">
				<summary>{{ elem.data }}</summary>
<div v-for="(elem,ind) in elem.records ">
	<p>{{ elem.time }}</p>
	<p>{{ elem.text }}</p>
</div>
				<!-- {{elem.records}} -->
			</details>
		</li>
	</ol>

</template>

<style scoped>

.details {
	transition: .9s;
}
</style>