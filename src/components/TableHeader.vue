<template>
    <div class="mt-4">
        <div class="tbl-header rounded-t-lg">
            <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Login</th>
                        <th>Type</th>
                        <th  width="250">Action</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>

</template>

<style scoped lang="scss">
table {
    width: 100%;
    table-layout: fixed;
}

.tbl-header {
    background-color: rgba(255, 255, 255, 0.894);
}

th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
}
</style>