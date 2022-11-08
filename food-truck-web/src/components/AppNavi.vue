<template>
    <div class="navh">
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/food-truck-home">Food Trucks List</router-link></li>
            <li><router-link to="/shopping-cart">Cart</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
          </ul>
        </nav>
    </div>
</template>

<style lang="scss">
  nav {
    margin-left: auto;
    font-size: 18px;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
    }
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
