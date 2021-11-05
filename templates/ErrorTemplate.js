const Errortemplate = document.createElement("template");

Errortemplate.innerHTML = `
<style type="text/css">
  * {
    margin: 0;
    padding: 0;
    background: #24956a;
    color: white;
    text-align: center;
  }
  .wrapper {
    height: 100vh;
  }
  .four {
    padding-top: 100px;
    font-size: 10em;
  }
  .text {
    
    font-family: arial;
    
    
    
    

  }
</style>
<div class="wrapper">
  <div class="four">
     404
  </div>
  <div class="text">
    Please add "/api/data.json" to the url attribute in the array-credit-lock
  </div>
</div>

`;

export default Errortemplate