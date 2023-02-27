<template>
    <div class="container" style="margin: auto;">
        <header class="color">Header</header>
        <div class="parent">
            <aside class="color">
                <h1>Side-Menu</h1>
                <h3>Menu1</h3>
                <h3>Menu2</h3>
                <h3>Menu3</h3>
            </aside>
            <section class="color article">
                The language of Korean English newspapers, when compared with that of American or British English newspapers, shows many interesting types of linguistically meaningful differences through various grammatical constructs and expressions such as to-infinitives. This study is a corpus-based analysis of the to-infinitives used in Korean English newspapers, and its main goal is to investigate the characteristic uses of the linguistic pattern, using Korean English Newspaper Corpus (KENC) and Frown/FLOB Corpora, and to explain the nonnativeness revealed in them from the perspective of successful users of English in the context of World Englishes. The results indicate that the unusually high frequency of the infinitive marker to in the Korean English newspapers is mainly due to the four different morphosyntactic patterns strongly preferred by Korean English users. Besides, it turned out that some salient expression patterns are overused in Korean English newspapers, which often contributes to the unusual frequency of the infinitive marker as well. This study suggests that the types of nonnativeness found in the uses of to-infinitives in Korean English newspapers can be best viewed as part of the characteristics of Korean English as a newly developing variety of World Englishes.
                The language of Korean English newspapers, when compared with that of American or British English newspapers, shows many interesting types of linguistically meaningful differences through various grammatical constructs and expressions such as to-infinitives. This study is a corpus-based analysis of the to-infinitives used in Korean English newspapers, and its main goal is to investigate the characteristic uses of the linguistic pattern, using Korean English Newspaper Corpus (KENC) and Frown/FLOB Corpora, and to explain the nonnativeness revealed in them from the perspective of successful users of English in the context of World Englishes. The results indicate that the unusually high frequency of the infinitive marker to in the Korean English newspapers is mainly due to the four different morphosyntactic patterns strongly preferred by Korean English users. Besides, it turned out that some salient expression patterns are overused in Korean English newspapers, which often contributes to the unusual frequency of the infinitive marker as well. This study suggests that the types of nonnativeness found in the uses of to-infinitives in Korean English newspapers can be best viewed as part of the characteristics of Korean English as a newly developing variety of World Englishes.
            </section>
        </div>
        


    </div>
</template>


<script>
 

export default {
    name:'SecondLayout'

}
</script>

<style>

header {
    width: auto;
    height: 100px;
    text-align: center;
    line-height: 100px;  
    margin-bottom: 10px;
}
.parent {
    display: flex;
}
aside {
    flex: 0.5;
    height: 300px;
    text-align: left;
    padding: 10px;
    padding-left: 20px;
}
section{
    flex: 1.5;
    margin-left:10px;
    height: 300px;
    text-align: left;
    padding: 10px;

}
.color {
    background-color: rgb(160, 76, 160, 0.2);
    border: 1px dashed purple;
}
.article {
  overflow: auto;
}

</style>
