<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in this.storedTodoItems" :key="index" class="shadow">
                <i class="checkBtn fas fa-check" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete({todoItem, index})"></i>
                <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" @click="removeTodo({index, todoItem})">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        // props: ['propsdata'],

        methods : {
            ...mapMutations({
                removeTodo: 'removeOneItem', // 인자를 따로 적어주지 않아도 사용한 인자를 알아서 넣어준다 (removeTodo({index, todoItem}) 처럼)
                toggleComplete: 'toggleOneItem',
            }),

            // removeTodoItem(index, todoItem) {
            //     // this.$emit('removeTodoItem', index, todoItem);
            //     // this.todoItems.splice(index, 1);
            //     // localStorage.removeItem(todoItem.item);
            //     this.$store.commit('removeOneItem', {
            //         index,
            //         todoItem
            //     });
            // },

            // toggleComplete(todoItem, index) {
            //     this.$store.commit('toggleOneItem', {
            //         todoItem, 
            //         index
            //     });
            // },
        },
        
        computed: {
            // todoItems() {
            //     return this.$store.getters.storedTodoItems;
            // }
            ...mapGetters(['storedTodoItems']),
        }

    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height:45px;
        color: #62acde;
        margin-right: 5px;
    }
    .checkBtnCompleted {
        color: #b3adad;
    }
    .textCompleted {
        color: #b3adad;
        text-decoration: line-through;
    }
    .removeBtn {
        margin-left:auto;
        color: #de4343;
    }

    /* .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    } */
    .list-enter-active,
    .list-leave-active {
    transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
    }
</style>