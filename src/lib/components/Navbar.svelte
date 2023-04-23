<script lang="ts">
    import { base } from '$app/paths';
</script>

<header>
    <nav>
        <ul class="navbar_links">
          <li><a href="{base}/">Home</a></li>
          <li><a href="{base}/about/">About</a></li>
          <li><a href="{base}/create_acc/">Create Account</a></li>
          <li><a href="{base}/sign_in/">Sign In</a></li> <!-- not logged in -->
          <li><a href="{base}/approve">Approve Races</a></li> <!-- is admin -->
        </ul>
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

    li {
        list-style: none;
		color: white;
        font-family: sans-serif;
		font-weight: bold;
        padding: 12px 16px;
		margin: 0 8px;
        position: relative;
		cursor: pointer;
        white-space: nowrap;
    }

    a:visited {
        color: inherit;
    }

    a:link {
        text-decoration: none;
    }

    li:hover {
        color: black;
    }

    li::before {
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

    li:hover::before {
            background: linear-gradient(to bottom, #e8edec, #d2d1d3);
            box-shadow: 0px 3px 20px 0px black;
            transform: scale(1.2);
            color: black;
    }

</style>