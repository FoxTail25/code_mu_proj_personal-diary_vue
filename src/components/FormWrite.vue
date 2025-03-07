<script>
export default {
	data() {
		return {
			text: "",
		}
	},
	computed() {
		console.log(this.text)
	}
}
</script>




<template>
	<textarea v-model="text" name="textArea" id="ta" placeholder="Оставить запись за текущий день"
		class="my-text-area"></textarea>

	<div class="row justify-content-center">

		<button class="btn btn-primary col-sm-4">Добавить запись в дневник</button>
	</div>
	<p>{{ text }}</p>
</template>



<style scoped>
.my-text-area {
	width: 100%;
}
</style>