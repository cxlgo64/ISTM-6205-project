<template>
  <div class="Shopping-cart">
    <h1>Shopping Cart</h1>
    <table id="cart">
        <tr>
            <th>Truck Name</th>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Action</th>
        </tr>
        <tr>
            {{cartlist}}
        </tr>
        <tr>
            <td id="total">Total: {{totalPrice}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'shopping-cart',
  props: {
    cartlist: String,
    totalPrice: String
  }
})
</script>

<style lang="scss">
  .Shopping-cart h1 {
    font-size: 25px;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  #total{
    text-align: right;
  }
</style>
