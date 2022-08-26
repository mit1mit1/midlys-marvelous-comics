<script>
import { getComicNumber, setComicNumber, maxComicNumber } from "../utils/comicNumber";
export default {
    data() {
        return {
            getComicNumber,
            setComicNumber,
            maxComicNumber,
        }
    }
}
</script>

<template>
    <div class="nav-bar">
        <button :onclick="() => setComicNumber(1)">&lt; &lt; First</button>
        <button :onclick="() => setComicNumber(getComicNumber() - 1)">&lt; Prev</button>
        <button :onclick="() => setComicNumber(Math.floor(1 + Math.random() * (maxComicNumber)))">Random</button>
        <button :onclick="() => setComicNumber(getComicNumber() + 1)">Next ></button>
        <button :onclick="() => setComicNumber(maxComicNumber)">Last > ></button>
    </div>
</template>

<style>
.nav-bar {
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
}

button {
    margin-right: 10px;
    margin-bottom: 5px;
    transition-duration: 0.4s;
    border: none;
    padding: 8px 12px;
    min-height: 40px;
    min-width: 100px;
    font-size: 0.95em;
    font-family: "Quicksand", sans-serif;
}

button:hover {
    background-color: #ffb7c5;
    cursor: pointer;
}
</style>