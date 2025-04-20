<template>
    <main>
        <div class="two">
            <div class="image-container">
                <button class="arrow-button arrow-left"><i class="fa-solid fa-arrow-left"></i></button>
                <img :src="one" alt="圖片">
                <button class="arrow-button arrow-right"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div class="a">
                <div class="g">
                    <img :src="two" width="100%" height="100%">
                </div>
                <div class="g">
                    <img :src="three" width="100%" height="100%">
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    import one from '@/assets/image/ONE.png'
    import two from '@/assets/image/TWO.png'
    import three from '@/assets/image/THREE.png'
</script>

<style scoped>
</style>