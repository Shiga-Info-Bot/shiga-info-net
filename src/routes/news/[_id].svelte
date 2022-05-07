<script context="module">
    export async function load({ url, params }) {
        const apiUrl = `${url.origin}/news/${params._id}.json`
        const res = await fetch(apiUrl)
        if (!res.ok) {
            return
        }
        const newsContent = await res.json()
        return {
            props: { newsContent },
        }
    }
</script>

<script>
    export let newsContent;

    import { page } from '$app/stores';
    const pageUrl = $page.url;
</script>

<svelte:head>
	<title>{newsContent.title} - 滋賀情報ネット News</title>
    <meta property="og:url" content="{pageUrl}" />
    <meta property="og:type" content=" article" />
    <meta property="og:title" content="{newsContent.title}" />
    <meta property="og:description" content=" ページのディスクリプション" />
    <meta property="og:site_name" content="滋賀情報ネット" />
    <meta property="og:image" content=" {newsContent.thumbnail.src}" />
</svelte:head>

<section id="blogTitleWrap">
    <h1>{newsContent.title}</h1>
    <p>{newsContent.day}</p>
    <p>
    {#each newsContent.tags as tag}
        <span class="blogTag">#{tag}</span>
    {/each}
    </p>
</section>


<section id="blogContent">
    {@html newsContent.main_text}
</section>

<section id="links">
    <a href="/news">ニュース一覧を見る</a>
    <a href="/">トップに戻る</a>
</section>

<style>
    section#blogTitleWrap {
        padding-top: 70px;
        padding: 70px 40px 10px 40px;
    }
    section#blogTitleWrap span.blogTag {margin: 0 5px;}
    section#blogTitleWrap span.blogTag:first-child{margin: 0 5px 0 0;}
    section#blogContent {padding: 5px 40px;}

    section#links a {
        font-size: .9rem;
        font-weight: bold;
        margin: 0 auto;
        padding: 10px 0;
    }
</style>