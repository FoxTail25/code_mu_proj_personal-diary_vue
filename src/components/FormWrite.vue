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
	<!-- <textarea v-model="text" name="textArea" id="ta" placeholder="Оставить запись за текущий день"
		class="my-text-area"></textarea> -->

	<div class="form-floating">
		<textarea v-model="text" class="form-control p-20" placeholder="Leave a comment here"
			id="floatingTextarea"></textarea>
		<label for="floatingTextarea">{{dateNow}}</label>
	</div>

	<!-- <div class="m-3">
		<label for="exampleFormControlTextarea1" class="form-label">Добавить запись за текущий день</label>
		<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
	</div> -->


	<div class="row justify-content-center">

		<button class="btn btn-primary col-sm-4">Добавить запись в дневник</button>
	</div>
	<p>{{ text }}</p>
	<p>{{ text2 }}</p>
</template>



<style scoped>
.my-text-area {
	width: 100%;
}
</style>