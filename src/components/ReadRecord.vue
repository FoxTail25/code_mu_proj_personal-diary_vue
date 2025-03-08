<script>
import { useDiareStore } from '@/store/diare';

let store

export default {
    data() {
        return {
            readingRecord: '',
            ind: ''
        }
    },
    methods: {
        editRecord() {
            store.setIndLastEditRec(this.ind)
            window.location.href = '#/'
        }
    },
    computed: {
        readList() {
            return this.readingRecord.records
        },
        checkDate() {
            let answer = true
            if (this.readingRecord.data) {
                let [day, month, year] = this.readingRecord.data.split('-');
                let recordDate = new Date(Number(year), Number(month) - 1, Number(day));
                let dateNow = new Date();
                let dateDiff = (dateNow - recordDate) / (1000 * 60 * 60 * 24);
                if (dateDiff >= 3) {
                    answer = false
                }
            }
            return answer
        }
    },
    mounted() {
        store = useDiareStore();
        this.readingRecord = { ...store.getRecordForRead };
        this.ind = [...store.getData].findIndex(e => e.data == this.readingRecord.data)
    }
}
</script>


<template>
    <div class="px-4">

        <p>{{ readingRecord.data }}</p>
        <p class="px-4">{{ readingRecord.records }}</p>
    </div>
    <div class="row justify-content-center">

        <button v-if="checkDate" class="btn btn-primary col-10 col-sm-6 col-md-4" @click="editRecord"> Редактировать
            запись</button>
        <p v-else="checkDate" disabled class="btn btn-secondary col-12 col-sm-10 col-md-8">Нельзя редактировать
            запись позже 3 дней</p>
    </div>
</template>

<style scoped></style>