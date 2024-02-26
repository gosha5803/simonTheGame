<template>
    <button
    :class="color"
    @click="$emit('click')"
    >
        {{ text }}
    </button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String
            },
            color: {
                type: 'success' | 'error'
            }
        }
    }
</script>

<style lang="scss" scoped>
    button{
        padding: 10px;
        border-radius: 10px;
        font-weight: 500;
        font-size: 20px;
        border: 0;
        transition: ease-out .2s;
        cursor: pointer;
        opacity: .9;
        margin: 5px;
    }

    button:hover{
        opacity: 1;
        box-shadow: 1px 1px 1px 1px #3a3a3a;
    }

    .success{
        background-color: green;
        color: white;
    }

    .error{
        background-color: red;
        color: white;
    }

</style>