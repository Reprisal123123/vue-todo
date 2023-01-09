import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                // this.todoItems.push(localStorage.key(i));
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state : {
        headerText : 'TODO it!!',
        todoItems: storage.fetch(),
    },

    mutations : {
        addOneItem(state, todoItem) {
            let obj = { completed : false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },

        // 20230109 여기서부터 ㄱㄱ
        removeOneItem(state, payload) {
            state.todoItems.splice(payload.index, 1);
            localStorage.removeItem(payload.todoItem);
        },
    
        toggleOneItem(state, payload) {
            // todoItem.completed = !todoItem.completed;
            // 컴포넌트 간의 관계를 명확하게 하기 위해 App.vue의 data를 직접 수정한다.
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            // 로컬스토리지에는 업데이트 기능이 없어서 지우고 다시 넣어야 함
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
    
        clearAllItems(state) {
            state.todoItems = [];
            localStorage.clear();
        }
    },
});