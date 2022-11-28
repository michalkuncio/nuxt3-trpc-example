<script setup lang="ts">
const { $client } = useNuxtApp();

// for client side request
const data = await $client.getBook.query({ id: 3 });

// for server side request
// const { data } = await useAsyncData(() => $client.getBook.query({ id: 1 }));
</script>

<template>
    <div>
        <h1>{{ data?.title }}</h1>
        <h2>{{ data?.author }}</h2>
    </div>
</template>
