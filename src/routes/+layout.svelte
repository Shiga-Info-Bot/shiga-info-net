<script>
	import Header from './lib/Header.svelte';
	import './styles.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
    <p>&copy;滋賀情報ネット 2022</p>
</footer>

<style>
    main {
        padding: 0;
        background-color: #f6fcff;
    }
    footer {
        background-color: #ebf9ff;
        padding: 10px 5px;
    }
    footer p {
        text-align: center;
    }
</style>