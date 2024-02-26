<template>
    <div
    class="my-switch"
    >
        <div 
        v-for="(option) in options" :key="option.id"
        >
            <button
            @click="activate(option.id, option.value)"
            :class="{'active': active === option.id}"
            >{{ option.text }}</button>

        </div>
   
    </div>
</template>

<script>
        import MyBtn from './MyBtn.vue';

    export default {

        data: () => ({
            active: 1
        }),
        props: {
            options: {
                type: Array,
                required: true
            }
        },
        components: {
            MyBtn
        },

        methods: {
            activate(id, value) {
                this.active = id
                this.$emit('select', value)
            }
        }
    }
</script>

<style lang="scss" scoped>

    .my-switch{
        border-radius: 10px;
        overflow: hidden;
        border: 1px solid #ccc;
        margin-top: 10px;
        display: flex;
    }
    button{
        padding: 10px;
        font-weight: 500;
        font-size: 20px;
        border: 0;
        transition: ease-out .3s;
        cursor: pointer;
        opacity: .9;
    }

    button:hover{
        opacity: 1;
        box-shadow: 1px 1px 1px 1px #3a3a3a;
        // background-color: #36af36;
        // color: white;
    }
    
    .active{
        background-color: #561ce1;
        color: white;
    }
    
</style>