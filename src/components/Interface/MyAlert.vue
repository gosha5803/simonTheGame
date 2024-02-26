<template>
    <div
    @click="hideAlert()" 
    :class="{'my-alert' : true, [`${color}`]: true, 'visible': isVisible}">
        {{ text }}
    </div>
</template>

<script>
    export default {
        data: () => ({
            isVisible: false
        }),
        props: {
            text: {
                type: String,
                required: true
            },
            color: {
                type: 'error' | 'success'
            }
        },
        methods: {
            hideAlert() {
                this.isVisible = false
            }
        },
        mounted() {
                setTimeout(() => {
                    this.isVisible = true
                }, 10) 
            setTimeout(() => {
                this.isVisible = false 
            }, 5000)
        } 
    }
</script>

<style 
    lang="scss"
    scoped
>
    .my-alert{
        text-align: left;
        padding: 13px;
        font-weight: 600;
        border-radius: 10px;
        min-width: 300px;
        min-height: 50px;
        font-size: 20px;
        position: fixed;
        left: 10px;
        top: -200px;
        opacity: 0;
        
        transition: .3s linear;
    }
    
    .error{
        background-color: rgb(255, 170, 170);
        color: rgb(170, 32, 32);
    }
    
    .success{
        
    }
    
    .visible{
        opacity: 1;
        left: 20px;
        top: 160px;
    }
</style>