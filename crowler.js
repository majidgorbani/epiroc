var growler = new Vue({
    el: '#epiRock',
    data:{
        appName: 'Growler',
        headers:'headers',
        accentColor:'accent-Color',
        someText: "this is not right",
        query:'',
        messages:'',
        searchIndexes:[]

        
        },
        mounted: function() {
            $(document).ready(function(){
     
                $("#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sbox").on('click', initPopup);
     
             });
             function initPopup(){
                 alert('hell')
             }
         },
         methods: {
            initPopup: function () {
              alert('message')
            }
        }

    });      