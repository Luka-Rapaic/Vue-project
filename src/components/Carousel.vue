<template>
    <div class="carousel">
        <button @click="slideLeft()">&lt;</button>
        <video>
            <source :src="videoList[index]" type="video/mp4">
        </video>
        <button @click="slideRight()">&gt;</button>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    props: {"videoList": Array},
    data() {
        return {
            index: 0
        }
    },
    methods: {
        slideLeft() {
            this.index = this.index == 0 ? this.videoList.length - 1 : this.index - 1;
        },
        slideRight() {
            this.index = this.index == this.videoList.length - 1 ? 0 : this.index + 1;
        }
    }
}
</script>
