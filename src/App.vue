<script setup lang="ts">
    import down from '@/assets/image/down.png'
</script>

<template>
    <router-view name="header"></router-view>
    <br>
    <router-view name="main"></router-view>
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
