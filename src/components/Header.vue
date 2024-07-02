<template>
    <div class="header">
        <div class="logoBar">
            <span style="color: transparent; float: left; pointer-events: none; user-select: none;"><span>SR</span> | <span>EN</span></span>
            <img src="@/assets/Logo.png" class="logo">
            <span><span  :class="{active: language}" @click="setLanguage('SR')">SR</span> | <span :class="{active: language==false}" @click="setLanguage('EN')">EN</span></span>
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
    components: {Meni},
    data() {
        return {
            language: true
        }
    },
    created() {
        let language = localStorage.getItem("language");
        if (language == null) {
            localStorage.setItem("language", "SR");
            this.language = true;
        } else {
            if (language == "SR") this.language = true;
            else this.language = false;
        }
    },
    methods: {
        setLanguage(choice) {
            localStorage.setItem("language", choice);
            window.location.reload();
        }
    }
}
</script>
