<template>

  <div class="hello">

  </div>

</template>

<script>
  import JQuery from 'jquery'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

    }
  },
  mounted() {

    let $ = JQuery;

    var $body = $('body');

    $('html').on('keydown', function(e) {
      var $bubble;

      if (e.key == ' ') {
        $bubble = $('<div>');
        $bubble.addClass('bubble');
        $bubble.css({
          'top':100,
          'left': 100
        });
        $body.append($bubble);
      }
    });

    $body.on('click', '.bubble', function(){
      console.log(this);
      $(this).addClass('isPopping');
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  html{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *, *::before, *::after{
    box-sizing: inherit;
  }

  .bubble {
    left: 200px;
    top: 200px;
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: lightblue;
  }

</style>
