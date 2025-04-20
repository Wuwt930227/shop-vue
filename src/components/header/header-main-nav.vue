<template>
    <div class="main-nav">
        <div class="logo"><router-link to="/"><i class="fa-solid fa-bag-shopping"></i> 蝦皮購物</router-link></div>
        <div class="search-bar">
            <input type="text" placeholder="註冊獲得全站優惠券與免運券">
            <button><i class=" fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div class="cart-icon">
            <button><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.main-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
}
.logo {
    font-size: 24px;
    font-weight: bold;
}
.search-bar {
    display: flex;
    width: 40%;
}

.search-bar input {
    width: 100%;
    padding: 8px;
    border-radius: 5px 0 0 5px;
    border: none;
    outline: none;
}

.search-bar button {
    background: white;
    border: none;
    padding: 8px;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
}

.search-bar i {
    color: #FF5722;
    font-size: 16px;
}
.cart-icon {
    font-size: 24px;
    cursor: pointer;
}
.cart-icon button {
    background:#FF7043;
    color: white;
    border: none;
    padding: 8px 50px;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    font-size: 25px;
}
</style>
