import { defaultDiary } from "@/utils/defaultDiary";
import { localStorageWork } from "@/utils/local_stor";
import { defineStore } from "pinia";

export const useDiareStore = defineStore("personDaire", {
  state: () => ({
    diare: [],
    name: "defaultDiare",
    recordForRead: 0,
    indLastEditRec: "none",
  }),
  getters: {
    getData: (state) => state.diare,
    getRecordForRead: (state) => state.diare[state.recordForRead],
    getIndLastEdirRec: (state) => state.indLastEditRec,
    getRecord: (state) => state.diare[state.indLastEditRec],
  },
  actions: {
    setData(arr, name) {
      this.diare = [...arr];
      this.name = name;
      this.recordForRead = arr.length - 1;
    },
    setFirstData() {
      let localData = localStorageWork.getRecord();
      let defData = defaultDiary;

      if (localData) {
        this.setData([...localData], "localStorData");
      } else {
        this.setData([...defData], "DefaultData");
        localStorageWork.setRecord([...defData]);
      }
    },
    setInd(ind) {
      this.recordForRead = ind;
    },
    setIndLastEditRec(ind) {
      this.indLastEditRec = ind;
    },
    addRecordInDiare(obj) {
      let data = obj.data;
      let oldRecord = this.diare.findIndex(function (elem) {
        return elem.data == data;
      });
      if (oldRecord < 0) {
        this.diare.push(obj);
      } else {
        this.diare[oldRecord] = { ...obj };
      }
      localStorageWork.setRecord(this.diare);
    },
    checkDate(date) {
      let answer = this.diare.find((e) => e.data == date);
      return answer ? answer : false;
    },
  },
});
