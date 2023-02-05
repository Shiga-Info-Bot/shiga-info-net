<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const pages = Math.ceil(data.content.total / 10)
</script>
<svelte:head>
	<title>ニュース一覧 - 滋賀情報ネット News</title>
    <meta property="og:url" content="https://shiga-info.net/news/" />
    <meta property="og:type" content=" article" />
    <meta property="og:title" content="ニュース一覧" />
    <meta property="og:description" content="滋賀県情報ネットのニュース・プレスリリースの一覧です。" />
    <meta property="og:site_name" content="滋賀情報ネット" />
    <meta property="og:image" content="" />
</svelte:head>

<section>
    <div class="news_list">
        {#each data.content.items as newsContent }
            <a 
                class="news_wrap"
                href="/news/{ newsContent._id }"
            >
                <div class="newsImage">
                    <img src="{ newsContent.thumbnail.src }" alt="">
                </div>
                <div class="newsTexts">
                    <span class="newsTitle">{ newsContent.title }</span>
                    <span class="newsDate">
                        {new Date(newsContent.day).getFullYear() }/{ new Date(newsContent.day).getMonth() + 1 }/{ new Date(newsContent.day).getDate() } 
                        { new Date(newsContent.day).getHours().toString().padStart(2, '0') }:{ new Date(newsContent.day).getMinutes().toString().padStart(2, '0') }
                    </span>
                </div>
            </a>
        {/each}
    </div>
    <div id="paginationWrap">
        {#each Array(pages) as _, i}
            {#if data.page == i}
                <p class="pagination">{ i + 1 }</p>
            {:else}
                <a class="pagination" href="/news?p={i + 1}">{i + 1}</a>
            {/if}
        {/each}
    </div>
</section>

<style>
    section {
        padding: 60px 10px 10px 10px;
        max-width: 900px;
        margin: 0 auto;
    }
    a.news_wrap {
        width: 100%;
        margin: 20px 0;
        padding: 15px;
        background-color: #fefefe;
        border-radius: 10px;
        box-sizing: border-box;
        text-decoration: none;
        display: flex;

        box-shadow: 9px 9px 2rem rgba(0,0,0,.12);
    }
    a.news_wrap div.newsImage{
        width: 20%;
        height: 100px;
    }
    a.news_wrap div.newsImage img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    a.news_wrap div.newsTexts{
        width: 80%;
    }
    a.news_wrap div.newsTexts span.newsTitle {
        font-size: 1.1rem;
        font-weight: bold;
    }
    a.news_wrap div.newsTexts span {
        display: block;
        margin: 2px 10px;
    }

    div#paginationWrap {
        display: flex;
        justify-content: center;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
    }
    div#paginationWrap .pagination {
        display: block;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        background-color: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.12) 9px 9px 32px 0px;
    }
    div#paginationWrap p.pagination {
        padding: 10px;
        font-size: 1.2rem;
    }
</style>