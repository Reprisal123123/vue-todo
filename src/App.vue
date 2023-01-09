<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoInput from './components/TodoInput.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'

  export default {
    components : {
      'TodoHeader' : TodoHeader,
      'TodoInput' : TodoInput,
      'TodoList' : TodoList,
      'TodoFooter' : TodoFooter,
    },
    data() {
      return {
        // todoItems: [],
      }
    },

    // created() {
    //   if(localStorage.length > 0) {
    //       for(let i = 0; i < localStorage.length; i++) {
    //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //         // this.todoItems.push(localStorage.key(i));
    //       }
    //   }
    // },

    methods: {
      // addOneItem(todoItem) {
      //   let obj = { completed : false, item: todoItem };
      //   localStorage.setItem(todoItem, JSON.stringify(obj));
      //   this.todoItems.push(obj);
      // },

      // removeOneItem(index, todoItem) {
      //   this.todoItems.splice(index, 1);
      //   localStorage.removeItem(todoItem.item);
      // },

      // toggleOneItem(todoItem, index) {
      //   // todoItem.completed = !todoItem.completed;
      //   // 컴포넌트 간의 관계를 명확하게 하기 위해 App.vue의 data를 직접 수정한다.
      //   this.todoItems[index].completed = !this.todoItems[index].completed;
      //   // 로컬스토리지에는 업데이트 기능이 없어서 지우고 다시 넣어야 함
      //   localStorage.removeItem(todoItem.item);
      //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      // },

      // clearAllItems() {
      //   this.todoItems = [];
      //   localStorage.clear();
      // }
    },

  };

</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.003)
  }
</style>
