<template>
    <div>
        <SearchInput />
        <Table v-if="allUsers.length && !centralise" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Table from '../components/Table.vue';
import SearchInput from "../components/SearchInput.vue"
import { useUserModule } from "../helpers";

const { allUsers, centralise } = useUserModule()
onMounted(async () => {

})
</script>

<style scoped lang="scss">

</style>