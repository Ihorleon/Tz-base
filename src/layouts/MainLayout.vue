
<template>
<div class="app-main-layout">

    <Navbar @click="isOpen = !isOpen" />

    <Sidebar v-model="isOpen" />

    <main class="app-content" :class="{full:!isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>



</div>
</template>


