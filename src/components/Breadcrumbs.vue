<template>
    <span></span>
</template>

<style scoped>

</style>

<script>
export default {
    name: "Breadcrumbs",
    data() {
        return {
            paths: []
        }
    },
    created() {
        let path = this.$route.path;
        console.log(path);
        let paths = path.split('/');
        for (let i = 0; i < paths.length; i++) {
            if (i != 0) {
                paths[i] = paths[i-1] + "/" + paths[i];
            } else {
                paths[0] = "/";
            }
        }
    }
}
</script>
