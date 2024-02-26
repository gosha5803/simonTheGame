<template>
    <div 
        class="container"
    >
    <MyAlert
    v-if="showAlert"
    :text="`Ошибка! Нажмите 'Играть', чтобы начать заново.`"
    :color="'error'"/>

        <div>
            <MyBtn
            :color=" 'success' "
            :text=" 'Играть' "
            @click="playGame()"
            />
            <!-- <MyBtn
            :color=" 'success' "
            :text=" 'Легко' "
            @click="setLevel(2000)"
            />
            <MyBtn
            :color=" 'success' "
            :text=" 'Средне' "
            @click="setLevel(1000)"
            />
            <MyBtn
            :color=" 'success' "
            :text=" 'Сложно' "
            @click="setLevel(300)"
            /> -->
            <MyToggleBtn
                @select="setLevel"
                :options="[
                    { text: 'Легко', active: true, id: 1, value: 1500 },
                    { text: 'Средне', active: false, id: 2, value: 1000 },
                    { text: 'Сложно', active: false, id: 3, value: 400 },
                    ]"
            />

        </div>

        <h3>
            Ваш счёт: {{ round }}
        </h3>

        <div class="pads">
            <PadComponent :activeTime="level" :sound="lowestSound" @activated="clickHandler" :color=" 'red' "/>
            <PadComponent :activeTime="level" :sound="higherSound" @activated="clickHandler" :color=" 'green' "/>
            <PadComponent :activeTime="level" :sound="lowerSound" @activated="clickHandler" :color=" 'yellow' "/>
            <PadComponent :activeTime="level" :sound="highestSound" @activated="clickHandler" :color=" 'blue' "/>
        </div>
    </div>
</template>

<script>
    import lowestSound from '../assets/sounds/lowest.wav' 
    import higherSound from '../assets/sounds/higher.wav' 
    import lowerSound from '../assets/sounds/pre-highest.wav' 
    import highestSound from '../assets/sounds/highest.wav' 
    import MyBtn from '../components/Interface/MyBtn.vue'
    import PadComponent from '../components/PadComponent.vue'
    import MyAlert from '@/components/Interface/MyAlert.vue'
    import MyToggleBtn from '@/components/Interface/MyToggleBtn.vue'

    export default{
        data: () => ({
            lowestSound,
            higherSound,
            lowerSound,
            highestSound,
            padsQueue: [],
            copyQueue: [],
            waitForClick: false,
            showAlert: false,
            level: 1500,
            round: 0
        }),
        components: {
            MyBtn,
            PadComponent,
            MyAlert,
            MyToggleBtn
        },

        methods: {
            clickHandler([pad, trusted]) {
                if(!trusted) {
                    return
                }

                if(!this.waitForClick) {
                    return
                }

                if(!this.copyQueue.length) {
                    this.copyQueue = [...this.padsQueue]
                }

                if(this.copyQueue.shift() !== pad) {
                    this.stopGame()
                    this.showAlert = true
                    return
                }

                if (!this.copyQueue.length) {
                        this.waitForClick = false
                        this.round++

                        setTimeout(() => {
                            this.playGame()
                        }, 1000)
                    }
            },

            playGame() {
                if(this.padsQueue.length) {
                        let index = 0

                        const interval = setInterval(() => {
                            this.activatePad(this.padsQueue[index])

                            if(++index >= this.padsQueue.length){
                                setTimeout(() => {
                                    this.activateRandomPad()
                                    this.waitForClick = true
                                }, this.level)
                                clearInterval(interval)
                            }
                        }, this.level)
                        
                } else {
                    this.waitForClick = true
                    this.activateRandomPad()
                }
            },
            
            activateRandomPad() {
                const pads = document.querySelectorAll('.pad')
                let randomPad

                if(this.padsQueue.length) {
                    const copyPads = [...pads]
                    const lastPad = this.padsQueue.at(-1)
                    const filteredPads = copyPads.filter(pad => pad !== lastPad)
                    randomPad = filteredPads[Math.floor(Math.random() * filteredPads.length)]
                    this.padsQueue.push(randomPad)
                    this.activatePad(randomPad)
                    return
                }
                
                randomPad = pads[Math.floor(Math.random() * pads.length)]
                this.padsQueue.push(randomPad)
                this.activatePad(randomPad)
            },

            activatePad(pad) {
                pad.click()
            },

            setLevel(delay) {
                this.level = delay
            }, 

            stopGame() {
                this.padsQueue = []
                this.copyQueue = []
                this.waitForClick = false
                this.round = 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pads{
        display: flex;
        flex-wrap: wrap;
        width: 410px;
        height: 420px;
        justify-content: space-between;
        margin-top: 20px;
    }
    
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>