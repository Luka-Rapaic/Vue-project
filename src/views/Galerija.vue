<template>
    <div class="content-wrapper">
        <!-- <Carousel :video-list="videoList"></Carousel> -->
        <div class="galerija">
            <img v-for="image in imageList" :key="image" :src="image">
        </div>
    </div>
</template>

<style scoped>

.content-wrapper {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-sizing: border-box;
    padding: 40px;
    width: 60%;
    margin: 0px auto;
}

.galerija {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    row-gap: 20px;
    column-gap: 20px;
}

.galerija>img {
    width: 500px;
    height: 350px;
    object-fit: cover;
    border-radius: 20px;
    border: 1px solid black;
    box-sizing: border-box;
}

</style>

<script>
// import Carousel from "@/components/Carousel.vue";

export default {
    name: "Galerija",
    data() {
        return {
            // videoList: [],
            imageList: []
        }
    },
    created() {
        // this.videoList = [];
        this.imageList = ["../Formosa0.webp", "../Formosa1.jpg", "../Formosa2.webp", "../Formosa3.jpg", "../Formosa4.jpg", "../Formosa5.jpeg",];
    },
    // components: {Carousel}
}
</script>
