<template>
    <div>
        <input type="text" :value="data">
    </div>
</template>

<script>
export default {
    name:"InputComponent" ,
    props: ['data']
}

</script>