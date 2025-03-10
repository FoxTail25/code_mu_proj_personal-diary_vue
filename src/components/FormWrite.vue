<script>
import { useDiareStore } from '@/store/diare';

let store

export default {

	data() {
		return {
			text: "",
			dateNow: "",
		}
	},

	methods: {
		getData() {
			let data = new Date();
			let year = data.getFullYear();
			let month = (data.getMonth()+1).toString().padStart(2, 0);
			let day = data.getDate().toString().padStart(2, 0);

			return `${day}-${month}-${year}`
		},
		addRecordInDiar() {
			if(this.text.length > 0) {
				let newRecord = {
					data: this.dateNow,
					records: this.text
				};
				store.addRecordInDiare(newRecord);
			} else {
				this.$refs.ta.focus();
			}
			store.setIndLastEditRec('none');
			window.location.href= '#/ListWrites';
		}
	},
	mounted() {
		let date = this.getData();
		this.dateNow = date;
		store = useDiareStore();
		if(store.getIndLastEdirRec == 'none'){
			let nowLastRecordData = store.checkDate(date);
			if (nowLastRecordData) {
				this.text = nowLastRecordData.records;
			}
		} else {
			let record = {...store.getRecord};
			this.text = record.records;
			this.dateNow = record.data;
		}
	}
}
</script>

<template>

	<div class="form-floating mb-4 mx-2">
		<textarea ref="ta" v-model="text" class="form-control p-20" placeholder="Leave a comment here"
			id="floatingTextarea"></textarea>
		<label for="floatingTextarea">{{ dateNow }}</label>
	</div>


	<div class="row justify-content-center">

		<button @click="addRecordInDiar" class="btn btn-primary col-10 col-sm-6 col-md-4 "> {{text.length > 0 ? "Добавить" : "Создать"}} запись в
			дневник</button>
	</div>

</template>



<style scoped>
.my-text-area {
	width: 100%;
}
</style>