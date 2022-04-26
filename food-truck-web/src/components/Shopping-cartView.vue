<template>
  <div class="Shopping-cart">
    <h1>Shopping Cart</h1>
    <table id="cart">
        <tr>
            <th>Truck Name</th>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        <tbody>
          <slot name="cratlist"></slot>
        </tbody>
        <tfoot>
          <tr>
              <td id="total">Total: {{totalPrice}}</td>
          </tr>
        </tfoot>
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
  #cart{
    width: 50%;
    position: relative;
    margin:auto;
  }
  #total{
    text-align: right;
  }
</style>
