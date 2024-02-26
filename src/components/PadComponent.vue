<template>
    <div 
    @click="activatePad($event)"
    :class="{ [`${color}`]: true, 'active': isActive }"
    class="pad"
    >

    </div>
</template>

<script>
    export default {
        data: () => ({
            isActive: false
        }),
        props: {
            color: {
                type: 'red' | 'green' | 'blue' | 'yellow'
            },
            sound: {
                required: true
            },
            activeTime: {
                type: Number,
                required: true
            }
            // isActive: {
            //     type: Boolean,
            //     default: false
            // }
        },

        methods: {
            activatePad(ev) {
                const audio = new Audio(this.sound)
                const trusted = ev.isTrusted

                audio.play()
                
                this.isActive = true

                setTimeout(() => {
                    this.isActive = false
                }, this.activeTime)

                this.$emit('activated', [ev.target, trusted])
            }

        }
    }
</script>

<style lang="scss" scoped>
    div{
        width: 200px;
        height: 200px;
        border-radius: 10px;
        opacity: .5;
        background-color: bisque;
        transition: ease-in-out .3s;
        cursor: pointer;
    }

    .active{
        opacity: 1;
    }

    .red{
        background-color: red;
    }

    .blue{
        background-color: blue;
    }

    .yellow{
        background-color: #ff6a00;
    }

    .green{
        background-color: green;
    }
</style>