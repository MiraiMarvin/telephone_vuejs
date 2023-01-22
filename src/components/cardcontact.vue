<template>
    <div>
    <h1>{{ contact.name }}</h1>
    <p>{{ contact.phone }}</p>
    <button @click="initCall(contact.number)">appeller</button>
    </div>
</template>

<script>
export default {
name: 'card_contact',
props: [
'contact'
],
}

</script>


<style scoped>
div{
    border: 1px solid black;
    padding: 10px;
}

</style>
