<script>
    import { db } from "../../lib/firebase/firebase"
    import { getDoc, doc, setDoc} from 'firebase/firestore';
    import { authHandler, authStore } from "../../store/store"
	import ToDoItem from "../../components/ToDoItem.svelte";

    let toDoList = [];
    let currToDo = "";
    let error = false;

    authStore.subscribe(curr => {
        toDoList = curr.data.todos;
    })

    function addToDo() {
        error = false;
        if (!currToDo) {
            error = true;
        } else {
            toDoList = [...toDoList, currToDo];
            currToDo = "";
        }
    }

    function editToDo(index) {
        let newToDoList = toDoList.filter((val, i) => {
            return i !== index;
        });
        currToDo = toDoList[index];
        toDoList = newToDoList;
    }

    function removeToDo(index) {
        let newToDoList = toDoList.filter((val, i) => {
            return i !== index;
        });
        toDoList = newToDoList;
    }

    async function saveToDo() {
        try {
            const userRef = doc(db, "users", $authStore.user.uid);
            await setDoc(userRef,
                {
                    todos: toDoList,
                }, 
                {merge: true}
            )
        } catch (err) {
            console.log("There waws an error in saving your information");
        }
    }
</script>
{#if !$authStore.loading}
    <div class="mainContainer">
        <div class="headerContainer">
            <h1>To-Do List</h1>
            <div class="headerBtns">
                <button on:click={saveToDo}>
                    <i class="fa-regular fa-floppy-disk"/>
                    <p>Save</p>
                </button>
                <button on:click={authHandler.logout}>
                    <i class="fa-solid fa-right-from-bracket"/>
                    <p>Logout</p>
                </button>
            </div>
        </div>
        <main>
            {#if toDoList.length === 0}
                <p>
                    You have nothing to do.
                </p>
            {/if}
            {#each toDoList as todo, index}
                <ToDoItem {todo} {index} {removeToDo} {editToDo}/>
            {/each}
        </main>
        <div class={"enterToDo " + (error ? "errorBorder" : "")}>
            <input bind:value={currToDo} type="text" placeholder="Enter To-Do"/>
            <button on:click={addToDo}>ADD</button>
        </div>
    </div>
{/if}
<style>
    .mainContainer {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        gap: 24px;
        padding: 24px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
    }

    .headerContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .headerBtns {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .headerContainer button {
        background: #003c5b;
        color: white;
        padding: 10px 18px;
        border: none;
        border-radius: 4px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    .headerContainer button i {
        font-size: 1.1rem;
    }

    .headerContainer button:hover {
        opacity: 0.7;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
    }

    .enterToDo {
        display: flex;
        align-items: stretch;
        border: 1px solid #0891b2;
        border-radius: 5px;
        overflow: hidden;
    }

    .errorBorder {
        border-color: coral !important;
    }

    .enterToDo input {
        background: transparent;
        border: none;
        padding: 14px;
        color: #FFFFFF;
        flex: 1;
    }

    .enterToDo input:focus {
        outline: none;

    }

    .enterToDo button {
        padding: 0 28px;
        background: #003c5b;
        border: none;
        color: cyan;
        font-weight: 600;
        cursor: pointer;
    }

    .enterToDo button:hover {
        background: transparent;
    }
</style>