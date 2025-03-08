import { defaultDiary } from '@/utils/defaultDiary';
import { localStorageWork } from '@/utils/local_stor';
import { defineStore } from 'pinia';

export const useDiareStore = defineStore('personDaire', {
	state: () => ({ diare: [], name: 'defaultDiare',recordForRead:0 }),
	getters: {
		getData: (state) => state.diare,
		getRecordForRead: (state) => state.diare[state.recordForRead],
	},
	actions: {
		setData(arr, name) {
			this.diare = [...arr];
			this.name = name;
			this.recordForRead = arr.length - 1
		},
		setFirstData() {
			let localData = localStorageWork.getRecord();
			let defData = defaultDiary;

			if (localData) {
				this.setData([...localData], 'localStorData')
			} else {
				this.setData([...defData], 'DefaultData')
				localStorageWork.setRecord([...defData])				
			}			
		},
		setInd(ind){
			this.recordForRead = ind
		}
	},

})

