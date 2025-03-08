<script>
import { useDiareStore } from '@/store/diare';

export default {
    data() {
        return {
            readingRecord: ''
        }
    },
    computed: {
        readList(){
            return this.readingRecord.records
        }
    },
    mounted() {
        let store = useDiareStore()
        this.readingRecord = {...store.getRecordForRead}
    }
}
</script>


<template>
    <p>{{ readingRecord.data }}</p>
    <div v-for="(elem, ind) in readList">
        <p>{{ elem.time }}</p>
        <p>{{ elem.text }}</p>
    </div>
</template>

<style scoped></style>