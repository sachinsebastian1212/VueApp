<template>
    <table>
        <tr>
            <td v-for="(heading,index) in headings" v-bind:key="index">{{heading}}</td>
        </tr>
        <tr>
            <slot name="table-data" />
        </tr>
    </table>
</template>

<script>
export default {
    props:{
        headings:[]
    }
}
</script>
