<script lang="ts">
import { base } from '$app/paths'
import { auth, type User } from '../../stores/auth'
    import { goto } from '$app/navigation';
</script>

<header>
    <nav>
        <div class="navbar_links">
            <button on:click={() => goto(`${base}/`)}>Home</button>
            <button on:click={() => goto(`${base}/about/`)}>About</button>
            <button on:click={() => goto(`${base}/create_acc/`)}>Create Account</button>
            <button on:click={() => goto(`${base}/sign_in/`)}>Sign In</button> <!-- not logged in -->
            <button on:click={() => goto(`${base}/personal-words/`)}>Personal Words</button> <!-- is admin -->
        </div>
    </nav>
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        padding: 2rem;
        box-sizing: border-box;
    }

    .navbar_links {
        border-radius: 25px;
        height: fit-content;
        display: inline-flex;
        background-color: rgba(0, 0, 0, .4);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        align-items: center;
        padding: 0 10px;
        margin: 50px 0 0 0;   
    }

    button {
        color: white;
        font-family: sans-serif;
        font-weight: bold;
        padding: 12px 16px;
        margin: 0 8px;
        position: relative;
        cursor: pointer;
        white-space: nowrap;
        background-color: transparent;
        border: none;
        outline: none;
    }

    button:hover {
        color: black;
    }

    button::before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        transition: .2s;
        border-radius: 25px;
    }

    button:hover::before {
        background: linear-gradient(to bottom, #e8edec, #d2d1d3);
        box-shadow: 0px 3px 20px 0px black;
        transform: scale(1.2);
        color: black;
    }
</style>