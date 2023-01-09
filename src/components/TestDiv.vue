<template>
    <div v-bind="objectOfAttrs"></div>
    <div :id="`list-${number}`"></div>
    <input
    type="checkbox"
    v-model="toggle"
    true-value="네"
    false-value="아니오" />
    <input type="radio" v-model="picked" value="가" />
    <select v-model="selected">
  <option value="한글">한글</option>
</select>
adsadadasd
<input type="radio" v-model="pick" :value="first" />
<input type="radio" v-model="pick" :value="second" />
<input v-model.lazy="msg" />
    <div>
        {{toggle}}
        {{picked}}
        {{selected}}
        {{pick}}
        {{msg}}
    </div>
    <ul>
    <li v-for="(value, key, index) in myObject" :key="key" :index="index">
        {{ index }} : {{ key }} : {{ value }}
    </li>
</ul>
</template>

<script>
    export default {
        data() {
            return {
                objectOfAttrs: {
                    id: 'container',
                    class: 'wrapper'
                },
                number: 10,
                toggle: "",
                picked: "",
                selected: "",
                pick: "",
                first: "퍼스트",
                second: "세컨드",
                msg: "",
                myObject: {
                title: 'Vue에서 목록을 작성하는 방법',
                author: '홍길동',
                publishedAt: '2016-04-10'
                },
            }
        }
    }

</script>

<style>

</style>