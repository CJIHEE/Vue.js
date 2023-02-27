<template>

    <!-- 첫번째 방법 -->
    <div class="container">
        <div class="parent">
            <div class="boxSize_one color"></div>
            <div class="boxSize_one color"></div>
            <div class="boxSize_one color"></div>
            <div class="boxSize_one color"></div>
        </div>
        <div class="parent">
            <div class="boxSize_two color"></div>
            <div class="boxSize_one border"></div>
            <div class="boxSize_one color" ></div>
        </div>
        <div class="parent">
            <div class="boxSize_one border"></div>
            <div class="boxSize_three color"></div>
        </div>
        <div class="parent">
            <div class="boxSize_four color"></div>
        </div>


    </div>
</template>


<script>
 

export default {
    name:'FirstLayout'

}
</script>

<style>

.container {
}
.boxSize_one {
    width: 25%;  
    padding-top: 10%;
    flex: 0.5;
    margin: 5px;
    margin-left: 0px;
}
.secondLine {
} 
.boxSize_two{
    width: 50%;
    padding-top: 10%;
    border: 1px dashed purple;
    float: left;
    margin: 5px 5px 5px 0px;
    flex: 1.01;

}
.floatR {
    float: right;
}
.parent {
    display: flex;
}
.boxSize_three{
    width: 75%; 
    padding-top: 10%;
    border: 1px dashed purple;
    display: flex;
    margin: 5px;
    flex: 1.5;

}
.boxSize_four{
    width: 100%; 
    padding-top: 10%;
    border: 1px dashed black;
    margin: 5px;
    flex: 1;

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
