<template>

    <!-- 두번째 방법 -->
    <div class="container">
        <div class="parent">
            <div class="boxSize_one color"></div>
            <div class="boxSize_one color"></div>
            <div class="boxSize_one color"></div>
            <div class="boxSize_one color"></div>
        </div>
        <div>
            <div class="boxSize_two color"></div>
            <div class="boxSize_one color" style="margin-right: 4px; float: right;"></div>
        </div>
        <div >
            <div class="boxSize_three color"></div>
        </div>
        <div >
            <div class="boxSize_four color"></div>
        </div>


    </div>
</template>


<script>
 

export default {
    name:'testTest'

}
</script>

<style>

.container {
}
.boxSize_one {
    width: calc( 25% - 5px );  
    padding-top: 10%;
    flex: 0.5;
    margin : 5px;
    margin-left: 0px;
}
.secondLine {
} 
.boxSize_two{
    width: calc( 50% - 6px);
    padding-top: 10%;
    border: 1px dashed purple;
    float: left;
    margin: 5px;
    margin-left: 0px;

}
.floatR {
    float: right;
}
.parent {
    display: flex;
}
.boxSize_three{
    width: calc( 75% - 5px); 
    padding-top: 10%;
    border: 1px dashed purple;
    display: flex;
    float: right;
    margin: 5px;

}
.boxSize_four{
    width: calc( 100% - 5px); 
    padding-top: 10%;
    border: 1px dashed black;
    float: right;
    margin: 5px;


}
.border {
    border: none;
    background-color: white;
}
.color {
    background-color: rgb(160, 76, 160, 0.2);
    border: 1px dashed purple;

}

</style>
