<script setup lang="ts">
    import one from '@/assets/ONE.png'
    import two from '@/assets/TWO.png'
    import three from '@/assets/THREE.png'
    import down from '@/assets/down.png'
    import headertop from '@/components/header/header-top.vue'
    import headermainnav from '@/components/header/header-main-nav.vue'
    import headercategories from '@/components/header/header-categories.vue'
</script>

<template>
    <header>
        <headertop/>
        <headermainnav/>
        <headercategories/>
    </header>
    <br>
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
        <br>
    <footer>
        <div class="three">
            <div class="categories">
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-truck icon-green"><div>周六免運日</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-plane-arrival icon-orange"><div> $99起免運</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-check icon-orange"><div>免運當日到</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-ticket icon-orange"><div>一鍵領券</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-bag-shopping icon-red"><div>蝦皮商城</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-globe icon-green"><div>蝦皮海外直送</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-credit-card icon-orange"><div>銀行刷卡優惠</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-thumbs-up icon-orange"><div>蝦皮超便宜</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-laptop icon-blue"><div>蝦皮3C家電</div></i>
                </button></a>
                <a href="#"><button class="button-icon">
                    <i class="fa-solid fa-tags icon-green"><div>活動集合</div></i>
                </button></a>
            </div>
        </div>
        <br>
        <div class="four">
            <div class="pattern">
                <a href="#">
                    <img :src="down" width="100%" height="100%" >
                </a>
            </div>
        </div>
    </footer>

</template>

<style>
</style>
