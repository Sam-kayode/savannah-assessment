<template>
    <div class="d-flex align-center" v-if="allUsers.length" >
        <p class="font-weight-bold text-white mr-3">Sort by:</p> <v-select placeholder="--Select--" :items="options"
            rounded="lg" density="compact" required v-model="sortBy" variant="solo-filled" class="sort"
            hide-details />
    </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserModule } from "../helpers";

const { allUsers, sortBy } = useUserModule()

const options = ref<string[]>(["Login", "Type"])


</script>

<style scoped lang="scss">
.sort {
    max-width: 150px;
}
</style>