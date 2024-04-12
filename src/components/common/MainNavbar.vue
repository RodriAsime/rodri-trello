<script setup lang="ts">
import LogoIcon from '@/components/icons/LogoIcon.vue'
// import ButtonNavbar from '@/components/navbar/ButtonNavbar.vue'
// import SettingIcon from '@/components/icons/SettingIcon.vue'
// import BellIcon from '@/components/icons/BellIcon.vue'
</script>
<template>
  <header class="main-navbar">
    <LogoIcon class="main-navbar__logo" />
    <!-- <nav class="main-navbar__options">
      <ButtonNavbar><BellIcon /></ButtonNavbar>
      <ButtonNavbar><SettingIcon /></ButtonNavbar>
    </nav> -->
  </header>
</template>

<style scoped>
.main-navbar {
  background-color: var(--semi-transparent-dark);
  display: flex;
  justify-content: flex-end;
  align-content: center;
  padding: 0.5rem 1rem;
  position: relative;
}
.main-navbar__logo {
  width: 2rem;
  height: 2rem;
  margin: auto;
}
/* .main-navbar__options {
  display: flex;
  gap: 1rem;
} */
</style>
