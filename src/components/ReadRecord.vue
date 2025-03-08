<script>
import { useDiareStore } from '@/store/diare';

let store

export default {
    data() {
        return {
            readingRecord: '',
            ind:''
        }
    },
    methods:{
        editRecord(){
            store.setIndLastEditRec(this.ind)
            window.location.href = '#/'
        }
    },
    computed: {
        readList() {
            return this.readingRecord.records
        }
    },
    mounted() {
        store = useDiareStore();
        this.readingRecord = { ...store.getRecordForRead };
        this.ind = [...store.getData].findIndex(e=> e.data == this.readingRecord.data)
    }
}
</script>


<template>
    <div class="px-4">

        <p>{{ readingRecord.data }}</p>
            <p  class="px-4">{{ readingRecord.records }}</p>
    </div>
    <div class="row justify-content-center w-100">

<button  class="btn btn-primary col-10 col-sm-6 col-md-4" @click="editRecord" > Редактировать запись</button>
</div>
</template>

<style scoped></style>