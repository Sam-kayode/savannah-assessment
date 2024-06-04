<template>
    <div class="py-3 d-sm-flex justify-space-between align-center border-t-sm px-3 text-white">
        <p>
            <span class="font-weight-bold">Total:</span> {{ totalUsers }}
        </p>
        <div>
            <v-btn class="rounded-lg bg-green-accent-1 mr-4 text-capitalize" :disabled="currentPage == 1"
                @click="handlePagination('prev')">
                Prev
            </v-btn>
            {{ currentPage }} <span class="mx-3">of </span> {{ totalPage }}
            <v-btn class="rounded-lg  bg-green-accent-1 ml-4 text-capitalize" :disabled="totalPage == 1"
                @click="handlePagination('next')">
                Next
            </v-btn>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { useUserModule } from "../helpers";

const { totalPage,
    currentPage,
    totalUsers, handlePagination } = useUserModule()


</script>

<style lang="scss" scoped></style>