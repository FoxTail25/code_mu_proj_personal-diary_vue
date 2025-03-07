<script>
import { useDiareStore } from '@/store/diare';

let store

export default {
	data() {
		return {
			data: []
		}
	},
	computed: {
		getRecordDate() {
			return this.data.map(element => {
				return element.data
			});
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
		<li v-for="elem in getRecordDate">{{ elem }}</li>

	</ol>
</template>