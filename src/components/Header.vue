<template>
    <div class="header">
        <div class="logoBar">
            <img src="@/assets/Logo.png" class="logo">
        </div>
        <Meni></Meni>
    </div>
</template>

<style scoped>

.header {
    background-color: #F7F7F7;
}

.logoBar>span {
    position: relative;
    float: right;
    line-height: 100px;
    margin: 0 40px;
    font-size: 1.25em;
}

.logoBar>span>span.active {
    color: #50C878;
}

.logoBar>span>span:hover {
    cursor: pointer;
    color: #50C878;
}

.logo {
    height: 100px;

}

</style>

<script>
import Meni from '@/components/Meni';

export default {
    name: "Header",
    components: {Meni}
}
</script>
