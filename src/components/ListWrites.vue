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
	methods:{
		setReadingRecord(ind){
			store.setInd(ind)
		}
	},
	computed: {
		getRecordDate() {
			let arr = this.data.map(element => {
				return element.data
			});
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
			<a href="#/ReadWrite" @click="setReadingRecord(ind)"> {{ elem.data }}</a>
		</li>

	</ol> 
	

</template>

<style scoped>

.details {
	transition: .9s;
}
</style>