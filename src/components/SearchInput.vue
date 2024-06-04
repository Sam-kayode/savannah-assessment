<template>
    <div class="search-area px-6 pt-3 mt-3" :class="searchAreayStyle">
        <h1 class="text-center font-weight-bold" v-if="!allUsers.length">Login</h1>
        <div class="mt-1" :class="handleFlex">
            <div>
                <v-text-field variant="solo" width="300" rounded="xl" placeholder="Login" v-model="searchTerm">
                    <template v-slot:append-inner>
                        <v-btn rounded="xl" class="text-capitalize" v-if="allUsers.length && !loading"
                            @click="getUsers">
                            Submit
                        </v-btn>
                        <v-progress-circular color="green" indeterminate :size="30"
                            v-if="loading"></v-progress-circular>
                    </template>
                </v-text-field>
                <div class="text-center">
                    <v-btn @click="getUsers" class="px-9 rounded-lg text-capitalize mb-5" v-if="!allUsers.length">
                        Submit</v-btn>
                </div>
            </div>
            <Sort />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useUserModule } from "../helpers";
import Sort from './Sort.vue';

const { handleGetUsers, allUsers, loading, centralise, searchTerm } = useUserModule()

// dynamic styling for search-box area
const handleFlex = computed(() => ({ 'd-sm-flex align-center justify-space-between w-100': allUsers.value.length as boolean }))

const searchAreayStyle = computed(() => ({ 'centralise': centralise.value, 'pt-9': !allUsers.value.length as boolean }))

const getUsers = () => {
    handleGetUsers()
}

</script>

<style scoped lang="scss">
.search-area {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(10px);

}


.centralise {
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;


}

.label {
    margin-bottom: 10px;
    font-weight: bolder;
}
</style>