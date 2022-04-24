<template>
  <header>
    <div class="headerbox">
      <div class="logo"><img alt="GWFBFT logo" src="../assets/Logo.jpg" height="50" width="80"></div>
      <div class="titleh"><p>Fresh Food Trucks at GWU Foggy Bottom</p></div>
    </div>
  </header>
</template>

<style lang="scss">
  header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: .5rem 1rem;

    p {
      margin-left: 1rem;
    }
  }
  .headerbox {
    display: flex;
    flex-flow: row wrap;
  }
  .logo {
     flex: 1;
  }
  .titleh {
     flex: 1;
  }
  //Tablet View
@media only screen and (max-width: 768px) {
  nav{
    font-size: 15px;
  }
}

//Mobile View
@media only screen and (max-width: 320px) {
  nav{
    font-size: 10px;
  }
}
</style>
