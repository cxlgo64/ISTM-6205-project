<template>
  <header>
    <img alt="GWFBFT logo" src="../assets/logo.png" height="20" width="20">
    <p>GWU Food Trucks Foggy Bottom</p>
     <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/food-truck-home">Food Trucks and Menus</router-link></li>
        <li><router-link to="/shopping-cart">Cart</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
      </ul>
    </nav>
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

  nav {
    margin-left: auto;
    font-size: 12px;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
    }
  }
</style>
