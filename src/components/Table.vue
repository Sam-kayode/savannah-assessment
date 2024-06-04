<template>
  <div class="mt-1">
    <TableHeader />
    <div class="tbl-content rounded-b-lg">
      <table cellpadding="0" cellspacing="0" border="0">
        <tbody>
          <tr v-for="user in allUsers" :key="user.id">
            <td>
              <div class="d-flex align-center">
                <img :src="user.avatar_url" alt="" class="rounded-lg mr-5">
                <a :href="user.avatar_url">Image Link</a>
              </div>
            </td>
            <td>{{ user.login }}</td>
            <td>{{ user.type }}</td>
          </tr>

        </tbody>
      </table>
    </div>
    <TablePagination/>
  </div>

</template>

<script setup lang="ts">
import { useUserModule } from "../helpers";
import TableHeader from "./TableHeader.vue";
import TablePagination from "./TablePagination.vue";

const { allUsers } = useUserModule()
</script>

<style scoped lang="scss">
table {
  width: 100%;
  table-layout: fixed;
  background-color: rgba(211, 211, 211, 0.794);
}

.tbl-content {
  height: calc(100vh - 270px);
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

tr:nth-child(even) {
  background-color: rgba(242, 242, 242, 0.466);
}

td {
  padding:10px;
  vertical-align: middle;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);

  img {
    width: 40px;
  }
}
</style>