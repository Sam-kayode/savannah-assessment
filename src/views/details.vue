<template>
    <div class="details mt-3 text-white">
        <div class="img-contain">
            <img :src="selectedUser?.avatar_url" alt="" class="profile-picture">

            <div class="username d-flex mt-4 align-center">
                <p class="">User Login:</p>
                <h3 class="text-capitalize pl-2"> {{ selectedUser?.login }}</h3>
            </div>

            <h3 class="mt-8">Repositories</h3 class="mt-8">
            <div class="">
                <!-- <div class="repository">
                    Repository name : {{  }}
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useDetailsModule } from "../helpers";

const { selectedUser, handleGetUserDetails,repositories } = useDetailsModule()

onMounted(() => {
    handleGetUserDetails(selectedUser.value?.repos_url!)
})
</script>

<style scoped lang="scss">
.details {
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    padding: 30px;

    .img-contain {
        border-radius: 100%;

        .profile-picture {
            width: 120px;
            border-radius: 10px;

        }
    }
}
</style>