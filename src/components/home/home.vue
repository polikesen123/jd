<template>
    <div>
        <myheader></myheader>
        <grid></grid>
    </div>
</template>
<script>
// @ is an alias to /src
import myheader from './header'
import grid from './grid'
export default {
    name: 'home',
    data() {
        return {
        
        }
    },
    components: {
        myheader,
        grid
    }
}
</script>
<style lang="less">

</style>