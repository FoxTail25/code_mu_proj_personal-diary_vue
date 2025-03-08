<script>
export default {
	
	data() {
		return {
			text: "",
			dateNow:""
		}
	},
	computed: {
		text2() {
			return  22 + this.text;
		}
	},
	methods:{
		getData(){
			let data = new Date();
			let year = data.getFullYear();
			let month = data.getMonth().toString().padStart(2,0);
			let day = data.getDate().toString().padStart(2, 0);

			return `${day} ${month} ${year}`
		}
	},
	mounted(){
		this.dateNow = this.getData()
	}
}
</script>




<template>
	
	<div class="form-floating mb-4">
		<textarea v-model="text" class="form-control p-20" placeholder="Leave a comment here"
			id="floatingTextarea"></textarea>
		<label for="floatingTextarea">{{dateNow}}</label>
	</div>


	<div class="row justify-content-center w-100">

		<button class="btn btn-primary col-10 col-sm-6 col-md-4 ">Добавить запись в дневник</button>
	</div>
	
</template>



<style scoped>
.my-text-area {
	width: 100%;
}
</style>