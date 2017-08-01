<template>
    <div>
        <div id="lang-panel">
            <router-link :to="{ path: '/cn' }" class="lang" activeClass="selected">中</router-link>
            <router-link :to="{ path: '/en' }" class="lang" activeClass="selected">EN</router-link>
        </div>
        <!--组件Demo-->
        <my-component></my-component>
        <!--路由Demo-->
    </div>
</template>