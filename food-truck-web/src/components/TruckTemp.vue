<template>
  <div class="TruckTemp">
    <h1 class="title1">{{ Tname }}</h1>
    <div id="TruckDetail">
      <slot name="Tpicture"><img alt="Truck1 Logo" src= "..\assets\logo.png" height="800" width="600"></slot>
      <table>
          <tr>
              <th>Name</th>
              <td>{{Tname}}</td>
          </tr>
          <tr>
              <th>Location:</th>
              <td>{{TLocation}}</td>
          </tr>
          <tr>
              <th>Hours</th>
              <td>{{Thours}}</td>
          </tr>
      </table>
    </div>
    <slot name="TlocationP"><p>Location of Map</p></slot>
    <slot name="Tmenu1"><p>Location of Menu</p></slot>
    <slot name="Tmenu2"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TruckTemp',
  props: {
    Tname: String,
    TLocation: String,
    Thours: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title1{
  margin: 5px;
  padding: 5px;
}

#TruckDetail{
    display:flex;
    flex-wrap: wrap;
    td{
        width:70%;
    }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.list1 li{
  margin: 0 35px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
    font-size: 55px;
  }
h2 {
    font-size: 33px;
}
h3 {
  font-size: 30px;
}
p {
  font-size: 20px;
}
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 25px;
  }
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 15px;
  }
}
@media only screen and (max-width: 320px) {
  h1 {
    font-size: 23px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 15px;
  }
  p {
    font-size: 10px;
  }
}
thead th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  background: hsl(20, 50%, 70%);
}

thead th:first-child {
  left: 0;
  z-index: 3;
}

tfoot {
  position: -webkit-sticky;
  bottom: 0;
  z-index: 2;
}

tfoot td {
  position: sticky;
  bottom: 0;
  z-index: 2;
  background: hsl(20, 50%, 70%);
}

tfoot td:first-child {
  z-index: 3;
}

tbody {
  overflow: scroll;
  height: 200px;
}

/* MAKE LEFT COLUMN FIXEZ */
tr > :first-child {
  position: -webkit-sticky;
  position: sticky;
  background: hsl(180, 50%, 70%);
  left: 0;
}
/* don't do this */
tr > :first-child {
  box-shadow: inset 0px 1px black;
}
</style>
