<template>
  <div class="top">
    <div class="left">
      <a href="#">賣家中心</a> |
      <a href="#">開始隨拍即賣!</a> |
      <a href="#">下載</a> |
      <a href="#">追蹤我們</a>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-line"></i>
    </div>
    <div class="right">
      <a href="#"><i class="fa-regular fa-bell"></i> 通知總覽</a> |
      <a href="#"><i class="fa-solid fa-question"></i> 幫助中心</a> |
      <a href="#"><i class="fa-solid fa-globe"></i> 繁體中文 ▼</a> |
      <a href="#">註冊</a> |
      <a href="#">登入</a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .top {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
  }

  .top .left, .right {
      display: flex;
      align-items: center;
      gap: 10px;
  }

  .top i {
      cursor: pointer;
  }
</style>
