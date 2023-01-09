<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
        <!-- <button @click="addTodo">add</button> -->
        <span class="addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>

        <!-- use the modal component, pass in the prop -->
        <ModalOne v-if="showModal" @close="showModal = false">
            <template v-slot:header>경고!</template>
            <template v-slot:body>아무것도 입력하지 않으셨습니다</template>
            <template v-slot:footer>닫기 <i class="fas fa-times closeModalBtn" @click="showModal = false"></i></template>
        </ModalOne>
    </div>
</template>

<script>
import ModalOne from './common/ModalOne.vue'
    export default {
        data() {
            return {
                newTodoItem: "",
                showModal : false,
            }
        },

        methods: {
            addTodo() {
                // 값이 있을때만
                if(this.newTodoItem != "") {
                    // this.$emit('addTodoItem', this.newTodoItem);
                    const text = this.newTodoItem.trim();
                    this.$store.commit('addOneItem', text);
                    this.clearInput();
                } else {
                    this.showModal = !this.showModal;
                }
                
            },
            clearInput() {
                this.newTodoItem = "";
            }
        },

        components : {
            ModalOne : ModalOne,
        }

    }

</script>
<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478Fb, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
    .closeModalBtn {
        color: #42b983;
    }
</style>