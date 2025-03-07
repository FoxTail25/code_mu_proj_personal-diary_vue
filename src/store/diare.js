import { defaultDiary } from '@/utils/defaultDiary';
import { localStorageWork } from '@/utils/local_stor';
import { defineStore } from 'pinia';

export const useDiareStore = defineStore('personDaire', {
	state: () => ({ diare: [], name: 'defaultDiare' }),
	getters: {
		getData: (state) => state.diare,
	},
	actions: {
		setData(arr, name) {
			this.diare = [...arr]
			this.name = name
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
		}
	},

})

