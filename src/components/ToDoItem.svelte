<script>
    export let index
    export let todo
    export let editToDo
    export let removeToDo
</script>

<div class="toDo">
    {index+1}. {todo}
    <div class="actions">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <i 
            on:click={() => editToDo(index)}
            on:keydown={() => {}}
            class="fa-regular fa-pen-to-square"
        />
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <i
            on:click={() => removeToDo(index)}
            on:keydown={() => {}}
            class="fa-regular fa-trash-can"
        />
    </div>
</div>

<style>
    .toDo {
        border-left: 1px solid cyan;
        padding: 8px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.3rem;
    }

    .actions i {
        cursor: pointer;
    }

    .actions i:hover {
        color: coral;
    }
</style>